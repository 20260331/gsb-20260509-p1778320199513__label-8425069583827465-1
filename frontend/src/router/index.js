import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import OrderConfirmationView from '../views/OrderConfirmationView.vue'
import OrderHistoryView from '../views/OrderHistoryView.vue'
import OrderDetailView from '../views/OrderDetailView.vue'
import AgreementView from '../views/AgreementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductListView
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      component: ProductDetailView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: OrderConfirmationView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderHistoryView
    },
    {
      path: '/orders/:id',
      name: 'order-detail',
      component: OrderDetailView
    },
    {
      path: '/agreement/:type?',
      name: 'agreement',
      component: AgreementView
    }
  ]
})

export default router
