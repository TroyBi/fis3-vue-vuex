# fis3-vue-vuex
基于fis3+vue+vuex的前端解决方案


# fis3
再次安利一波fis3~~

fis3 是百度开发的面向前端的工程构建工具。对于前端工程，在性能优化、资源加载（异步、同步、按需、预加载、依赖管理、合并、内嵌）、模块化开发、自动化工具、开发规范、代码部署等问题上有较好的实现。

参考：http://fis.baidu.com/

#fis3-vue-vuex主要解决的问题
1. .vue文件的编译问题

采用fis3-parser-vue-component插件来处理。

通过less插件处理vue文件中的less；通过babel-5.x处理vue文件中的es6。将.vue文件编译为单独的模板文件、js和css。

配置方式：
```javascript
// vue基础配置
fis.match('/widget/**.vue', {
    isMod: true,
    useHash: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('vue-component')
    ],
});
// vue组件中ES2015处理 
fis.match('/widget/**.vue:js', {
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('babel-5.x'),
        fis.plugin('translate-es3ify', null, 'append')
    ]
});
fis.match('/widget/**.vue:less', {
    rExt: 'css',
    parser: [fis.plugin('less')],
    postprocessor: fis.plugin('autoprefixer')
});
```

参考：https://www.npmjs.com/package/fis3-parser-vue-component

2. vue+vuex的使用

公共数据和公共方法统一在store中维护，通过vuex的mapGetters和mapActions将这些公共数据和公共方法暴露给子组件。实现数据在父子组件之间的流动。

参考：https://vuex.vuejs.org/zh-cn/

使用api.js中统一维护异步接口。并且对post参数做了统一处理。

# 目录

```javascript
.
├── page
│   ├── layout
│   │   └── layout.tpl
│   └── index.ejs
├── static
│   └── lib
│       └── mod.js
├── test
│   └── api
│       └── submitBasicconf.json
├── widget
│   ├── api
│   │   └── api.es6.js
│   ├── 
│   ├── 
│   ├── 
│   └── 
├── .gitignore
├── .eslintrc
├── gulpfile.js
├── package.json
└── webpack.config.js
```
