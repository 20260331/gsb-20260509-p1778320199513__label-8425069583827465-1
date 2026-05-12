# 增加订单历史页面

> **Workspace:** d:\code\trae\gsb\20260509\B-729-代码生成-1\TestM_2

---

## User
现在提交订单后看不到之前的购买记录,增加一个订单历史页面,显示所有订单列表和订单详情。订单信息包括商品清单、收货地址、支付方式、订单状态和下单时间。使用现有的用户状态判断登录,新增的状态管理模块和视图保持现有代码风格,变量采用小驼峰命名。

## Assistant
现在我将修改 `OrderConfirmationView.vue`，以便在提交订单时使用订单 store 来保存订单数据。

现在也更新移动菜单，使其包含订单链接：

所有文件已创建和修改完毕，没有 lint 或类型错误。以下是本次修改的完整说明：

---

### 新增文件

**1. `frontend/src/store/order.js`** — 订单状态管理模块
- 使用 Pinia Composition API 风格（与 `cart.js`、`user.js` 一致）
- `orders` 响应式数组存储所有订单
- `createOrder()` — 创建订单，包含商品清单、收货地址、支付方式、总金额、状态和下单时间
- `getOrderById()` — 根据 orderId 查找订单
- `cancelOrder()` — 取消待发货订单
- `getStatusLabel()` / `getPaymentMethodLabel()` — 状态和支付方式的中文映射
- 变量采用小驼峰命名：`orderId`、`paymentMethod`、`finalPrice` 等

**2. `frontend/src/views/OrderHistoryView.vue`** — 订单历史列表页
- 登录校验：未登录自动跳转登录页（与现有 `OrderConfirmationView` 逻辑一致）
- 展示所有订单卡片，每个卡片显示：订单号、下单时间、订单状态标签（颜色区分）、商品预览（最多3件）、实付金额
- 点击"查看详情"跳转到订单详情页
- 无订单时显示空状态提示和"去逛逛"按钮

**3. `frontend/src/views/OrderDetailView.vue`** — 订单详情页
- 登录校验同上
- 完整显示订单信息：
  - 订单号、下单时间、订单状态
  - 收货地址（姓名、电话、完整地址）
  - 商品清单（图片、名称、规格、数量、小计）
  - 支付方式（微信支付/支付宝）
  - 金额明细（商品小计、运费、实付金额）
- 待发货订单支持"取消订单"操作
- 订单不存在时显示空状态提示

### 修改文件

**4. `frontend/src/views/OrderConfirmationView.vue`**
- 引入 `useOrderStore`
- 在 `submitOrder()` 中调用 `orderStore.createOrder()` 保存订单数据

**5. `frontend/src/router/index.js`**
- 新增 `/orders` 路由 → `OrderHistoryView`
- 新增 `/orders/:id` 路由 → `OrderDetailView`

**6. `frontend/src/components/NavBar.vue`**
- 桌面端导航栏：登录后显示"我的订单"链接
- 移动端菜单：登录后显示"我的订单"链接

## User
下单时只把这次勾选的商品记进订单，没勾选的商品要继续留在购物车里

## Assistant
我来分析当前的代码流程，找出需要修改的地方。

核心问题：`OrderConfirmationView` 展示和提交的是 `cartStore.items`（全部商品），结算完成后调用 `cartStore.clearCart()`（清空全部）。需要改为只处理选中的商品。

现在梳理完整的数据流，需要修改3个地方：

1. **CartView** — 结算时只跳转选中的商品，未选中的留在购物车
2. **cart store** — 新增 `removeSelectedItems()` 方法，只删除已选中的商品
3. **OrderConfirmationView** — 只展示选中的商品，提交后只删除选中的商品

现在我将更新 `OrderConfirmationView.vue`，使其只处理已选商品，并且在订单完成后只从购物车中移除已选商品。

主要改动点：
1. 商品清单展示：用 `selectedItems` 计算属性过滤只展示选中商品
2. 订单摘要统计：基于 `selectedItems` 计算件数和价格
3. `submitOrder`：只把选中商品写入订单
4. `finishOrder`：用 `removeSelectedItems()` 替代 `clearCart()`

现在更新模板以使用 `selectedItems` 和新的计算属性：

现在更新总结侧边栏，使其使用基于选中商品的数值：

现在更新 `submitOrder`，使其只传递选中的商品，并更新 `finishOrder`，使其只移除选中的商品：

修改完成，没有任何诊断错误。以下是本次修改的完整说明：

---

### 修改思路

之前的问题链路：购物车页全部商品 → 确认订单页展示全部商品 → 提交后 `clearCart()` 清空全部 → 未勾选的商品也丢失了。

修复后的链路：购物车页勾选的商品（`item.selected === true`）→ 确认订单页只展示勾选商品 → 提交后 `removeSelectedItems()` 只删除勾选商品 → 未勾选商品保留在购物车。

### 具体改动

**1. `frontend/src/store/cart.js`** — 新增 `removeSelectedItems()` 方法
- 过滤掉 `item.selected === true` 的商品，保留未选中的
- 同时在 `return` 中导出该方法

**2. `frontend/src/views/OrderConfirmationView.vue`** — 三处核心改动

- **新增计算属性**：`selectedItems`、`selectedTotalItems`、`selectedTotalPrice`、`selectedFinalPrice`，基于 `cartStore.items.filter(item => item.selected)` 只处理选中商品
- **模板展示**：商品清单改为遍历 `selectedItems`，订单摘要的件数和金额改用 `selectedTotalItems` / `selectedTotalPrice` / `selectedFinalPrice`
- **提交订单**：`submitOrder()` 中 `createOrder` 的 items 参数改为 `selectedItems.value`，价格改用 `selectedTotalPrice.value` / `selectedFinalPrice.value`
- **完成订单**：`finishOrder()` 中 `clearCart()` 改为 `removeSelectedItems()`，只删除已选中并已下单的商品

