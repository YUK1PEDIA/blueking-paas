/*
 * TencentBlueKing is pleased to support the open source community by making
 * 蓝鲸智云 - PaaS 平台 (BlueKing - PaaS System) available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * We undertake not to change the open source license (MIT license) applicable
 * to the current version of the project delivered to anyone in the future.
 */

// 平台管理
export default {
  平台管理: 'Platform Management',
  服务接入: 'Service Integration',
  应用集群: 'App Clusters',
  集群配置: 'Cluster Config',
  集群列表: 'Cluster List',
  未配置: 'Not Configured',
  已配置: 'Configured',
  搜索租户: 'Search Tenant',
  租户: 'Tenant',
  集群: 'Cluster',
  配置: 'Config',
  集群分配: 'Cluster Allocation',
  '集群（预发布环境）': 'Cluster (Staging Env)',
  '集群（生产环境）': 'Cluster (Production Env)',
  '未配置，应用无法部署': 'Not configured, app cannot be deployed',
  前往添加: 'To Add',
  当前租户暂无可用集群: 'No Available Clusters for the Current Tenant',
  您可以: 'You Can',
  '1. 联系平台管理员，为当前租户分配可用集群': '1. Contact the platform administrator to allocate an available cluster for the current tenant',
  '2. 在 [集群列表] 中添加新集群': '2. Add a new cluster in the [Cluster List]',
  分配方式: 'Allocation Method',
  统一分配: 'Unified Allocation',
  按规则分配: 'Rule-based Allocation',
  请选择集群: 'Please Select Cluster',
  '集群分配成功！': 'Cluster Allocation Successful!',
  '如果配置多个集群，开发者在创建应用时需要选择一个，未选择时，使用默认（第一个）集群。': 'If multiple clusters are configured, developers must choose one when creating an application. If not chosen, the default (first) cluster is used.',
  '可选集群({n})': 'Available Clusters ({n})',
  '已选集群({n})': 'Selected Cluster ({n})',
  按环境分配: 'Environment-based Allocation',
  选择全部: 'All',
  暂无已选集群: 'No Selected Clusters',
  添加规则: 'Add Rule',
  '若执行集群扩缩容操作，请及时执行 “同步节点” 操作来更新集群节点状态。': 'If you perform cluster scaling operations, please execute the "Sync Nodes" operation promptly to update the cluster node status.',
  '搜索集群名称、集群ID': 'Search Cluster Name, Cluster ID',
  集群视角: 'Cluster Perspective',
  租户视角: 'Tenant Perspective',
  集群名称: 'Cluster Name',
  可用租户: 'Available Tenants',
  租户信息: 'Tenant Info',
  特性: 'Features',
  节点: 'Nodes',
  同步节点: 'Sync Nodes',
  集群配置未完成: 'Cluster Configuration Incomplete',
  '确认同步节点？': 'Confirm Sync Nodes?',
  '同步集群节点到开发者中心，以便应用开启出口 IP 时能绑定到集群所有节点上。': 'Sync cluster nodes to the developer center, so when the application enables the egress IP, it can bind to all nodes in the cluster.',
  无法删除集群: 'Cannot Delete Cluster',
  '集群（{n}）正在被以下租户、应用使用，无法删除': 'Cluster ({n}) is currently in use by the following tenants and applications and cannot be deleted',
  'Bound-by': 'Bound by',
  '1. 被 {s} 等 <i>{n}</i> 个租户使用，请先在集群配置页面，解除租户与集群的分配关系。': '1. Used by {s} and <i>{n}</i> other tenants. Please unassign the cluster from the tenant on the cluster configuration page first.',
  '被 <i>{n}</i> 个应用模块绑定': 'Bound by <i>{n}</i> application modules',
  '共计 {n} 条': 'Total of {n} entries',
  '确认删除集群？': 'Confirm delete cluster?',
  '删除集群仅会解除与开发者中心的托管关系，集群中已部署的应用和组件仍然可用。如不再需要，请到集群中手动进行清理。': 'Deleting the cluster will only remove its management relationship with the developer center. Applications and components already deployed in the cluster will still be available. If no longer needed, please manually clean up in the cluster.',
  '该操作不可撤销，请输入集群名称': 'This action is irreversible. Please enter the cluster name',
  进行确认: 'Confirm',
  '请输入集群名称：{n}': 'Please enter the cluster name: {n}',
  搜索集群名称: 'Search Cluster Name',
  集群信息: 'Cluster Info',
  集群组件: 'Cluster Components',
  集群特性: 'Cluster Features',
  集群描述: 'Cluster Description',
  集群来源: 'Cluster Source',
  集群认证方式: 'Cluster Authentication Method',
  证书: 'Certificate',
  证书认证机构: 'Certificate Authority',
  客户端证书: 'Client Certificate',
  客户端密钥: 'Client Key',
  项目: 'Project',
  业务: 'Business',
  容器日志目录: 'Container Log Directory',
  '集群访问入口 IP': 'Cluster Access Entry IP',
  'ElasticSearch 集群信息': 'ElasticSearch Cluster Info',
  主机: 'Host',
  端口: 'Port',
  命名空间: 'Namespace',
  应用访问类型: 'APP Access Type',
  应用域名: 'App Domain',
  子路径: 'SubPath',
  子域名: 'SubDomain',
  介绍: 'Introduction',
  说明: 'Description',
  组件介绍: 'Component Introduction',
  组件配置: 'Component Config',
  访问方式: 'Access Method',
  节点标签: 'Node Labels',
  组件状态: 'Component Status',
  '查看 Values': 'View Values',
  '使用默认 values 部署即可。': 'Deploy using default values.',
  安装信息: 'Installation Info',
  '推荐使用的命名空间。如果集群组件是手动安装，请在组件详情中查看实际安装的命名空间。': 'Recommended namespace. If the cluster component is manually installed, please check the actual installed namespace in the component details.',
  不启用: 'Not Enabled',
  组件详情: 'Component Details',
  '为应用提供负载均等功能。': 'Provides load balancing for applications.',
  '云原生应用的控制引擎，必须安装后才能部署应用。': 'Control engine for cloud-native applications, must be installed before deploying applications.',
  'Saas 服务水平扩缩容组件，支持基于资源使用情况调整服务副本数量。': 'SaaS service-level autoscaling component that supports adjusting the services replicas based on resource usage.',
  'Release 名称': 'Release Name',
  部署信息: 'Deploy Info',
  部署时间: 'Deploy Time',
  部署说明: 'Deploy Instructions',
  工作负载状态: 'Workload Status',
  '支持提供出口 IP': 'Supports providing egress IP',
  允许挂载日志到主机: 'Allows mounting logs to host',
  'Ingress 路径是否使用正则表达式': 'Whether Ingress path uses regex',
  使用蓝鲸日志平台方案采集日志: 'Use BK Log Platform for log collection',
  使用蓝鲸监控获取资源使用指标: 'Use BK Monitoring for resource usage metrics',
  支持自动扩缩容: 'Supports auto-scaling',
  高级设置: 'Advanced Settings',
  '节点选择器（nodeSelector）': 'Node Selector (nodeSelector)',
  '容忍度（tolerations）': 'Tolerations (tolerations)',
  '请输入，多个值以英文逗号连接': 'Please enter multiple values separated by commas.',
  '确认删除租户 {k} 的集群分配策略？': 'Are you sure you want to delete the cluster allocation policy for tenant {k}?',
  'Nginx Ingress 控制器，基于 Nginx 实现 HTTP/HTTPS 流量路由、负载均衡、自定义域名、URL 路径规则等功能。': 'Nginx Ingress Controller is an implementation based on NGINX that enables HTTP/HTTPS traffic routing, load balancing, custom domain names, and URL path rules configuration.',
  '将应用的各类日志采集到 ElasticSearch 集群，以支持后续查询标准输出、预定义的结构化、Nginx 接入层等日志。': 'Collect various application logs into the ElasticSearch cluster to support subsequent queries of standard output, predefined structured, Nginx access layer and other logs.',
  '云原生应用的关键基建，是开发者中心基于 k8s 能力实现的 operator，承担着云原生应用相关资源的管理，调度等职责。': 'The key infrastructure of cloud-native applications is the operator implemented by the developer center based on k8s capabilities, which is responsible for the management and scheduling of cloud-native application-related resources.',
  '蓝鲸容器管理平台（BCS）提供的增强型 Pod 水平扩缩容组件，支持按各类指标对应用集成副本数量进行扩缩容。': 'The enhanced Pod horizontal scaling component provided by the Blueking Container Service (BCS) supports scaling the replicas of application process according to various metrics.',
  添加集群: 'Add Cluster',
  编辑集群: 'Edit Cluster',
  基础信息: 'Basic Info',
  组件安装: 'Component Installation',
  '为方便接入和管理，请先将集群导入至 BCS': 'For easier integration and management, please import the cluster into BCS first.',
  '如 Master 节点 /root/.kube/config 文件中 admin 用户 user.token 的值': 'As in the Master node /root/.kube/config file, the value of the admin user’s user.token.',
  '用于指引用户配置独立域名的解析，如果集群使用云厂商的 clb 做流量控制，这里需要填写对应的 vip': 'Used to guide users in configuring independent domain name resolution. If the cluster uses the cloud provider’s CLB for traffic control, the corresponding VIP should be filled in here.',
  '用于采集应用日志，该配置将在后续安装 bkapp-log-collection 时会生效': 'This configuration is used for collecting application logs and will take effect upon the subsequent installation of bkapp-log-collection.',
  哪些租户在集群分配的时候可以看到这个集群: 'Which tenants can see this cluster when it is allocated.',
  'BCS 集群': 'BCS Cluster',
  '集群 Server': 'Cluster Server',
  '集群 Token': 'Cluster Token',
  'K8S 集群（不推荐，无法使用访问控制台等功能）': 'K8S Cluster (Not recommended, unable to use features such as the access console)',
  子路径: 'Sub-path',
  子域名: 'Subdomain',
  新增域名: 'Add Domain',
  保存并下一步: 'Save Next',
  '集群上所有应用共用一个域名，应用的访问地址形如：apps.example.com/appid': 'All applications in the cluster share a single domain, with access addresses like: apps.example.com/appid',
  '需要给应用申请一个泛域名（如：*.apps.example.com），应用的访问地址形式如：appid.apps.example.com': 'You need to apply for a wildcard domain for the application (e.g., *.apps.example.com), with access addresses like: appid.apps.example.com',
  '为方便管理，后续组件都建议安装在这个命名空间下': 'For easier management, it is recommended that subsequent components be installed under this namespace.',
  '如使用自定义的镜像仓库，请确认相关镜像已经推送到该仓库': 'If using a custom image repository, please ensure that the relevant images have been pushed to that repository.',
  '应用域名需要配置解析到集群的出口 IP': 'The application domain needs to be configured to resolve to the cluster’s outbound IP.',
  '若启用 HTTPS，请在“共享证书”中托管证书，或者在外部网关中配置证书。': 'If enabling HTTPS, please host the certificate in "Shared Certificate" or configure the certificate in the external gateway.',
  更新组件配置成功: 'Component configuration updated successfully',
  必要组件: 'Necessary Components',
  组件说明: 'Component Description',
  '必须安装这些组件后，集群才能部署蓝鲸应用': 'These components must be installed for the cluster to deploy BlueKing applications',
  '已经根据前面步骤填写的配置生成 Values。': 'Values have been generated based on the configuration filled in the previous steps.',
  '使用默认 Values 即可，无需额外配置。': 'The default Values can be used without additional configuration.',
  键: 'Key',
  值: 'Value',
  安装: 'Install',
  重新安装: 'Reinstall',
  可选组件: 'Optional Component',
  运算符: 'Operator',
  编辑组件配置: 'Edit Component Config',
  '非 BCS 集群需要手动安装集群组件': 'Non-BCS clusters require manual installation of cluster components',
  '直接使用节点主机网络，nginx 将会将流量转发到节点的 80 & 443 端口。': 'Directly use the node host network, nginx will forward traffic to ports 80 & 443 of the node.',
  '使用 CLB 作为接入层，监听器将流量转发到集群节点的指定的 NodePort。': 'Using CLB as the access layer, the listener forwards traffic to the specified NodePort of the cluster node.',
  '已经根据集群的版本和平台相关设置给集群配置了相关特性。': 'The cluster has been configured with relevant features based on its version and platform-specific settings.',
  '可通过为节点设置污点，并在开发者中心配置容忍度，以将应用部署到指定的集群节点上。': 'By setting taints on nodes and configuring tolerations in the Developer Center, applications can be deployed to specific cluster nodes.',
  'docker 默认 /var/lib/docker/containers; containerd 默认 /var/lib/containerd.': 'By default, Docker uses /var/lib/docker/containers; containerd uses /var/lib/containerd.',
  最新版本: 'Latest Version',
  已下发安装任务: 'Installation Task Issued',
  组件版本更新确认: 'Component Version Update Confirmation',
  '不调度（NoSchedule）': 'No Schedule',
  '倾向不调度（PreferNoSchedule）': 'Prefer No Schedule',
  '不执行（NoExecute）': 'No Execute',
  'BCS 网关': 'BCS Gateway',
  '集群 API 地址类型': 'Cluster API Address Type',
  '通过 BCS 提供的网关操作集群，格式如：https://bcs-api.bk.example.com/clusters/BCS-K8S-00000/': 'Operate the cluster via the gateway provided by BCS, in the format: https://bcs-api.bk.example.com/clusters/BCS-K8S-00000/',
  '可通过 IP + Port 或 Service 名称访问，如：https://127.0.0.1:8443，https://kubernetes.default.svc.cluster.local 等': 'Accessible via IP + Port or Service name, e.g., https://127.0.0.1:8443, https://kubernetes.default.svc.cluster.local, etc.',
  集群添加成功: 'Cluster Add Successfully',
  继续配置: 'Continue Config',
  支持在集群列表页面继续配置: 'Support continuing configuration on the cluster list page',
  '离开（稍后配置）': 'Leave (Config Later)',
  '后续的配置：组件配置、组件安装、集群特性': 'Subsequent configurations: Component Configuration, Component Installation, Cluster Features',
  '可选方案({n})': 'Optional Plan ({n})',
  '已选方案({n})': 'Selected Plan ({n})',
  服务配置: 'Service Configuration',
  服务方案: 'Service Plan',
  监控检测: 'Monitor',
  配置服务: 'Configure Service',
  本地增强服务: 'Local',
  远程增强服务: 'Remote',
  资源池: 'Resource Pool',
  可见: 'Visible',
  不可见: 'Invisible',
  '未配置，将影响使用': 'Not Configured, Will Affect Usage',
  '如果配置多个方案：开发者启用增强服务时需要根据 “方案名称” 选择具体的增强服务方案；如开发者未选择任何值，则默认使用已选列表中的第一个方案。': 'If multiple plans are configured: when enabling enhancement services, developers need to choose a specific enhancement service plan based on the "Plan Name"; if no value is selected by the developer, the first plan in the selected list will be used by default.',
  添加方案: 'Add Plan',
  方案名称: 'Plan Name',
  所属服务: 'Associated Service',
  是否可见: 'Visibility',
  方案简介: 'Plan Overview',
  方案配置: 'Plan Configuration',
  方案详情: 'Plan Details',
  确认删除方案: 'Confirm Plan Deletion',
  新建方案: 'Create New Plan',
  实例配置: 'Instance Configuration',
  已分配: 'Allocated',
  可回收复用: 'Recyclable and Reusable',
  确认删除服务配置: 'Confirm Service Configuration Deletion',
  '实例配置将以环境变量方式注入至应用运行时环境（每个配置项将添加 {n} 前缀，且会转换成全大写字母）': 'Instance configurations will be injected into the application runtime environment as environment variables (each configuration item will be prefixed with {n} and converted to uppercase letters)',
  编辑方案: 'Edit Plan',
  新增服务: 'Add Service',
  服务名称: 'Service Name',
  服务介绍: 'Service Introduction',
  供应商: 'Provider',
  '服务 ID': 'Service ID',
  确认删除服务: 'Confirm Service Deletion',
  请选择方案: 'Please Select Plan',
  暂无已选方案: 'No Selected Plan Available',
  搜索方案名称: 'Search Plan Name',
  添加实例: 'Add Instance',
  编辑实例: 'Edit Instance',
  当前租户暂无可用方案: 'No Available Plans for the Current Tenant',
  '1. 在 [服务方案] 中添加新方案': '1. Add a new plan in [Service Plans]',
  '由 3-32 位字母、数字、连接符(-)、下划线(_) 字符组成，以字母开头，字母或数字结尾': 'Consists of 3-32 letters, numbers, hyphens (-), and underscores (_), starts with a letter, and ends with a letter or number',
  平台管理员: 'Platform Administrator',
  添加方式: 'Add Method',
  添加当前租户下的用户: 'Add User Under Current Tenant',
  添加任意用户: 'Add Any User',
  用户特性: 'User Feature',
  '请输入用户 ID，多个用户 ID 以英文分号分隔': 'Please enter user ID, separate multiple IDs with semicolons',
  添加授权应用: 'Add Authorized App',
  修改权限: 'Modify Permissions',
  添加平台管理员: 'Add Platform Administrator',
  添加用户特性: 'Add User Feature',
  确认删除平台管理员: 'Confirm Deletion of Platform Administrator',
  '删除后将无法再使用平台管理的相关功能。请输入用户 ID': 'After deletion, platform management features will not be available. Please enter a user ID',
  确认删除已授权应用: 'Confirm Deletion of Authorized App',
  '删除后将不能再调用平台提供的系统 API': 'System APIs provided by the platform will no longer be callable after deletion',
  '该操作不可撤销，请输入应用 ID': 'This action is irreversible. Please enter the application ID',
  特性名称: 'Feature Name',
  默认值: 'Default Value',
  删除用户特性: 'Delete User Feature',
  平台自动生成用于内部权限校验的账号: 'Account automatically generated by the platform for internal permission verification',
  编辑权限: 'Edit Permissions',
  特性已开启: 'Feature Enabled',
  特性已关闭: 'Feature Disabled',
  开启: 'Enable',
  关闭: 'Disable',
  已授权应用: 'Authorized App',
  管理员名称: 'Administrator Name',
  按用户搜索: 'Search by User',
  确认删除用户: 'Confirm deletion of user',
  的特性: 'feature',
  删除用户的特性: 'Delete User Feature',
  将恢复默认值: 'Will Restore Default Value',
  '仅已授权应用才能访问平台注册在 API 网关上的应用态 API。若需访问非 “基础可读” 级别的 API，除了在 API 网关申请权限外，还需在此处手动为应用添加相应权限。': 'Only authorized applications can access application APIs registered on the API gateway. To access APIs beyond the "Basic Readable" level, permissions must be applied for on the API gateway and added manually here.',
  '特性的默认状态为：{f}': 'The default state of the feature is: {f}',
  '管理员能查看并执行 “平台管理” 导航下所有操作。': 'Administrators can view and perform all operations under the "Platform Management" navigation.',
  '平台通过用户特性功能，将部分功能以灰度方式开放给用户。添加用户特性后，用户可以在产品页面上访问相关功能。': 'The platform partially opens features to users in a phased manner through the user feature function. After adding user feature, users can access related features on the product page.',
  '请输入应用 ID，按 Enter 搜索': 'Please enter the application ID and press Enter to search',
  删除后: 'After deletion',
  '将无法再使用平台管理相关功能。': 'will no longer be able to use platform management-related features.',
  镜像仓库域名: 'Image Repository Domain',
  跳过证书验证: 'Skip Certificate Verification',
  使用独立镜像仓库: 'Use Independent Image Repository',
  应用构建时生成的镜像会推送到这里: 'Images generated during application build will be pushed here',
  '不启用时，使用平台公共的镜像仓库': 'When not enabled, the platforms public image repository is used',
  '如果镜像仓库的域名未配 HTTPS 证书时，需要开启该选项': 'Enable this option if the image repository domain is not configured with an HTTPS certificate',
  '请输入镜像仓库的域名，如：mirrors.tencent.com': 'Please enter the domain of the image repository, e.g., mirrors.tencent.com',
  '请输入命名空间，如：bkpaas/docker': 'Please enter the namespace, e.g., bkpaas/docker',
  使用平台公共的镜像仓库: 'Use Platform Public Image Repository',
  运行中: 'Running',
  已下线: 'Offline',
  运营管理: 'Operations Management',
  特性管理: 'Feature Management',
  全部租户: 'All Tenants',
  所属用户: 'Associated User',
  模块信息: 'Module Information',
  部署集群: 'Deployment Cluster',
  恢复默认值: 'Restore Default Value',
  修改部署集群: 'Modify Deployment Cluster',
  请输入特性名称: 'Please enter feature name',
  '请输入应用 ID、应用名称': 'Please enter app ID or app name',
  '修改后需要重新部署才能生效，并且需要手动清理原有集群中的进程。': 'Changes require redeployment to take effect and manual cleanup of processes in the original cluster.',
  '应用对哪个租户的用户可用，当应用租户模式为全租户时，租户 ID 值为空': 'Which tenants users the application is available to; when the application tenant mode is set to all tenants, the tenant ID value is empty',
  '所有进程的内存/CPU limit 的总和': 'The total memory/CPU limit of all processes',
  '共享 {m} 模块': 'Share {m} module',
  '确认给 <i>{m}</i> 模块的预发布环境分配 <i>{n}</i> 增强服务实例': 'Confirm assigning <i>{n}</i> enhanced service instances to the pre-release environment of the <i>{m}</i> module',
  '确认删除 {m} 模块的{e} {n} 增强服务实例': 'Confirm deletion of {e} {n} enhanced service instances from {m} module',
  '共享自 {m} 模块的 {s} 增强服务': 'Enhanced service {s} shared from the {m} module',
  '此服务共享自 {m} 模块的相应服务实例，请在 {m} 模块中直接进行操作。': 'This service is shared from the corresponding service instance of the {m} module. Please operate directly within the {m} module.',
  '应用有 {n} 个已解绑但未回收的增强服务实例。': 'The application has {n} unbound yet unreclaimed enhanced service instances.',
  请输入模块名称: 'Please enter module name',
  是否分配实例: 'Whether to allocate instance',
  分配实例: 'Allocate Instance',
  查看凭证: 'View Credentials',
  删除实例: 'Delete Instance',
  确认分配实例: 'Confirm Instance Allocation',
  确认删除实例: 'Confirm Instance Deletion',
  共享: 'Share',
  实例已分配: 'Instance Allocated',
  未分配实例无法删除: 'Unallocated instances cannot be deleted',
  操作审计: 'Operation Audit',
  平台操作记录: 'Platform Operation Records',
  应用操作记录: 'App Operation Records',
  请输入操作人: 'Please enter the operator',
  访问插件: 'Access Plugin',
  快捷操作: 'Quick Actions',
  应用权限: 'App Permissions',
  插件权限: 'Plugin Permissions',
  成为管理员: 'Become Administrator',
  退出插件管理员: 'Exit Plugin Administrator',
  你不具备管理员权限: 'You do not have administrator permissions',
  你已经是该插件的管理员: 'You are already the administrator of this plugin',
  你已经是该应用的管理员: 'You are already the administrator of this app',
  您已成功成为应用管理员: 'You have successfully become the app administrator',
  您已退出应用管理员角色: 'You have exited the app administrator role',
  您已成功成为插件管理员: 'You have successfully become the plugin administrator',
  您已退出插件管理员角色: 'You have exited the plugin administrator role',
  '当前应用所属租户为 {b}，您的租户为 {a}。暂不支持跨租户添加应用成员。': 'The current app belongs to tenant {b}, while your tenant is {a}. Adding app members across tenants is not supported.',
  '应用所属租户为：{a}，您不是该租户下的用户，无法添加为管理员': 'The app belongs to tenant {a}, and you are not a user under this tenant, so you cannot be added as an administrator.',
  '插件所属租户为：{a}，您不是该租户下的用户，无法添加为管理员': 'The plugin belongs to tenant {a}, and you are not a user under this tenant, so you cannot be added as an administrator.',
  添加内置环境变量: 'Add Built-in Env Variable',
  编辑内置环境变量: 'Edit Built-in Env Variable',
  '此处定义的环境变量会覆盖系统内置的环境变量。环境变量优先级（由高到低）：平台管理自定义的内置环境变量 > 系统内置环境变量 > 单个应用中自定义环境变量': 'The env variables defined here will override system built-in env variables. Env variable priority (from high to low): Platform-managed custom built-in env variables > System built-in env variables > Custom env variables in individual applications',
  '填充 {a} 默认设置': 'Populate {a} default settings',
  确认删除内置环境变量: 'Confirm deletion of built-in env variable',
  '删除后，所有应用在重新部署时将不再下发该环境变量。': 'After deletion, all applications will no longer receive this env variable upon redeployment.',
  '请输入要删除的内置环境变量 key': 'Please enter the key of the built-in env variable to delete',
  '代码库配置变更后，需重启 apiserver 所有进程才会生效。': 'After repository config changes, all apiserver processes need to be restarted to take effect.',
  '标签（中文）': 'Label (CN)',
  '标签（英文）': 'Label (EN)',
  'OAuth 授权信息': 'OAuth Authorization',
  代码库配置: 'Repository Config',
  是否默认开放: 'Is Default Open',
  配置类: 'Configuration Category',
  回调地址: 'Callback URL',
  展示信息: 'Display Info',
  'OAuth 授权链接': 'OAuth Authorization Link',
  '获取 Token 链接': 'Token Retrieval Link',
  'OAuth 信息（中）': 'OAuth Info (CN)',
  'OAuth 信息（英）': 'OAuth Info (EN)',
  '绑定信息（中）': 'Binding Info (CN)',
  '绑定信息（英）': 'Binding Info (EN)',
  '关闭后，用户将无法创建与该源码类型仓库关联的新应用，可以通过“用户特性”为特定用户单独开启此功能。': 'Once closed, users will not be able to create new applications associated with this type of source code repository. This feature can be individually enabled for specific users through "User Features."',
  确认删除代码库配置: 'Confirm deletion of repository configuration',
  请输入要删除的代码库的服务名称: 'Please enter the service name of the repository to be deleted',
  '删除后，应用将无法使用此类型的代码库，已使用该代码库的应用也无法部署。': 'After deletion, applications will not be able to use this type of repository, and applications that have used this repository will not be deployed.',
  节点信息: 'Node Info',
  查看同步记录: 'View Sync Records',
  节点同步记录: 'Node Sync Records',
  绑定应用: 'Bind App',
  同步时间: 'Sync Time',
  节点数: 'Number of Nodes',
  模版配置: 'Template Config',
  模版名称: 'Template Name',
  展示名称: 'Display Name',
  模版类型: 'Template Type',
  是否展示: 'Is Displayed',
  渲染方式: 'Rendering Method',
  模版信息: 'Template Info',
  添加模版配置: 'Add Template Config',
  修改模版配置: 'Modify Template Config',
  代码仓库地址: 'Code Repository URL',
  代码目录: 'Code Directory',
  代码仓库类型: 'Code Repository Type',
  二进制包存储路径: 'Binary Package Storage Path',
  预设增强服务配置: 'Preset Enhanced Service Config',
  必须的构建工具: 'Required Build Tools',
  '展示名称（中）': 'Display Name (CN)',
  '展示名称（英）': 'Display Name (EN)',
  '描述（中）': 'Description (CN)',
  '描述（英）': 'Description (EN)',
  '只能由字符 [a-zA-Z0-9-_] 组成': 'Can only consist of characters [a-zA-Z0-9-_]',
  '用户在创建应用/模块时仅能使用未隐藏的模板，但现有应用仍可下载已隐藏的模板。': 'When creating applications/modules, users can only use templates that are not hidden, but existing applications can still download hidden templates.',
  确认删除模版配置: 'Confirm deletion of template config',
  '删除后，创建应用时将不能再使用该模版。': 'After deletion, the template will no longer be available for use when creating applications.',
  请输入要删除的模版配置的模版名称: 'Please enter the name of the template config to delete',
  请输入对象存储中的包路径: 'Please enter the package path in object storage',
  请输入代码仓库地址: 'Please enter the code repository URL',
  '请输入代码所在目录，不填则为根目录': 'Please enter the directory where the code is located, leave blank for the root directory',
  克隆: 'Clone',
  克隆成功: 'Clone Successful',
};
