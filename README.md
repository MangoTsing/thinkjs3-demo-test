
Application created by [ThinkJS](http://www.thinkjs.org)

## 安装依赖

```
npm install
```

## 启动服务器

```
npm start
```

## 被pm2守护

Use pm2 to deploy app on production enviroment.

```
pm2 startOrReload pm2.json
```

默认监听8360端口 src->config->config.js
数据库config在 src->  config->adapter.js---下面的module模块里
