<template>
  <footer class="bg-gray-900 text-white mt-auto relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div class="space-y-6">
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">BeautyLevel</h3>
          <p class="text-gray-400 leading-relaxed">电子商城致力于提供优质的购物体验，精选全球好物，为您打造品质生活。</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6 text-gray-200">快速链接</h3>
          <ul class="space-y-4 text-gray-400">
            <li><router-link to="/" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>首页</router-link></li>
            <li><router-link to="/products" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>全部商品</router-link></li>
            <li><router-link to="/cart" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>购物车</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6 text-gray-200">服务条款</h3>
          <ul class="space-y-4 text-gray-400">
            <li><router-link to="/agreement/user" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>用户协议</router-link></li>
            <li><router-link to="/agreement/privacy" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>隐私政策</router-link></li>
            <li><router-link to="/agreement/sales" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>销售条款</router-link></li>
            <li><router-link to="/agreement/privacy-terms" class="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"></span>隐私条款</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6 text-gray-200">联系我们</h3>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@beautylevel.com
            </li>
            <li class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              400-123-4567
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6 text-gray-200">关注我们</h3>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110">
              <span class="sr-only">微信</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,10.5A1.5,1.5 0 0,1 10,12A1.5,1.5 0 0,1 8.5,13.5M15.5,13.5A1.5,1.5 0 0,1 14,12A1.5,1.5 0 0,1 15.5,10.5A1.5,1.5 0 0,1 17,12A1.5,1.5 0 0,1 15.5,13.5M12,2C6.48,2 2,5.58 2,10C2,12.5 3.39,14.74 5.57,16.19C5.5,16.8 5.26,17.96 5.07,18.66C4.85,19.45 5.63,20.03 6.34,19.64C7.84,18.82 9.5,17.9 10.39,17.47C10.92,17.5 11.45,17.53 12,17.53C17.52,17.53 22,13.95 22,9.53C22,5.11 17.52,2 12,2Z" />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-110">
              <span class="sr-only">微博</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.08,10.86C10.08,10.86 12.04,11.3 12.6,12.76C12.6,12.76 13.04,14.07 11.43,15.17C11.43,15.17 9.81,16.27 7.7,15.17C7.7,15.17 5.58,14.07 6.02,12.61C6.02,12.61 6.46,11.15 8.42,10.71C8.42,10.71 8.97,10.59 10.08,10.86M15.2,8.81C14.77,8.65 14.33,8.5 13.88,8.5C13.23,8.5 12.59,8.65 12,8.92C11.83,9 11.66,9.08 11.5,9.15C11.5,9.15 10.08,13.38 12.04,15.56C12.04,15.56 13.6,17.31 16.94,16.43C16.94,16.43 20.28,15.56 20.28,12.35C20.28,12.35 20.28,9.14 15.2,8.81M14.9,6.18C15.65,6.18 16.39,6.34 17.07,6.65C17.75,6.96 18.35,7.4 18.83,7.96C18.83,7.96 18.97,8.12 18.91,8.18C18.85,8.24 18.69,8.3 18.69,8.3C18.42,8.56 18,8.68 17.58,8.46C16.75,8.03 15.85,7.81 14.9,7.81C13.95,7.81 13.05,8.03 12.22,8.46C11.8,8.68 11.38,8.56 11.11,8.3C11.11,8.3 10.95,8.24 10.89,8.18C10.83,8.12 10.97,7.96 10.97,7.96C11.45,7.4 12.05,6.96 12.73,6.65C13.41,6.34 14.15,6.18 14.9,6.18M14.9,3.5C16.5,3.5 18,3.95 19.32,4.78C20.63,5.6 21.65,6.77 22.28,8.18C22.28,8.18 22.37,8.4 22.18,8.46C21.99,8.53 21.72,8.39 21.72,8.39C21.19,7.18 20.31,6.16 19.16,5.43C18.01,4.71 16.69,4.31 15.28,4.31C13.88,4.31 12.56,4.71 11.41,5.43C10.26,6.16 9.38,7.18 8.85,8.39C8.85,8.39 8.58,8.53 8.39,8.46C8.2,8.4 8.29,8.18 8.29,8.18C8.92,6.77 9.94,5.6 11.25,4.78C12.56,3.95 14.06,3.5 15.66,3.5H14.9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-16 pt-8 flex flex-col items-center justify-center text-gray-500">
        <p class="text-sm tracking-wide">&copy; 2026 BeautyLevel 电子商城 版权所有</p>
      </div>
    </div>
  </footer>
</template>
