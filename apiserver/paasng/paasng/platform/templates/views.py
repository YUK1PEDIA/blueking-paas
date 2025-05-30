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

from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets
from rest_framework.response import Response

from paasng.platform.templates.models import Template
from paasng.platform.templates.serializers import SearchTemplateSLZ, TemplateSLZ


class TemplateViewSet(viewsets.ViewSet):
    def list_tmpls(self, request, tpl_type):
        """获取指定类型的模板列表"""
        slz = SearchTemplateSLZ(data=request.query_params)
        slz.is_valid(raise_exception=True)

        tmpls = Template.objects.filter(type=tpl_type, is_hidden=False)
        return Response(TemplateSLZ(tmpls, many=True).data)


class TemplateDetailedViewSet(viewsets.ViewSet):
    @swagger_auto_schema(response_serializer=TemplateSLZ(many=True))
    def list(self, request, tpl_type):
        """获取指定类型的模板列表"""
        tmpls = Template.objects.filter(type=tpl_type, is_hidden=False)
        return Response(TemplateSLZ(tmpls, many=True).data)
