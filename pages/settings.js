// 配置文件
module.exports = {
  /**
 * @type {boolean} true | false
 * @description 是否通过接口调用路由
 */
  useAjaxRouter: true,
  title: 'Easy-Admin',
  /**
   * @type {boolean} true | false
   * @description 是否使用头部菜单
   */
  headNav: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用面包屑导航
   */
  breadbrumb: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用右侧菜单收起按钮
   */
  hamberger: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用全屏按钮
   */
  fullScreen: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用单独打开按钮
   */
  openAlone: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用消息按钮
   */
  message: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用帮助按钮
   */
  help: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用头像菜单
   */
  avatar: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用页签功能
   */
  tagsView: true,
  /**
   * @type {boolean} true | false
   * @description 是否使用页面设置功能
   */
  showSettings: true,
  /**
   * @type {boolean} true | false
   * @description 头部固定默认值
   */
  defaultfixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description logo是否展示默认值
   */
  defaultsidebarLogo: true,
  /**
 * @type {boolean} true | false
 * @description 左侧菜单展开收起默认值
 */
  defaultsidebarOpened: true,
  /**
 * @type {boolean} true | false
 * @description 页面显示默认值
 */
  defaulttagsView: true,
  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
