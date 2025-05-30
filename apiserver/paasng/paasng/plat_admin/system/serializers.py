# -*- coding: utf-8 -*-
# TencentBlueKing is pleased to support the open source community by making
# 蓝鲸智云 - PaaS 平台 (BlueKing - PaaS System) available.
# Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
# Licensed under the MIT License (the "License"); you may not use this file except
# in compliance with the License. You may obtain a copy of the License at
#
#     http://opensource.org/licenses/MIT
#
# Unless required by applicable law or agreed to in writing, software distributed under
# the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
# either express or implied. See the License for the specific language governing permissions and
# limitations under the License.
#
# We undertake not to change the open source license (MIT license) applicable
# to the current version of the project delivered to anyone in the future.

from typing import Optional

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from paasng.accessories.publish.market.models import MarketConfig
from paasng.accessories.publish.market.utils import MarketAvailableAddressHelper
from paasng.platform.applications.models import Application, ModuleEnvironment
from paasng.platform.modules.models import Module
from paasng.utils.serializers import UserNameField


class QueryUniApplicationsByID(serializers.Serializer):
    """Serializer for query universal applications by ID"""

    id = serializers.ListField(
        required=True,
        min_length=1,
        max_length=20,
        child=serializers.CharField(allow_blank=False),
        help_text="应用 ID，最多不超过 20 个",
    )
    include_deploy_info = serializers.BooleanField(
        help_text="是否在结果中返回最近部署者信息，默认不返回", default=False
    )
    include_inactive_apps = serializers.BooleanField(help_text="是否查询已下架的应用", default=False)
    # 下面这些信息需要调用外部 API 或 连表查询耗时比较久，但为了不影响存量调用默认值设置为 True
    include_developers_info = serializers.BooleanField(
        help_text="是否在结果中返回开发者信息。请注意，此选项会延长接口响应时间。若非必需，建议关闭以提升效率。默认返回。",
        default=True,
    )
    include_contact_info = serializers.BooleanField(
        help_text="是否在结果中返回应用联系人（即最近操作人），默认返回", default=True
    )
    include_market_info = serializers.BooleanField(help_text="是否在结果中返回应用市场信息，默认不返回", default=False)


class QueryUniApplicationsByUserName(serializers.Serializer):
    """Serializer for query universal applications by username"""

    username = serializers.CharField(help_text="用户名")


class UniversalAppSLZ(serializers.Serializer):
    """Serializer for universal apps"""

    source = serializers.IntegerField(source="get_source", help_text="应用来源平台。1 - 默认, 2 - 旧版本")
    name = serializers.CharField(help_text="应用名称")
    name_en = serializers.CharField(help_text="应用英文名称")
    code = serializers.CharField(help_text="应用 ID（Code）")
    region = serializers.CharField(help_text="应用版本信息")
    creator = serializers.CharField(help_text="应用创建者")
    created = serializers.DateTimeField(help_text="创建时间")
    # 普通应用的导航地址和云原生应用的导航地址不一致，其他平台如 lesscode 要展示开发者中心的地址链接时，需要根据应用类型来区分
    type = serializers.CharField(help_text="应用类型", default="default")
    logo_url = serializers.CharField(help_text="应用 logo 图片地址", allow_null=True)
    developers = serializers.ListField(child=serializers.CharField(), help_text="开发者人员列表", allow_null=True)
    tenant_id = serializers.CharField(help_text="所属租户")
    app_tenant_mode = serializers.CharField(help_text="租户类型")
    app_tenant_id = serializers.CharField(help_text="租户 ID")


class ContactInfoSLZ(serializers.Serializer):
    """Serializer for app's contact info"""

    latest_operator = UserNameField(help_text="最近操作者")
    recent_deployment_operators = serializers.ListSerializer(
        child=UserNameField(help_text="用户名", default=None), help_text="近期部署人员列表"
    )


class BasicMarketInfoSLZ(serializers.ModelSerializer):
    """仅返回用户在页面能看到信息，后台 DB 存储的冗余数据不返回"""

    enabled = serializers.BooleanField(read_only=True, help_text="是否上架到市场")
    market_address = serializers.SerializerMethodField(read_only=True, allow_null=True, help_text="市场访问链接")

    class Meta:
        model = MarketConfig
        fields = [
            "enabled",
            "market_address",
        ]

    def get_market_address(self, instance: MarketConfig) -> Optional[str]:
        entrance = MarketAvailableAddressHelper(instance).access_entrance
        return entrance.address if entrance is not None else None


class QueryApplicationsSLZ(serializers.Serializer):
    """Serializer for querying applications by uuid or code"""

    uuid = serializers.ListField(
        required=False,
        default=list,
        min_length=0,
        max_length=20,
        child=serializers.UUIDField(),
        help_text="应用 UUID，最多不超过 20 个",
    )
    code = serializers.ListField(
        required=False,
        default=list,
        min_length=0,
        max_length=20,
        child=serializers.CharField(allow_blank=False),
        help_text="应用 code，最多不超过 20 个",
    )
    module_id = serializers.UUIDField(help_text="模块 UUID，只支持一个值", required=False)
    env_id = serializers.CharField(help_text="环境 ID，只支持一个值", required=False)
    engine_app_id = serializers.CharField(help_text="引擎应用 ID，只支持一个值", required=False)

    def validate(self, data):
        conds = [val for val in data.values() if val]
        if len(conds) != 1:
            raise ValidationError("仅支持使用一种查询条件")
        return super().validate(data)


class AppBasicSLZ(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ["id", "type", "region", "code", "name"]


class ModuleBasicSLZ(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = ["id", "name"]


class ModuleEnvBasicSLZ(serializers.ModelSerializer):
    engine_app_id = serializers.CharField(read_only=True)

    class Meta:
        model = ModuleEnvironment
        fields = ["id", "environment", "module_id", "engine_app_id", "is_offlined"]


class AddonCredentialsSLZ(serializers.Serializer):
    credentials = serializers.DictField(child=serializers.CharField())


class SearchApplicationSLZ(serializers.Serializer):
    keyword = serializers.CharField(default="", allow_blank=False, help_text="应用ID、应用名称")
    include_inactive_apps = serializers.BooleanField(default=True, help_text="是否查询已下架的应用")


class MinimalAppSLZ(serializers.Serializer):
    code = serializers.CharField(help_text="应用ID")
    name = serializers.CharField(help_text="应用名称")


class ClusterNamespaceSLZ(serializers.Serializer):
    bcs_cluster_id = serializers.CharField(help_text="BCS 集群 ID")
    namespace = serializers.CharField(help_text="命名空间名称")
