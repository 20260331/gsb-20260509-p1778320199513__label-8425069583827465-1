# Vue.js 购物商城项目

这是一个使用 Vue.js 3 + Vite + Tailwind CSS 开发的现代化购物商城前端项目。

## 项目概述

本项目旨在展示现代前端开发技术，提供一个功能完整、界面美观的购物网站。包含商品浏览、详情展示、购物车管理、用户登录注册及订单结算等核心功能。

## 技术栈

- **前端框架**: Vue.js 3 (Composition API)
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由管理**: Vue Router 4
- **样式框架**: Tailwind CSS
- **容器化**: Docker

## 功能特性

1.  **首页**: 展示热门商品和活动Banner。
2.  **商品列表**: 支持按价格排序、按分类筛选商品。
3.  **商品详情**: 展示商品详细信息，支持数量选择和加入购物车。
4.  **购物车**: 实时计算总价，支持数量调整和商品删除。
5.  **用户中心**: 提供登录和注册页面（模拟）。
6.  **订单结算**: 填写收货地址，选择支付方式，模拟支付成功流程。
7.  **响应式设计**: 完美适配 PC 和移动端设备。

## 目录结构

```
project-729/
├── frontend/                # 前端项目源码
│   ├── src/
│   │   ├── components/      # 公共组件 (NavBar, Footer)
│   │   ├── router/          # 路由配置
│   │   ├── store/           # Pinia 状态管理 (Cart, User)
│   │   ├── views/           # 页面视图 (Home, Product, Cart...)
│   │   ├── App.vue          # 根组件
│   │   └── main.js          # 入口文件
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── Dockerfile               # Docker 构建文件
├── docker-compose.yml       # Docker Compose 配置文件
└── README.md                # 项目文档
```

## 快速开始

### 前置要求

- Docker
- Docker Compose

### 启动项目

在项目根目录下运行以下命令：

```bash
docker-compose up -d --build
```

### 访问项目

启动成功后，请在浏览器中访问：

http://localhost:3000

## 开发说明

如果需要在本地开发环境运行：

1. 进入 frontend 目录: `cd frontend`
2. 安装依赖: `npm install`
3. 启动开发服务器: `npm run dev`

## 许可证

MIT License
