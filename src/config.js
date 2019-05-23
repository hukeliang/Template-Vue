/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * baseTimeout: 超时时间
 */
export { baseUrl, baseTimeout, routerMode, imgBaseUrl }

let baseUrl = ''
let routerMode = 'history' //  history  hash
let imgBaseUrl = ''
let baseTimeout = 10000


switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://localhost:52880/'
    imgBaseUrl = 'http://localhost:52880/img/'
    break
  case 'production':
    baseUrl = '//'
    imgBaseUrl = '//'
    break
}
