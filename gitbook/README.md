# Introduction

webpack 静态资源管理工具

webpack是基于nodejs实现的

# 概念
### entry
入口文件

### output
输出

### loader
过滤器

### plugins
插件

### mode

模式

选项	描述
development
会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
production
会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.

https://www.webpackjs.com/concepts/mode/

### example
