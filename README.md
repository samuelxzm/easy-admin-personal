# easy-admin-personal



### 一、目录文件说明

#### 1、pages文件夹

页面文件夹

```javascript
1、assets //（静态资源文件夹，会被webpack编译）
	    |
    	|---icons//（图标目录）
	    |	  |---svg //（svg目录）
    	|---logo.png //（logo图片）

2、components //（个人新增文件夹目录）

3、store //（状态管理目录）
	|
 	|---index.js //（实例化vuex）
    
4、views //（模板目录）

5、App.vue //（根实例目录,Vue主组件）

6、main.js //（项目入口文件,初始化实例，加载公共组件)
 
7、router.json //(路由json文件)
        
```

#### 2、public文件夹

静态资源文件夹，不被webpack编译

```javascript
1、favicon.ico //页面标题ico图标

2、index.html //主页面 Vue根实例挂载在该页面，页面主入口
```

#### 3、tests文件夹

测试文件夹

```javascript
1、e2e //(用来测试从头到尾的流程是否和设计时所想的一样。)
2、unit //(单元测试，可以为每个组件编写单元测试)
/*将单元测试文件放在 test/unit/specs 目录下面, 单元测试用例的目录结构建议和测试的文件保持一致（相对于src），每个测试用例文件名以 .spec.js结尾。 执行 npm run unit 时会遍历所有的 spec.js 文件，产出测试报告在 test/unit/coverage 目录。*/

```

​				

#### 4、.eslintrc.js

```javascript
//eslint的配置文件，eslint是用来管理和检测js代码风格的工具
```

#### 5、 .gitignore

```javascript
//git上传忽略文件列表
```

#### 6、.npmignore

```javascript
//npm上传的忽略文件列表
```

#### 7、babel.config.js

```javascript
//babel的配置文件，babel作用为将ES6及更高版本的代码转换为ES5，即向下兼容
```

#### 8、package-lock.json

```javascript
//安装的各依赖的来源及版本号
```

#### 9、package.json

```javascript
//安装的所有依赖的列表文件，包括各依赖的版本号
调试组件使用此配置：
{
  "name": "easy-admin-framework",
  "version": "0.1.0",
  "private": false,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:e2e": "vue-cli-service test:e2e",
    "test:unit": "vue-cli-service test:unit",
    "lib": "vue-cli-service build --target lib --name veasyadmin --dest lib packages/index.js"
      //打包packages下的所有组件，入口文件为packages下index.js
  },
  "dependencies": {
    "axios": "^0.19.0",
    "core-js": "^2.6.5",
    "element-ui": "^2.12.0",
    "file-saver": "^2.0.2",
    "js-cookie": "^2.2.1",
    "path-to-regexp": "^3.1.0",
    "screenfull": "^5.0.0",
    "svg-sprite-loader": "^4.1.6",
    "vue": "^2.6.10",
    "vue-router": "^3.0.3",
    "vuex": "^3.1.1",
    "xlsx": "^0.15.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.12.0",
    "@vue/cli-plugin-e2e-cypress": "^3.12.0",
    "@vue/cli-plugin-eslint": "^3.12.0",
    "@vue/cli-plugin-unit-mocha": "^3.12.0",
    "@vue/cli-service": "^3.12.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "babel-eslint": "^10.0.1",
    "chai": "^4.1.2",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "lint-staged": "^8.1.5",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.0",
    "vue-svg-icon": "^1.2.9",
    "vue-template-compiler": "^2.6.10"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": [
      "vue-cli-service lint",
      "git add"
    ]
  }
}

组件调试后发布到npm时使用
{
  "name": "easy-admin-framework",//发布的包名，不可修改，不然会以修改后的名字重新发布一个包
  "version": "0.1.5",//发布版本号，与上次发布的版本不能重复
  "description": "easy-admin",
  "main": "lib/veasyadmin.umd.min.js",//发布包的主入口文件，在组件打包后lib下
  "keyword": "easy-admin-framework",
  "private": false
 }
```

#### 12、postcss.config.js

```javascript
//postcss的配置文件
/*postcss 是帮我们后处理css ，css已经编译完成了，在stylus-loader编译成css之后，在通过postcss优化css，通过一系列组件去优化。*/
```

#### 13、vue.config.js

```javascript
//vue配置文件
// vue.config.js
'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = '管理平台' // page title

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = {
    // 将 pages 目录添加为新的页面
    pages: {
        index: {
            // 调试框架run serve时的入口文件
            entry: 'pages/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        //svg雪碧图配置
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')
        //svgRule.uses.clear()
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('pages/assets/icons/svg')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    configureWebpack: {
        // 绝对路径配置
        name: name,
        resolve: {
            alias: {
                '@': resolve('pages')
            }
        }
    },
    devServer: {
        //热加载配置
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: false,
        inline: false,
    },
}
```

