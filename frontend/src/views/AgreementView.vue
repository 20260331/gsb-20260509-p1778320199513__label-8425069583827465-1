<template>
  <div class="container mx-auto px-4 py-12 min-h-screen">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar Navigation -->
      <div class="w-full md:w-64 flex-shrink-0">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
          <h2 class="text-xl font-bold mb-6 text-gray-900">协议中心</h2>
          <nav class="space-y-2">
            <button 
              v-for="item in menuItems" 
              :key="item.key"
              @click="currentTab = item.key"
              :class="['w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium', 
                currentTab === item.key 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']"
            >
              {{ item.label }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Content Area -->
      <div class="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div class="prose prose-blue max-w-none">
          <h1 class="text-3xl font-bold mb-8 text-gray-900 border-b border-gray-100 pb-6">{{ currentTitle }}</h1>
          
          <!-- User Agreement -->
          <div v-if="currentTab === 'user'" class="space-y-6 text-gray-600 leading-relaxed">
            <p>欢迎您使用 BeautyLevel 商城服务！本协议是您与 BeautyLevel 商城之间关于您使用本商城服务所订立的协议。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">1. 服务条款的确认与接纳</h3>
            <p>BeautyLevel 商城的所有权和运营权归 BeautyLevel 所有。用户在注册之前，应当仔细阅读本协议。用户勾选“我已阅读并同意”并点击注册按钮，即表示用户完全接受本协议的全部条款。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">2. 用户账号</h3>
            <p>用户注册成功后，BeautyLevel 将给予每个用户一个用户账号及相应的密码，该用户账号和密码由用户负责保管；用户应当对以其用户账号进行的所有活动和事件负法律责任。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">3. 商品信息</h3>
            <p>本商城上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本商城不作特别通知。由于网站上商品信息的数量极其庞大，虽然本商城会尽最大努力保证您所浏览商品信息的准确性，但由于互联网技术因素等客观原因存在，本商城网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">4. 订单</h3>
            <p>在您下订单时，请您仔细确认所购商品的名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。收货人与用户本人不一致的，收货人的行为和意思表示视为用户的行为和意思表示，用户应对收货人的行为和意思表示的法律后果承担连带责任。</p>
          </div>

          <!-- Privacy Policy -->
          <div v-else-if="currentTab === 'privacy'" class="space-y-6 text-gray-600 leading-relaxed">
            <p>BeautyLevel 非常重视您的隐私。本隐私政策说明了我们如何收集、使用、披露、传输及存储您的信息。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">1. 我们收集的信息</h3>
            <p>我们收集您在注册、购物、联系客服时提供的个人信息，包括但不限于姓名、电话号码、电子邮箱、收货地址等。我们还会收集您在使用我们服务时的设备信息、日志信息等。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">2. 我们如何使用您的信息</h3>
            <p>我们将您的信息用于：处理您的订单、提供客户服务、改进我们的产品和服务、向您发送营销信息（如果您同意接收）、防止欺诈等。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">3. 信息安全</h3>
            <p>我们使用各种安全技术和程序来保护您的个人信息，防止未经授权的访问、使用或披露。尽管我们已经采取了合理的安全措施，但请您理解，在互联网上不存在“完善的安全措施”。</p>
          </div>

          <!-- Sales Terms -->
          <div v-else-if="currentTab === 'sales'" class="space-y-6 text-gray-600 leading-relaxed">
            <p>以下条款适用于您在 BeautyLevel 商城购买商品的行为。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">1. 价格与支付</h3>
            <p>除非另有说明，商品价格均包含增值税。您应当在提交订单后规定的时间内完成支付，否则我们有权取消您的订单。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">2. 配送</h3>
            <p>我们将按照您在订单中填写的收货地址将商品配送给您。因如下情况造成订单延迟或无法配送等，BeautyLevel 不承担延迟配送的责任：</p>
            <ul class="list-disc pl-5 space-y-2">
              <li>用户提供的信息错误、地址不详细等原因导致的；</li>
              <li>货物送达后无人签收，导致无法配送或延迟配送的；</li>
              <li>情势变更因素导致的；</li>
              <li>不可抗力因素导致的，例如：自然灾害、交通戒严、突发战争等。</li>
            </ul>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">3. 退换货</h3>
            <p>BeautyLevel 支持7天无理由退货（特殊商品除外），前提是商品完好未受损，且不影响二次销售。退货运费由您承担（质量问题除外）。</p>
          </div>

          <!-- Privacy Terms -->
          <div v-else-if="currentTab === 'privacy-terms'" class="space-y-6 text-gray-600 leading-relaxed">
            <p>本隐私条款是对隐私政策的补充，主要涉及特定场景下的数据处理。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">1. Cookie 的使用</h3>
            <p>为确保网站正常运转，我们会在您的计算机或移动设备上存储名为 Cookie 的小数据文件。Cookie 通常包含标识符、站点名称以及一些号码和字符。借助于 Cookie，网站能够存储您的偏好或购物篮内的商品等数据。</p>
            
            <h3 class="text-xl font-bold text-gray-800 mt-8">2. 第三方SDK</h3>
            <p>我们的应用中可能会嵌入第三方的 SDK（如支付工具、地图工具等），这些第三方可能会收集您的个人信息。我们会尽责监督第三方的安全合规状况。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const menuItems = [
  { key: 'user', label: '用户协议' },
  { key: 'privacy', label: '隐私政策' },
  { key: 'sales', label: '销售条款' },
  { key: 'privacy-terms', label: '隐私条款' }
]

const currentTab = ref('user')

const currentTitle = computed(() => {
  const item = menuItems.find(i => i.key === currentTab.value)
  return item ? item.label : '协议'
})

// Sync tab with route param
watch(() => route.params.type, (newType) => {
  if (newType && menuItems.some(i => i.key === newType)) {
    currentTab.value = newType
  } else {
    currentTab.value = 'user'
  }
}, { immediate: true })

// Update route when tab changes
watch(currentTab, (newTab) => {
  if (route.params.type !== newTab) {
    router.replace(`/agreement/${newTab}`)
  }
})
</script>