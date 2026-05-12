
export const products = [
  // 手机通讯 (6)
  {
    id: 1,
    name: 'HUAWEI Mate 60 Pro',
    price: 6999,
    originalPrice: 7999,
    category: 'phone',
    brand: 'Huawei',
    description: '超可靠玄武架构 | 全焦段超清影像 | 双卫星通信',
    detail: '华为Mate 60 Pro采用玄武架构，第二代昆仑玻璃，超耐摔。搭载鸿蒙操作系统4.0，AI隔空操控，智感支付。支持天通卫星通话和北斗卫星消息。',
    rating: 4.9,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570891836654-d4961a7b6929?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕尺寸': '6.82英寸',
      '分辨率': '2720 × 1260',
      '电池容量': '5000mAh',
      '系统': 'HarmonyOS 4.0'
    },
    colors: [
      { name: '雅川青', value: '#5C7A70' },
      { name: '白沙银', value: '#E0E0E0' },
      { name: '南糯紫', value: '#8E7AA5' },
      { name: '雅丹黑', value: '#000000' }
    ],
    reviews: [
      { id: 1, user: '张**', avatar: '', rating: 5, content: '遥遥领先！手感非常好，系统流畅。', date: '2023-09-10' },
      { id: 2, user: '李**', avatar: '', rating: 5, content: '拍照清晰，卫星通话很实用。', date: '2023-09-12' }
    ]
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 9999,
    originalPrice: 11999,
    category: 'phone',
    brand: 'Apple',
    description: '钛金属设计 | A17 Pro芯片 | 4800万像素主摄',
    detail: 'iPhone 15 Pro Max。首款采用航空级钛金属设计的 iPhone，轻盈坚固。A17 Pro 芯片，开启游戏新纪元。',
    rating: 4.8,
    reviewCount: '50万+',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕尺寸': '6.7英寸',
      '芯片': 'A17 Pro',
      '材质': '钛金属',
      '接口': 'USB-C'
    },
    colors: [
      { name: '原色钛金属', value: '#8C8B88' },
      { name: '蓝色钛金属', value: '#2F3542' },
      { name: '白色钛金属', value: '#F1F2F6' },
      { name: '黑色钛金属', value: '#1E1E1E' }
    ],
    reviews: [
      { id: 1, user: '王**', rating: 5, content: '钛金属手感真好，轻了很多。', date: '2023-10-05' }
    ]
  },
  {
    id: 3,
    name: 'Xiaomi 14 Pro',
    price: 4999,
    originalPrice: 5999,
    category: 'phone',
    brand: 'Xiaomi',
    description: '徕卡Summilux镜头 | 第三代骁龙8 | 全等深微曲屏',
    detail: '小米14 Pro，徕卡光学Summilux镜头，光影猎人900影像传感器。第三代骁龙8移动平台，性能爆发。',
    rating: 4.7,
    reviewCount: '20万+',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570891836654-d4961a7b6929?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '6.73英寸 2K',
      '处理器': '骁龙8 Gen3',
      '充电': '120W秒充',
      '系统': 'Xiaomi HyperOS'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '白色', value: '#FFFFFF' },
      { name: '岩石青', value: '#4A6957' }
    ],
    reviews: []
  },
  {
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 9699,
    originalPrice: 10699,
    category: 'phone',
    brand: 'Samsung',
    description: '第三代骁龙8 | AI功能 | 2亿像素',
    detail: 'Galaxy S24 Ultra，钛金属边框，内置S Pen。Galaxy AI加持，即圈即搜，通话实时翻译。',
    rating: 4.6,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '6.8英寸',
      '处理器': '骁龙8 Gen3 for Galaxy',
      'S Pen': '支持',
      '摄像头': '2亿像素广角'
    },
    colors: [
      { name: '钛灰', value: '#808080' },
      { name: '钛黑', value: '#000000' },
      { name: '钛紫', value: '#800080' }
    ],
    reviews: []
  },
  {
    id: 5,
    name: 'OPPO Find X7 Ultra',
    price: 5999,
    originalPrice: 6999,
    category: 'phone',
    brand: 'OPPO',
    description: '双潜望四主摄 | 哈苏大师影像 | 2K钻石屏',
    detail: 'OPPO Find X7 Ultra，双潜望四主摄，哈苏全焦段大师影像。2K超通透钻石屏，观感极佳。',
    rating: 4.7,
    reviewCount: '8万+',
    image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '6.82英寸',
      '影像': '双潜望四主摄',
      '电池': '5000mAh',
      '充电': '100W超级闪充'
    },
    colors: [
      { name: '海阔天空', value: '#87CEEB' },
      { name: '大漠银月', value: '#C0C0C0' },
      { name: '松影墨韵', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 6,
    name: 'vivo X100 Pro',
    price: 4999,
    originalPrice: 5499,
    category: 'phone',
    brand: 'vivo',
    description: '蔡司APO超级长焦 | 蓝晶×天玑9300 | 5400mAh电池',
    detail: 'vivo X100 Pro，蔡司APO超级长焦，一英寸主摄。搭载蓝晶×天玑9300旗舰芯片，性能强悍。',
    rating: 4.8,
    reviewCount: '12万+',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '6.78英寸',
      '芯片': '天玑9300',
      '影像': '蔡司全焦段',
      '电池': '5400mAh蓝海电池'
    },
    colors: [
      { name: '落日橙', value: '#FFA500' },
      { name: '白月光', value: '#FFFFFF' },
      { name: '星迹蓝', value: '#0000FF' },
      { name: '辰夜黑', value: '#000000' }
    ],
    reviews: []
  },

  // 电脑办公 (6)
  {
    id: 7,
    name: 'MacBook Pro 14英寸',
    price: 12999,
    originalPrice: 14999,
    category: 'computer',
    brand: 'Apple',
    description: 'M3芯片 | Liquid视网膜XDR屏 | 22小时续航',
    detail: 'MacBook Pro 14英寸，搭载M3系列芯片，性能更进一步。Liquid 视网膜 XDR 显示屏，120Hz ProMotion 自适应刷新率。',
    rating: 4.9,
    reviewCount: '8万+',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '芯片': 'M3 / M3 Pro / M3 Max',
      '内存': '8GB/18GB/36GB起',
      '硬盘': '512GB/1TB起',
      '屏幕': '14.2英寸 XDR'
    },
    colors: [
      { name: '深空黑', value: '#2E2E2E' },
      { name: '银色', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 8,
    name: 'HUAWEI MateBook X Pro',
    price: 9999,
    originalPrice: 10999,
    category: 'computer',
    brand: 'Huawei',
    description: '微绒金属机身 | 3.1K原色全面屏 | 13代酷睿',
    detail: '华为MateBook X Pro，微绒金属机身，手感温润。3.1K原色全面屏，色彩真实。搭载第13代英特尔酷睿处理器。',
    rating: 4.7,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '处理器': 'i7-1360P',
      '内存': '16GB/32GB',
      '屏幕': '14.2英寸 3.1K',
      '重量': '1.26kg'
    },
    colors: [
      { name: '墨蓝', value: '#00008B' },
      { name: '锦白', value: '#F5F5F5' },
      { name: '拂晓粉', value: '#FFB6C1' }
    ],
    reviews: []
  },
  {
    id: 9,
    name: 'ThinkPad X1 Carbon',
    price: 10999,
    originalPrice: 12999,
    category: 'computer',
    brand: 'Lenovo',
    description: '航空级碳纤维 | 1.12kg超轻 | 商务旗舰',
    detail: 'ThinkPad X1 Carbon 2024，航空级碳纤维材质，轻至1.12kg。通过12项军标认证，坚固耐用。商务办公首选。',
    rating: 4.8,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '处理器': 'Ultra 7 155H',
      '内存': '32GB LPDDR5x',
      '屏幕': '2.8K OLED',
      '重量': '1.12kg'
    },
    colors: [
      { name: '沉浸黑', value: '#1C1C1C' }
    ],
    reviews: []
  },
  {
    id: 10,
    name: 'Dell XPS 13',
    price: 8999,
    originalPrice: 9999,
    category: 'computer',
    brand: 'Dell',
    description: '微边框设计 | CNC铝合金 | 4K触控屏',
    detail: 'Dell XPS 13，标志性的InfinityEdge微边框设计。CNC精密加工铝合金机身。可选4K超高清触控屏。',
    rating: 4.6,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '处理器': 'i7-1250U',
      '内存': '16GB',
      '屏幕': '13.4英寸',
      '材质': '铝合金 + 碳纤维'
    },
    colors: [
      { name: '银色', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 11,
    name: 'iPad Pro 12.9英寸',
    price: 8499,
    originalPrice: 9299,
    category: 'computer',
    brand: 'Apple',
    description: 'M2芯片 | XDR显示屏 | 支持Apple Pencil',
    detail: 'iPad Pro 12.9英寸，搭载M2芯片，性能强劲。Liquid 视网膜 XDR 显示屏，带来极致的视觉体验。支持悬停功能的 Apple Pencil。',
    rating: 4.9,
    reviewCount: '15万+',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '芯片': 'M2',
      '屏幕': '12.9英寸 XDR',
      '网络': 'WiFi / 5G',
      '存储': '128GB - 2TB'
    },
    colors: [
      { name: '深空灰', value: '#696969' },
      { name: '银色', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 12,
    name: 'Logitech MX Master 3S',
    price: 799,
    originalPrice: 899,
    category: 'computer',
    brand: 'Logitech',
    description: '8000 DPI | 静音按键 | MagSpeed滚轮',
    detail: 'Logitech MX Master 3S 鼠标，升级8000 DPI传感器，可在玻璃上使用。静音按键设计，MagSpeed电磁滚轮，一秒千行。',
    rating: 4.8,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      'DPI': '200-8000',
      '连接': '蓝牙/Bolt接收器',
      '续航': '70天',
      '充电': 'USB-C'
    },
    colors: [
      { name: '石墨黑', value: '#36454F' },
      { name: '珍珠白', value: '#F5F5F5' }
    ],
    reviews: []
  },

  // 智能穿戴 (6)
  {
    id: 13,
    name: 'Apple Watch Ultra 2',
    price: 6499,
    originalPrice: 6999,
    category: 'wearables',
    brand: 'Apple',
    description: '最坚固Apple Watch | 3000尼特亮度 | 双频GPS',
    detail: 'Apple Watch Ultra 2，专为户外探索、耐力训练和水上运动打造。屏幕亮度高达3000尼特，S9 SiP芯片，双指互点两下操控。',
    rating: 4.9,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '表壳': '49mm 钛金属',
      '防水': '100米',
      '续航': '36小时/72小时(低电量)',
      '显示': '全天候视网膜'
    },
    colors: [
      { name: '钛金属', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 14,
    name: 'HUAWEI WATCH GT 4',
    price: 1488,
    originalPrice: 1588,
    category: 'wearables',
    brand: 'Huawei',
    description: '八边棱角设计 | 科学减脂 | 14天续航',
    detail: '华为WATCH GT 4，独特八边棱角设计，时尚大气。搭载减脂塑形APP，科学管理卡路里。最长14天强劲续航。',
    rating: 4.8,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '尺寸': '46mm',
      '屏幕': 'AMOLED',
      '材质': '不锈钢',
      '防水': '5ATM'
    },
    colors: [
      { name: '云杉绿', value: '#006400' },
      { name: '曜石黑', value: '#000000' },
      { name: '山茶棕', value: '#8B4513' }
    ],
    reviews: []
  },
  {
    id: 15,
    name: 'Xiaomi Band 8 Pro',
    price: 399,
    originalPrice: 449,
    category: 'wearables',
    brand: 'Xiaomi',
    description: '1.74英寸大屏 | 独立GNSS | 14天续航',
    detail: '小米手环8 Pro，1.74英寸AMOLED大屏，视觉体验升级。内置独立GNSS五星定位，无需手机也能记录轨迹。',
    rating: 4.7,
    reviewCount: '20万+',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '1.74英寸 60Hz',
      '材质': '金属质感边框',
      '运动': '150+模式',
      '防水': '5ATM'
    },
    colors: [
      { name: '夜跃黑', value: '#000000' },
      { name: '椰子灰', value: '#D3D3D3' }
    ],
    reviews: []
  },
  {
    id: 16,
    name: 'Samsung Galaxy Watch6',
    price: 1599,
    originalPrice: 1799,
    category: 'wearables',
    brand: 'Samsung',
    description: '蓝宝石玻璃 | 睡眠指导 | 窄边框设计',
    detail: '三星Galaxy Watch6，拥有更大的屏幕和更窄的黑边。蓝宝石玻璃镜面，抗刮耐磨。先进的睡眠追踪和指导功能。',
    rating: 4.6,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': 'Super AMOLED',
      '处理器': 'Exynos W930',
      '系统': 'Wear OS',
      '健康': 'BIA传感器'
    },
    colors: [
      { name: '云影灰', value: '#808080' },
      { name: '星系银', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 17,
    name: 'GoPro HERO 12 Black',
    price: 2998,
    originalPrice: 3498,
    category: 'wearables',
    brand: 'GoPro',
    description: 'HDR视频 | HyperSmooth 6.0 | 蓝牙音频',
    detail: 'GoPro HERO 12 Black，画质惊艳，防抖更稳。新增HDR视频功能，支持蓝牙音频连接AirPods。续航时间大幅提升。',
    rating: 4.8,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '视频': '5.3K 60fps',
      '照片': '2700万像素',
      '防抖': 'HyperSmooth 6.0',
      '防水': '10米'
    },
    colors: [
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 18,
    name: 'DJI Osmo Action 4',
    price: 2598,
    originalPrice: 2798,
    category: 'wearables',
    brand: 'DJI',
    description: '1/1.3英寸传感器 | 10-bit色彩 | 155°超广角',
    detail: '大疆DJI Osmo Action 4，搭载1/1.3英寸传感器，夜景画质更纯净。支持10-bit D-Log M色彩模式，后期空间大。',
    rating: 4.9,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '传感器': '1/1.3英寸',
      '视频': '4K 120fps',
      '防水': '18米裸机防水',
      '续航': '160分钟'
    },
    colors: [
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },

  // 影音娱乐 (6)
  {
    id: 19,
    name: 'AirPods Pro (第二代)',
    price: 1899,
    originalPrice: 1999,
    category: 'audio',
    brand: 'Apple',
    description: '主动降噪 | 通透模式 | USB-C充电盒',
    detail: 'AirPods Pro (第二代)，H2芯片驱动，降噪能力最高提升至2倍。自适应通透模式，个性化空间音频。MagSafe充电盒（USB-C）。',
    rating: 4.9,
    reviewCount: '50万+',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '芯片': 'Apple H2',
      '降噪': '主动降噪',
      '抗汗防水': 'IP54',
      '续航': '30小时(配合充电盒)'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 20,
    name: 'Sony WH-1000XM5',
    price: 2499,
    originalPrice: 2999,
    category: 'audio',
    brand: 'Sony',
    description: '双芯降噪 | 8麦克风 | 30小时续航',
    detail: '索尼WH-1000XM5头戴式降噪耳机，集成处理器V1+HD降噪处理器QN1，双芯驱动。8个麦克风，降噪更精准。佩戴舒适轻盈。',
    rating: 4.8,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '驱动单元': '30mm',
      '蓝牙': '5.2',
      '音频编码': 'LDAC/AAC/SBC',
      '重量': '250g'
    },
    colors: [
      { name: '铂金银', value: '#E5E4E2' },
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 21,
    name: 'Bose QuietComfort Ultra',
    price: 2299,
    originalPrice: 2599,
    category: 'audio',
    brand: 'Bose',
    description: '沉浸空间音频 | 消噪耳塞 | 舒适稳固',
    detail: 'Bose QuietComfort Ultra消噪耳塞，突破性的沉浸空间音频技术。量耳定制的智能耳内音场调校。舒适稳固，适合长时间佩戴。',
    rating: 4.7,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '降噪': '三档模式',
      '续航': '6+18小时',
      '防水': 'IPX4',
      '连接': '蓝牙5.3'
    },
    colors: [
      { name: '晨雾白', value: '#F0F8FF' },
      { name: '经典黑', value: '#000000' },
      { name: '月光宝石蓝', value: '#4169E1' }
    ],
    reviews: []
  },
  {
    id: 22,
    name: 'Marshall Emberton II',
    price: 1299,
    originalPrice: 1499,
    category: 'audio',
    brand: 'Marshall',
    description: '经典设计 | 30+小时续航 | IP67防尘防水',
    detail: 'Marshall Emberton II 便携蓝牙音箱，标志性的Marshall之声。紧凑机身，爆发力十足。续航时间长达30小时以上。',
    rating: 4.9,
    reviewCount: '4万+',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '立体声': '360度',
      '续航': '30+小时',
      '充电': '快充20分钟续航4小时',
      '防水': 'IP67'
    },
    colors: [
      { name: '黑金', value: '#000000' },
      { name: '奶油白', value: '#FFFDD0' }
    ],
    reviews: []
  },
  {
    id: 23,
    name: 'JBL PULSE 5',
    price: 1699,
    originalPrice: 1999,
    category: 'audio',
    brand: 'JBL',
    description: '360度灯光秀 | 原音效 | 12小时续航',
    detail: 'JBL PULSE 5 音乐脉动五代，全面屏炫彩灯效，随乐律动。JBL传奇音质，低音更震撼。IP67防尘防水。',
    rating: 4.8,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '功率': '30W+10W',
      '灯效': '全面屏RGB',
      '蓝牙': '5.3',
      '串联': 'PartyBoost'
    },
    colors: [
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 24,
    name: 'Switch OLED',
    price: 1999,
    originalPrice: 2299,
    category: 'audio',
    brand: 'Nintendo',
    description: '7英寸OLED屏 | 增强音频 | 桌面模式',
    detail: 'Nintendo Switch OLED款式，色彩更艳丽的7英寸OLED屏幕。转轴式支架，角度调节更自由。扬声器升级，音效更佳。',
    rating: 4.9,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '屏幕': '7英寸 OLED',
      '存储': '64GB',
      '模式': 'TV/桌面/掌上',
      '续航': '4.5-9小时'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' },
      { name: '红蓝', value: '#FF0000' }
    ],
    reviews: []
  },

  // 智能家居 (6)
  {
    id: 25,
    name: 'Dyson V12 Detect Slim',
    price: 3999,
    originalPrice: 4499,
    category: 'home',
    brand: 'Dyson',
    description: '激光探测 | 压电式声学传感器 | 轻量设计',
    detail: '戴森V12 Detect Slim无绳吸尘器，激光纤巧软绒吸头，让微尘无所遁形。实时分类统计灰尘数量。轻量化设计，手感更轻盈。',
    rating: 4.8,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '吸力': '150AW',
      '续航': '60分钟',
      '重量': '1.5kg',
      '过滤': '整机密封'
    },
    colors: [
      { name: '镍金色', value: '#D4AF37' }
    ],
    reviews: []
  },
  {
    id: 26,
    name: 'Xiaomi Air Purifier 4 Pro',
    price: 1299,
    originalPrice: 1499,
    category: 'home',
    brand: 'Xiaomi',
    description: '除醛除菌 | 负离子 | 智能互联',
    detail: '米家空气净化器4 Pro，强力除醛除味，99.99%抗病毒涂层。释放清新负离子。支持米家APP远程控制，小爱同学语音控制。',
    rating: 4.9,
    reviewCount: '20万+',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '颗粒物CADR': '500m³/h',
      '甲醛CADR': '185m³/h',
      '适用面积': '35-60㎡',
      '噪音': '33.4dB(A)'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 27,
    name: 'Roborock G20',
    price: 4999,
    originalPrice: 5999,
    category: 'home',
    brand: 'Roborock',
    description: '双刷双震 | AI智控 | 全能基站',
    detail: '石头自清洁扫拖机器人G20，双胶刷+双震动擦地，清洁力翻倍。全能基站，自动洗拖布、自动集尘、自动烘干。',
    rating: 4.8,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '吸力': '6000Pa',
      '避障': 'AI 3D结构光',
      '续航': '180分钟',
      '集尘袋': '2.5L'
    },
    colors: [
      { name: '云石白', value: '#F5F5F5' },
      { name: '曜石黑', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 28,
    name: 'Philips Hue Play',
    price: 899,
    originalPrice: 999,
    category: 'home',
    brand: 'Philips',
    description: '沉浸式灯光 | 1600万色 | 影音同步',
    detail: 'Philips Hue Play 电视电脑伴侣灯条，营造沉浸式娱乐氛围。支持1600万色调节，可与音乐、电影、游戏画面同步律动。',
    rating: 4.7,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '色彩': '1600万色',
      '寿命': '25000小时',
      '控制': 'App/语音',
      '功率': '6.6W'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '白色', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 29,
    name: 'Nespresso Vertuo Pop',
    price: 999,
    originalPrice: 1299,
    category: 'home',
    brand: 'Nespresso',
    description: '离心萃取 | 一键制作 | 缤纷配色',
    detail: 'Nespresso Vertuo Pop 胶囊咖啡机，采用离心力萃取技术，油脂丰富。小巧机身，时尚配色，一键制作高品质咖啡。',
    rating: 4.8,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '杯量': '4种',
      '预热': '30秒',
      '水箱': '0.6L',
      '节能': '自动关机'
    },
    colors: [
      { name: '薄荷绿', value: '#98FF98' },
      { name: '芒果黄', value: '#FFD700' },
      { name: '辣椒红', value: '#FF0000' }
    ],
    reviews: []
  },
  {
    id: 30,
    name: 'Bose SoundLink Revolve+',
    price: 1999,
    originalPrice: 2499,
    category: 'home',
    brand: 'Bose',
    description: '360度全向音效 | 拎手设计 | IP55防水',
    detail: 'Bose SoundLink Revolve+ II 蓝牙音箱，提供真实360度全向音效。灵活拎手设计，方便携带。IP55级防尘防水。',
    rating: 4.9,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '续航': '17小时',
      '蓝牙': '4.2',
      '接口': 'Micro-B',
      '功能': '派对模式'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '银色', value: '#C0C0C0' }
    ],
    reviews: []
  },

  // 潮流服饰 (6)
  {
    id: 31,
    name: 'Nike Sportswear Tech Fleece',
    price: 699,
    originalPrice: 799,
    category: 'clothing',
    brand: 'Nike',
    description: '轻盈保暖 | 现代剪裁 | 经典设计',
    detail: 'Nike Sportswear Tech Fleece 男子全长拉链开襟连帽衫，采用双面针织面料，轻盈保暖。现代剪裁设计，运动休闲皆宜。',
    rating: 4.8,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '66%棉/34%聚酯纤维',
      '版型': '标准',
      '尺码': 'S,M,L,XL,XXL',
      '适用': '运动/休闲'
    },
    colors: [
      { name: '灰色', value: '#808080' },
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 32,
    name: 'Adidas Adicolor Classics',
    price: 399,
    originalPrice: 499,
    category: 'clothing',
    brand: 'Adidas',
    description: '三条纹设计 | 纯棉面料 | 舒适百搭',
    detail: 'Adidas Adicolor Classics 三叶草T恤，经典三条纹设计，复古时尚。采用柔软纯棉面料，亲肤舒适，百搭单品。',
    rating: 4.7,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '100%棉',
      '领型': '圆领',
      '尺码': 'XS,S,M,L,XL',
      '版型': '常规'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' },
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },
  {
    id: 33,
    name: 'The North Face 1996 Nuptse',
    price: 2499,
    originalPrice: 2998,
    category: 'clothing',
    brand: 'The North Face',
    description: '700蓬松度 | DWR防泼水 | 经典羽绒',
    detail: 'The North Face 1996 Nuptse 羽绒服，700蓬松度鹅绒填充，保暖性极佳。经DWR防泼水处理，经典方块拼接设计。',
    rating: 4.9,
    reviewCount: '5000+',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '填充': '鹅绒',
      '蓬松度': '700',
      '面料': '尼龙',
      '尺码': 'S,M,L,XL'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '黄色', value: '#FFFF00' }
    ],
    reviews: []
  },
  {
    id: 34,
    name: 'Levi\'s 501 Original',
    price: 699,
    originalPrice: 899,
    category: 'clothing',
    brand: 'Levi\'s',
    description: '直筒版型 | 纽扣门襟 | 经典丹宁',
    detail: 'Levi\'s 501 Original 牛仔裤，经典直筒版型，标志性纽扣门襟。采用优质丹宁面料，耐穿且随着时间推移更有质感。',
    rating: 4.8,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '99%棉 1%氨纶',
      '腰型': '中腰',
      '尺码': '28,29,30,31,32,33,34',
      '裤长': '长裤'
    },
    colors: [
      { name: '经典蓝', value: '#0000CD' },
      { name: '水洗黑', value: '#2F4F4F' }
    ],
    reviews: []
  },
  {
    id: 35,
    name: 'Uniqlo U AIRism',
    price: 99,
    originalPrice: 149,
    category: 'clothing',
    brand: 'Uniqlo',
    description: 'AIRism凉感 | 宽松版型 | 大师设计',
    detail: '优衣库 Uniqlo U 系列 AIRism 棉混纺宽松圆领T恤。内表面AIRism面料，凉感透气；外表面棉质触感，挺括有型。',
    rating: 4.9,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '53%棉 30%聚酯纤维',
      '功能': '吸汗速干/凉感',
      '尺码': 'XS,S,M,L,XL,XXL',
      '系列': 'Uniqlo U'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' },
      { name: '黑色', value: '#000000' },
      { name: '深棕', value: '#654321' }
    ],
    reviews: []
  },
  {
    id: 36,
    name: 'Zara Oversized Blazer',
    price: 599,
    originalPrice: 799,
    category: 'clothing',
    brand: 'Zara',
    description: '廓形剪裁 | 双排扣 | 商务休闲',
    detail: 'Zara 宽松版型西装外套，时尚廓形剪裁，双排扣设计。适合商务通勤或日常休闲搭配，提升气场。',
    rating: 4.6,
    reviewCount: '5000+',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '聚酯纤维混纺',
      '衣长': '中长款',
      '尺码': 'XS,S,M,L',
      '风格': '欧美'
    },
    colors: [
      { name: '驼色', value: '#C19A6B' },
      { name: '黑色', value: '#000000' }
    ],
    reviews: []
  },

  // 运动鞋靴 (6)
  {
    id: 37,
    name: 'Nike Air Force 1 \'07',
    price: 749,
    originalPrice: 899,
    category: 'shoes',
    brand: 'Nike',
    description: '传奇风采 | 缓震舒适 | 经典百搭',
    detail: 'Nike Air Force 1 \'07 空军一号，经典篮球鞋设计。Nike Air 缓震配置，全天候舒适体验。百搭小白鞋，街头必备。',
    rating: 4.9,
    reviewCount: '20万+',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '鞋面': '皮革',
      '底料': '橡胶',
      '尺码': '36,37,38,39,40,41,42,43,44',
      '科技': 'Nike Air'
    },
    colors: [
      { name: '白色', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 38,
    name: 'Adidas Ultraboost Light',
    price: 1099,
    originalPrice: 1399,
    category: 'shoes',
    brand: 'Adidas',
    description: 'Boost科技 | Primeknit鞋面 | 能量回馈',
    detail: 'Adidas Ultraboost Light 跑步鞋，采用更轻盈的Boost材质，提供惊人的能量回馈。Primeknit+鞋面，如以此般贴合。',
    rating: 4.8,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '中底': 'Light BOOST',
      '外底': 'Continental马牌橡胶',
      '尺码': '39,40,41,42,43,44,45',
      '用途': '跑步/通勤'
    },
    colors: [
      { name: '黑白', value: '#000000' },
      { name: '全白', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 39,
    name: 'New Balance 530',
    price: 699,
    originalPrice: 799,
    category: 'shoes',
    brand: 'New Balance',
    description: '复古老爹鞋 | ABZORB缓震 | 透气网面',
    detail: 'New Balance 530 复古跑步鞋，千禧年美学设计。ABZORB中底技术，提供出色的缓震性能。大网眼鞋面，透气舒适。',
    rating: 4.8,
    reviewCount: '8万+',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '鞋面': '人造革/织物',
      '中底': 'ABZORB',
      '尺码': '36,37,38,39,40,41,42,43,44',
      '风格': '复古'
    },
    colors: [
      { name: '银白', value: '#DCDCDC' },
      { name: '米色', value: '#F5F5DC' }
    ],
    reviews: []
  },
  {
    id: 40,
    name: 'Converse Chuck 70',
    price: 549,
    originalPrice: 649,
    category: 'shoes',
    brand: 'Converse',
    description: '高帮帆布鞋 | 经典三星标 | 加厚鞋垫',
    detail: 'Converse Chuck 70 经典帆布鞋，复古鞋型，光泽感鞋围条。加厚OrthoLite鞋垫，脚感更舒适。后跟经典三星标。',
    rating: 4.9,
    reviewCount: '15万+',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '重磅帆布',
      '鞋底': '橡胶',
      '尺码': '35,36,37,38,39,40,41,42,43,44',
      '款式': '高帮'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '米黄', value: '#FFF8DC' },
      { name: '向日葵黄', value: '#FFD700' }
    ],
    reviews: []
  },
  {
    id: 41,
    name: 'Vans Old Skool',
    price: 499,
    originalPrice: 599,
    category: 'shoes',
    brand: 'Vans',
    description: '侧边条纹 | 华夫底 | 街头滑板',
    detail: 'Vans Old Skool 经典滑板鞋，标志性的侧边条纹设计。耐磨华夫大底，抓地力强。麂皮拼接帆布鞋面，耐穿有型。',
    rating: 4.8,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '牛剖层革/织物',
      '鞋底': '硫化橡胶',
      '尺码': '35-44',
      '系列': 'Classics'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '海军蓝', value: '#000080' }
    ],
    reviews: []
  },
  {
    id: 42,
    name: 'Salomon XT-6',
    price: 1298,
    originalPrice: 1498,
    category: 'shoes',
    brand: 'Salomon',
    description: '户外机能 | ACS底盘 | 快速系带',
    detail: 'Salomon XT-6 户外运动鞋，备受潮流圈追捧。ACS底盘系统，提供稳定支撑。Quicklace快速系带系统，穿脱便捷。',
    rating: 4.7,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '中底': 'EVA',
      '鞋底': 'Contagrip',
      '尺码': '39-45',
      '场景': '越野/城市'
    },
    colors: [
      { name: '冰川白', value: '#F0F8FF' },
      { name: '曜石黑', value: '#000000' }
    ],
    reviews: []
  },

  // 潮流配件 (8)
  {
    id: 43,
    name: 'Herschel Little America',
    price: 698,
    originalPrice: 898,
    category: 'accessories',
    brand: 'Herschel',
    description: '25L大容量 | 植鞣皮带 | 笔记本隔层',
    detail: 'Herschel Little America 双肩包，经典登山包风格。25L大容量，内置植绒笔记本隔层（最大支持15寸）。磁吸扣带设计。',
    rating: 4.8,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '容量': '25L',
      '材质': '聚酯纤维',
      '尺寸': '49x28x18cm',
      '电脑位': '15英寸'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '海军蓝', value: '#000080' },
      { name: '灰色', value: '#808080' }
    ],
    reviews: []
  },
  {
    id: 44,
    name: 'Ray-Ban Wayfarer',
    price: 1180,
    originalPrice: 1380,
    category: 'accessories',
    brand: 'Ray-Ban',
    description: '经典徒步旅行者 | G-15镜片 | 意大利制',
    detail: 'Ray-Ban雷朋 Wayfarer 经典徒步旅行者太阳镜。G-15绿色镜片，有效阻隔紫外线，视觉清晰自然。意大利制造，品质保证。',
    rating: 4.9,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '镜框': '板材',
      '镜片': '玻璃',
      '尺寸': '50/54mm',
      '防晒': 'UV400'
    },
    colors: [
      { name: '黑框绿片', value: '#000000' },
      { name: '龟甲色', value: '#8B4513' }
    ],
    reviews: []
  },
  {
    id: 45,
    name: 'New Era 9FORTY NY',
    price: 239,
    originalPrice: 299,
    category: 'accessories',
    brand: 'New Era',
    description: '洋基队Logo | 弯檐棒球帽 | 可调节',
    detail: 'New Era 9FORTY MLB 纽约洋基队棒球帽。经典立体刺绣Logo。弯檐设计，修饰脸型。后扣可调节大小。',
    rating: 4.8,
    reviewCount: '3万+',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '棉',
      '帽围': '55-61cm',
      '款式': '硬顶弯檐',
      '球队': 'New York Yankees'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '藏青', value: '#000080' },
      { name: '白色', value: '#FFFFFF' }
    ],
    reviews: []
  },
  {
    id: 46,
    name: 'Casio G-SHOCK',
    price: 890,
    originalPrice: 1090,
    category: 'accessories',
    brand: 'Casio',
    description: '防震防水 | 农家橡树 | 碳纤维核心',
    detail: 'Casio卡西欧 G-SHOCK GA-2100，被誉为"农家橡树"。八角形表圈设计，碳纤维核心防护构造，轻薄坚韧。200米防水。',
    rating: 4.9,
    reviewCount: '10万+',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '机芯': '石英',
      '表壳': '树脂/碳纤维',
      '防水': '200米',
      '功能': '世界时间/闹钟'
    },
    colors: [
      { name: '全黑', value: '#000000' },
      { name: '红色', value: '#FF0000' }
    ],
    reviews: []
  },
  {
    id: 47,
    name: 'Samsonite C-Lite',
    price: 3580,
    originalPrice: 4280,
    category: 'accessories',
    brand: 'Samsonite',
    description: '贝壳箱 | Curv材质 | 超轻抗压',
    detail: '新秀丽 Samsonite C-Lite 拉杆箱，经典贝壳纹路设计。采用黑科技Curv材质，极轻且坚韧抗压。静音万向轮，推拉顺滑。',
    rating: 4.8,
    reviewCount: '5000+',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '尺寸': '20英寸',
      '材质': 'Curv',
      '重量': '1.9kg',
      '锁具': 'TSA海关锁'
    },
    colors: [
      { name: '珠光白', value: '#F5F5F5' },
      { name: '深蓝', value: '#00008B' },
      { name: '辣椒红', value: '#FF0000' }
    ],
    reviews: []
  },
  {
    id: 48,
    name: 'Lululemon Everywhere Belt Bag',
    price: 380,
    originalPrice: 450,
    category: 'accessories',
    brand: 'Lululemon',
    description: '防水面料 | 多种背法 | 城市机能',
    detail: 'Lululemon Everywhere Belt Bag 腰包，采用防水面料。容量适中，可收纳手机、钥匙等随身物品。既可作腰包，也可作胸包。',
    rating: 4.8,
    reviewCount: '1万+',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '容量': '1L',
      '材质': '尼龙',
      '尺寸': '19x5.5x13cm',
      '口袋': '内侧网袋'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '白色', value: '#FFFFFF' },
      { name: '粉色', value: '#FFC0CB' }
    ],
    reviews: []
  },
  {
    id: 49,
    name: 'Daniel Wellington Classic',
    price: 1190,
    originalPrice: 1390,
    category: 'accessories',
    brand: 'DW',
    description: '极简设计 | 超薄表盘 | 尼龙表带',
    detail: 'Daniel Wellington Classic 系列腕表，瑞典极简设计风格。6mm超薄表盘，搭配经典尼龙表带，时尚百搭。',
    rating: 4.7,
    reviewCount: '5万+',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '尺寸': '40mm',
      '厚度': '6mm',
      '机芯': '日本石英',
      '防水': '3ATM'
    },
    colors: [
      { name: '玫瑰金', value: '#B76E79' },
      { name: '银色', value: '#C0C0C0' }
    ],
    reviews: []
  },
  {
    id: 50,
    name: 'Gentle Monster Lilit',
    price: 1960,
    originalPrice: 2160,
    category: 'accessories',
    brand: 'Gentle Monster',
    description: '方框设计 | 抗蓝光 | 明星同款',
    detail: 'Gentle Monster Lilit 光学镜，经典方框设计，修饰脸型。配备抗蓝光镜片，保护视力。镜腿处金属细节装饰。',
    rating: 4.8,
    reviewCount: '2万+',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
    ],
    specs: {
      '材质': '板材',
      '镜框': '黑色',
      '镜片': '蔡司抗蓝光',
      '尺寸': 'Front 145mm'
    },
    colors: [
      { name: '黑色', value: '#000000' },
      { name: '玳瑁', value: '#8B4513' }
    ],
    reviews: []
  }
]
