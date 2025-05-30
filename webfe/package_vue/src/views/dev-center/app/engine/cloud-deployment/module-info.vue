<template>
  <paas-content-loader
    :is-loading="isPageLoading"
    placeholder="deploy-module-info-loading"
    :offset-top="0"
    :is-transition="false"
    class="deploy-action-box"
  >
    <div class="module-info-container">
      <!-- 网络配置 -->
      <deploy-network @set-network-loading="setNetworkLoading" />

      <!-- 部署限制 -->
      <div class="base-info-container">
        <div class="mt24">
          <div class="title-wrapper">
            <span class="base-info-title">
              {{ $t('部署限制') }}
            </span>
            <div class="edit-container" @click="handleEdit('isDeployLimitEdit')" v-if="!isDeployLimitEdit">
              <i class="paasng-icon paasng-edit-2 pl10" />
              {{ $t('编辑') }}
            </div>
          </div>

          <div class="info flex-row align-items-center mt8">
            {{ $t('开启部署权限控制，仅管理员可部署、下架该模块。') }}
          </div>
        </div>
        <div class="form-detail mt20 pb24 border-b" v-if="!isDeployLimitEdit">
          <bk-form>
            <bk-form-item
              :label="`${$t('预发布环境')}：`">
              <div class="form-text">{{ deployLimit.stag ? $t('已开启') : $t('未开启') }}</div>
            </bk-form-item>
            <bk-form-item
              :label="`${$t('生产环境')}：`">
              <div class="form-text">{{ deployLimit.prod ? $t('已开启') : $t('未开启') }}</div>
            </bk-form-item>
          </bk-form>
        </div>

        <div class="form-edit mt20 pb20 border-b" v-else>
          <div class="ml80">
            <bk-checkbox v-model="deployLimit.stag">{{ $t('预发布环境') }}</bk-checkbox>
            <bk-checkbox v-model="deployLimit.prod">{{ $t('生产环境') }}</bk-checkbox>
          </div>
          <div class="ml80">
            <bk-button
              :theme="'primary'"
              title="保存"
              class="mr20 mt20"
              @click="handleSaveEnv">
              {{ $t('保存') }}
            </bk-button>
            <bk-button
              :theme="'default'"
              title="取消"
              class="mt20"
              @click="handleCancel('deploy-permissions')">
              {{ $t('取消') }}
            </bk-button>
          </div>
        </div>
      </div>

      <!-- 出口IP -->
      <div class="base-info ip-info-container">
        <div class="mt24">
          <div class="title-wrapper">
            <span class="base-info-title">
              {{ $t('出口IP') }}
            </span>
            <div class="edit-container" @click="handleEdit('isIpInfoEdit')" v-if="!isIpInfoEdit">
              <i class="paasng-icon paasng-edit-2 pl10" />
              {{ $t('编辑') }}
            </div>
          </div>

          <div class="info flex-row align-items-center mt8">
            {{ $t('如果模块环境需要访问设置了 IP 白名单的外部服务，你可以在这里获取应用的出口 IP 列表，以完成外部服务授权。') }}
          </div>
        </div>
        <div class="form-detail mt20 pb24 flex-row" v-if="!isIpInfoEdit">
          <bk-form>
            <bk-form-item
              :label="`${$t('预发布环境')}：`">
              <div class="flex-row" v-if="gatewayInfos.stag.node_ip_addresses.length">
                <div class="ip-address">
                  <div
                    class="form-text ip-address-text"
                    v-for="(nodeIp, nodeIpIndex) of gatewayInfos.stag.node_ip_addresses"
                    :key="nodeIpIndex">{{ nodeIp.internal_ip_address }}</div>

                </div>
                <div
                  class="copy-icon"
                  :title="$t('复制')"
                  @click="handleCopyIp('stag')"
                >
                  <i class="paasng-icon paasng-general-copy" />
                </div>
              </div>
              <div v-else>{{ $t('无') }}</div>
            </bk-form-item>
          </bk-form>
          <bk-form class="ml60">
            <bk-form-item
              :label="`${$t('生产环境')}：`">
              <div class="flex-row" v-if="gatewayInfos.prod.node_ip_addresses.length">
                <div class="ip-address">
                  <div
                    class="form-text ip-address-text"
                    v-for="(nodeIp, nodeIpIndex) of gatewayInfos.prod.node_ip_addresses"
                    :key="nodeIpIndex">
                    {{ nodeIp.internal_ip_address }}
                  </div>
                </div>
                <div
                  class="copy-icon"
                  :title="$t('复制')"
                  @click="handleCopyIp('prod')"
                >
                  <i class="paasng-icon paasng-general-copy" />
                </div>
              </div>
              <div v-else>{{ $t('无') }}</div>
            </bk-form-item>
          </bk-form>
        </div>

        <div class="form-edit" v-else>
          <div class="content no-border">
            <div class="pre-release-wrapper">
              <div class="header">
                <div class="header-title">
                  {{ $t('预发布环境') }}
                </div>
                <div class="switcher-wrapper">
                  <span
                    v-if="gatewayInfos.stag.created !== 'Invalid date'
                      && gatewayInfos.stag.node_ip_addresses.length && !gatewayInfosStagLoading"
                    class="f12 date-tip"
                    @click="stopCapturing"
                  >{{ gatewayInfos.stag.created + $t('已获取') }}</span>
                  <bk-switcher
                    v-model="gatewayEnabled.stag"
                    :disabled="curStagDisabled"
                    @change="gatewayInfosHandler(...arguments, 'stag')"
                  />
                </div>
              </div>
              <div
                class="ip-content"
                contenteditable="false"
              >
                <div
                  v-if="gatewayInfos.stag.node_ip_addresses.length"
                  class="copy-wrapper"
                  :title="$t('复制')"
                  @click="handleCopyIp('stag')"
                >
                  <i class="paasng-icon paasng-general-copy" />
                </div>
                <template v-if="gatewayInfos.stag.node_ip_addresses.length">
                  <div
                    v-for="(nodeIp, nodeIpIndex) of gatewayInfos.stag.node_ip_addresses"
                    :key="nodeIpIndex"
                    class="ip-item"
                  >
                    {{ nodeIp.internal_ip_address }}
                  </div>
                </template>
                <template v-else>
                  <div class="no-ip">
                    <p> {{ $t('暂未获取出流量 IP 列表') }} </p>
                    <p> {{ $t('如有需要请联系管理员获取') }} </p>
                  </div>
                </template>
              </div>
            </div>
            <div class="production-wrapper has-left">
              <div class="header">
                <div class="header-title">
                  {{ $t('生产环境') }}
                </div>
                <div class="switcher-wrapper">
                  <span
                    v-if="gatewayInfos.prod.created !== 'Invalid date'
                      && gatewayInfos.prod.node_ip_addresses.length && !gatewayInfosProdLoading"
                    class="f12 date-tip"
                    @click="stopCapturing"
                  >{{ gatewayInfos.prod.created + $t('已获取') }}</span>
                  <bk-switcher
                    v-model="gatewayEnabled.prod"
                    :disabled="curProdDisabled"
                    @change="gatewayInfosHandler(...arguments, 'prod')"
                  />
                </div>
              </div>
              <div
                class="ip-content"
                contenteditable="false"
              >
                <div
                  v-if="gatewayInfos.prod.node_ip_addresses.length"
                  class="copy-wrapper"
                  :title="$t('复制')"
                  @click="handleCopyIp('prod')"
                >
                  <i class="paasng-icon paasng-general-copy" />
                </div>
                <template v-if="gatewayInfos.prod.node_ip_addresses.length">
                  <div
                    v-for="(nodeIp, nodeIpIndex) of gatewayInfos.prod.node_ip_addresses"
                    :key="nodeIpIndex"
                    class="ip-item"
                  >
                    {{ nodeIp.internal_ip_address }}
                  </div>
                </template>
                <template v-else>
                  <div class="no-ip">
                    <p> {{ $t('暂未获取出流量 IP 列表') }} </p>
                    <p> {{ $t('如有需要请联系管理员获取') }} </p>
                  </div>
                </template>
              </div>
            </div>
            <div class="ip-tips">
              <i class="paasng-icon paasng-info-circle" />
              {{ $t('注意：重复获取列表可能会获得不一样的结果，请及时刷新外部服务白名单列表') }}
            </div>
          </div>
          <div class="ml80">
            <bk-button
              :theme="'default'"
              title="取消"
              class="mt20"
              @click="handleCancel">
              {{ $t('取消') }}
            </bk-button>
          </div>
        </div>
      </div>
    </div>
  </paas-content-loader>
</template>
<script>import appBaseMixin from '@/mixins/app-base-mixin';
import moment from 'moment';
import deployNetwork from './deploy-network';
import { cloneDeep } from 'lodash';
export default {
  components: {
    deployNetwork,
  },
  mixins: [appBaseMixin],
  data() {
    return {
      isLoading: false,
      deployLimit: { stag: false, prod: false },
      isDeployLimitEdit: false,
      isIpInfoEdit: false,
      gatewayInfos: {
        stag: {
          created: '',
          node_ip_addresses: [],
        },
        prod: {
          created: '',
          node_ip_addresses: [],
        },
      },
      gatewayEnabled: {
        stag: false,
        prod: false,
      },
      gatewayInfosStagLoading: false,
      gatewayInfosProdLoading: false,
      isGatewayInfosBeClearing: false,
      pageLoading: true,
      isNetworkLoading: true,
      envs: [],
      backupDeployLimit: {},
    };
  },
  computed: {
    curAppModule() {
      return this.$store.state.curAppModule;
    },

    curStagDisabled() {
      if (this.gatewayInfosStagLoading || this.isGatewayInfosBeClearing) return true;
      if (this.gatewayInfos.stag.node_ip_addresses.length) return false;
      // 如果应用未支持开关出口IP管理, 则不允许打开出口IP
      return !this.curAppInfo.feature.TOGGLE_EGRESS_BINDING;
    },

    curProdDisabled() {
      // 正式环境，没有启用 egress 的，也不再允许用户自己启用
      if (this.gatewayInfosProdLoading || this.isGatewayInfosBeClearing) return true;
      if (this.gatewayInfos.prod.node_ip_addresses.length) return false;
      // 通过 FeatureFlag 控制用户是否可自己操作
      return !this.curAppInfo.feature.TOGGLE_EGRESS_BINDING;
    },

    // 基本信息是否为编辑态
    isModuleInfoEdit() {
      return this.$store.state.cloudApi.isModuleInfoEdit;
    },

    isPageLoading() {
      if (!this.pageLoading && !this.isNetworkLoading) {
        return false;
      }
      return true;
    },
  },

  mounted() {
    // 部署限制
    this.fetchEnvProtection();

    // 出口IP管理
    this.getGatewayInfos('stag');
    this.getGatewayInfos('prod');

    // 组件销毁前
    this.$once('hook:beforeDestroy', () => {
      // 关闭基本信息编辑态
      this.$store.commit('cloudApi/updateModuleInfoEdit', false);
    });
  },
  methods: {
    // 编辑
    handleEdit(value) {
      this[value] = true;
      this.$nextTick(() => {
        this.$refs.imageRef?.focus();
      });
    },

    handleCancel(key) {
      if (key === 'deploy-permissions') {
        // 部署限制还原
        this.deployLimit = cloneDeep(this.backupDeployLimit);
      }
      this.isDeployLimitEdit = false;
      this.isIpInfoEdit = false;
      this.$refs.baseInfoRef?.clearError();
    },

    handleSaveEnv() {
      this.envs = Object.keys(this.deployLimit).reduce((p, v) => {
        if (this.deployLimit[v]) {
          p.push(v);
        }
        return p;
      }, []);
      this.fetchSetDeployLimit(); // 保存环境
    },

    stopCapturing(event) {
      event.stopPropagation();
    },

    async fetchEnvProtection() {
      try {
        const res = await this.$store.dispatch('module/getEnvProtection', {
          appCode: this.appCode,
          modelName: this.curModuleId,
        });
        if (res.length) {
          if (res.length === 2) {
            res.forEach((item) => {
              this.deployLimit[item.environment] = true;
            });
          } else {
            const curEnv = res[0].environment;
            if (curEnv === 'stag') {
              this.deployLimit.stag = true;
              this.deployLimit.prod = false;
            } else {
              this.deployLimit.stag = false;
              this.deployLimit.prod = true;
            }
          }
        } else {
          this.deployLimit = {
            stag: false,
            prod: false,
          };
        }
        this.backupDeployLimit = cloneDeep(this.deployLimit);
      } catch (e) {
        this.$paasMessage({
          limit: 1,
          theme: 'error',
          message: e.detail || e.message || this.$t('接口异常'),
        });
      }
    },

    // 设置部署限制环境
    async fetchSetDeployLimit() {
      try {
        await this.$store.dispatch('module/setDeployLimitBatch', {
          appCode: this.appCode,
          modelName: this.curModuleId,
          params: {
            operation: 'deploy',
            envs: this.envs,
          },
        });
        // 部署限制信息
        this.fetchEnvProtection();
        this.isDeployLimitEdit = false;
        this.$paasMessage({
          theme: 'success',
          message: this.$t('操作成功'),
        });
      } catch (e) {
        this.$paasMessage({
          limit: 1,
          theme: 'error',
          message: e.detail || e.message || this.$t('接口异常'),
        });
      }
    },

    getGatewayInfos(env) {
      const appCode = this.$route.params.id;
      this.$store.dispatch('baseInfo/getGatewayInfos', {
        appCode,
        env,
        moduleName: this.curAppModule.name,
      }).then((res) => {
        this.gatewayInfos[env] = {
          created: moment(res.rcs_binding_data.created).startOf('minute')
            .fromNow(),
          node_ip_addresses: res.rcs_binding_data.state.node_ip_addresses,
        };
        this.gatewayEnabled[env] = true;
      })
        .catch(() => {
          this.gatewayInfos[env] = {
            created: '',
            node_ip_addresses: [],
          };
          this.gatewayEnabled[env] = false;
        })
        .finally(() => {
          this.pageLoading = false;
        });
    },

    gatewayInfosHandler(payload, env) {
      this.curEnv = env;
      if (!payload) {
        const title = this.curEnv === 'stag' ? this.$t('确认清除预发布环境出口 IP 信息？') : this.$t('确认清除生产环境出口 IP 信息？');

        const _self = this;
        _self.$bkInfo({
          title,
          subTitle: this.$t('IP 列表可能会在下次重新获取时更新，届时请及时刷新外部服务白名单。'),
          maskClose: true,
          width: 420,
          extCls: 'paas-module-manager-switch-cls',
          confirmFn() {
            const appCode = _self.$route.params.id;
            const env = _self.curEnv;
            _self.isGatewayInfosBeClearing = true;
            _self.$store.dispatch('baseInfo/clearGatewayInfos', {
              appCode,
              env,
              moduleName: _self.curAppModule.name,
            }).then(() => {
              _self.gatewayInfos[env] = {
                created: '',
                node_ip_addresses: [],
              };
              _self.gatewayEnabled[env] = false;
            })
              .catch((res) => {
                _self.$paasMessage({
                  limit: 1,
                  theme: 'error',
                  message: res.detail || this.$t('服务暂不可用，请稍后再试'),
                });
              })
              .finally(() => {
                _self.isGatewayInfosBeClearing = false;
              });
          },
          cancelFn() {
            if (_self.curEnv === 'stag') {
              _self.gatewayEnabled.stag = true;
            } else {
              _self.gatewayEnabled.prod = true;
            }
          },
        });
      } else {
        this.enableGatewayInfos();
      }
    },

    enableGatewayInfos() {
      const appCode = this.$route.params.id;
      const env = this.curEnv;

      if (env === 'stag') {
        this.gatewayInfosStagLoading = true;
      } else {
        this.gatewayInfosProdLoading = true;
      }

      this.$store.dispatch('baseInfo/enableGatewayInfos', {
        appCode,
        env,
        moduleName: this.curAppModule.name,
      }).then((res) => {
        this.gatewayInfos[env] = {
          created: moment(res.rcs_binding_data.created).startOf('minute')
            .fromNow(),
          node_ip_addresses: res.rcs_binding_data.state.node_ip_addresses,
        };
        this.gatewayEnabled[env] = true;
      })
        .catch((res) => {
          if (env === 'stag') {
            this.gatewayEnabled.stag = false;
          } else {
            this.gatewayEnabled.prod = false;
          }
          this.$paasMessage({
            limit: 1,
            theme: 'error',
            message: res.detail || this.$t('服务暂不可用，请稍后再试'),
          });
        })
        .finally(() => {
          if (env === 'stag') {
            this.gatewayInfosStagLoading = false;
          } else {
            this.gatewayInfosProdLoading = false;
          }
        });
    },

    // 复制功能
    handleCopyIp(env) {
      const copyIp = this.gatewayInfos[env].node_ip_addresses.map(item => item.internal_ip_address).join(';');
      const el = document.createElement('textarea');
      el.value = copyIp;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      this.$bkMessage({ theme: 'primary', message: this.$t('复制成功'), delay: 2000, dismissable: false });
    },

    setNetworkLoading(loading) {
      this.isNetworkLoading = loading;
    },
  },
};
</script>
<style lang="scss" scoped>
  .module-info-container{
    padding: 0 20px 20px;
    .base-info-title{
      color: #313238;
      font-size: 14px;
      font-weight: bold;
      text-align: right;
    }
    .edit-container{
      color: #3A84FF;
      font-size: 12px;
      cursor: pointer;
      padding-left: 10px;
    }

    .form-detail{
      .form-text{
          color: #313238;
        }
    }

    .input-tips {
          color: #979ba5;
          font-size: 12px;
      }

    .form-text-append{
      color: #3a84ff;
      background: #FAFBFD;
      border-radius: 0 2px 2px 0;
      cursor: pointer;
      line-height: 30px !important;
    }

    .border-b{
      border-bottom: 1px solid #eaebf0;
    }

    .copy-icon {
        font-size: 16px;
        cursor: pointer;
        &:hover {
            color: #3a84ff;
        }
    }

    .ip-info-container{
        .content {
            margin: 20px 40px 0 80px;
            border: 1px solid #dcdee5;
            border-radius: 2px;
            &.no-border {
                border: none;
            }
            .info-special-form:nth-child(2) {
                position: relative;
                top: -4px;
            }
            .title-label {
                display: inline-block;
                padding-left: 20px;
                width: 140px;
                height: 42px;
                line-height: 42px;
                border: 1px solid #dcdee5;
                color: #313238;
                &.pl {
                    padding-left: 62px;
                }
            }
            .module-name,
            .module-init-type {
                display: inline-block;
                position: relative;
                padding-left: 16px;
                width: 821px;
                line-height: 40px;
                border-top: 1px solid #dcdee5;
                border-right: 1px solid #dcdee5;
                border-bottom: 1px solid #dcdee5;
            }
            .switcher-content {
                position: absolute;
                display: inline-block;
                margin-left: 20px;
                font-size: 12px;
                color: #979ba5;
                line-height: 24px;
            }
            .switch-button {
                margin-top: 20px;
                padding-left: 100px;
            }
            .pre-release-wrapper,
            .production-wrapper {
                display: inline-block;
                position: relative;
                width: 48%;
                border: 1px solid #dcdee5;
                border-radius: 2px;
                vertical-align: top;
                float: left;
                &.has-left {
                    float: right;
                }
                .header {
                    height: 41px;
                    line-height: 41px;
                    border-bottom: 1px solid #dcdee5;
                    background: #fafbfd;
                    .header-title {
                        margin-left: 20px;
                        color: #63656e;
                        font-weight: bold;
                        float: left;
                    }
                    .switcher-wrapper {
                        margin-right: 20px;
                        float: right;
                        .date-tip {
                            margin-right: 5px;
                            line-height: 1;
                            color: #979ba5;
                            font-size: 12px;
                        }
                    }
                }
                .ip-content {
                    padding: 14px 40px 14px 14px;
                    height: 138px;
                    overflow-x: hidden;
                    overflow-y: auto;
                    .copy-wrapper {
                        position: absolute;
                        right: 20px;
                        top: 48px;
                        font-size: 16px;
                        cursor: pointer;
                        &:hover {
                            color: #3a84ff;
                        }
                    }
                    .ip-item {
                        display: inline-block;
                        margin-left: 10px;
                        vertical-align: middle;
                    }
                    .no-ip {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        font-size: 12px;
                        color: #63656e;
                        p:nth-child(2) {
                            margin-top: 2px;
                        }
                    }
                }
            }
            .ip-tips {
                padding-top: 7px;
                color: #63656e;
                font-size: 12px;
                clear: both;
                i {
                    color: #ff9c01;
                }
            }
        }
    }

    .info {
        color: #979ba5;
        font-size: 12px;
    }

    .ml80{
      margin-left: 80px;
    }
    .ml60{
      margin-left: 60px;
    }

    .ml150{
      margin-left: 150px;
    }
    .ip-address{
      width: 280px;
      display: flex;
      flex-wrap: wrap;
      &-text{
        width: 140px;
      }
    }

    .title-wrapper {
      display: flex;
      align-items: center;
    }
    .mt8 {
      margin-top: 8px;
    }
    .mt24 {
      margin-top: 24px;
    }
    .pb24 {
      padding-bottom: 24px;
    }
  }
</style>
