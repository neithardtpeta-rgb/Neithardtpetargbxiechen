import { motion } from 'motion/react';
import { Plane, MapPin, Shield, Sparkles } from 'lucide-react';
import { CityCard } from './components/CityCard';

// TOP10城市数据
const topCities = [
  {
    rank: 1,
    cityName: '北京',
    imageUrl: 'https://images.unsplash.com/photo-1613798518288-2e2ae91220ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWlqaW5nJTIwRm9yYmlkZGVuJTIwQ2l0eSUyMGxhbmRtYXJrfGVufDF8fHx8MTc3MjU4NjIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '千年古都，现代魅力！探访故宫长城，品味京味文化，感受大国首都的历史底蕴与时尚活力。',
  },
  {
    rank: 2,
    cityName: '上海',
    imageUrl: 'https://images.unsplash.com/photo-1647066501166-54b17d88e61b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFuZ2hhaSUyMEJ1bmQlMjBza3lsaW5lfGVufDF8fHx8MTc3MjU4NjIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '东方明珠，不夜之城！漫步外滩看万国建筑，登顶东方明珠俯瞰魔都，这里是传统与现代的完美融合。',
  },
  {
    rank: 3,
    cityName: '成都',
    imageUrl: 'https://images.unsplash.com/photo-1709560331476-94206986273c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVuZ2R1JTIwcGFuZGElMjBjaXR5fGVufDF8fHx8MTc3MjU4NjIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '来了就不想走的城市！看呆萌大熊猫，吃地道川菜火锅，体验慢生活的惬意与烟火气。',
  },
  {
    rank: 4,
    cityName: '杭州',
    imageUrl: 'https://images.unsplash.com/photo-1726703062028-e43d2eec8080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYW5nemhvdSUyMFdlc3QlMjBMYWtlfGVufDF8fHx8MTc3MjU4NjIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '人间天堂，诗画江南！泛舟西湖赏四季美景，漫步西溪湿地，品龙井茶香，感受温婉雅致的江南韵味。',
  },
  {
    rank: 5,
    cityName: '西安',
    imageUrl: 'https://images.unsplash.com/photo-1659466248885-8b7a03205661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxYaWFuJTIwdGVycmFjb3R0YSUyMHdhcnJpb3JzfGVufDF8fHx8MTc3MjU4NjIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '十三朝古都，丝路起点！震撼兵马俑，登古城墙骑行，在回民街大快朵颐，穿越回盛唐时光。',
  },
  {
    rank: 6,
    cityName: '重庆',
    imageUrl: 'https://images.unsplash.com/photo-1677736316229-541f28f40079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaG9uZ3FpbmclMjBuaWdodCUyMGNpdHl8ZW58MXx8fHwxNzcyNTg2MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '8D魔幻山城，火锅之都！坐长江索道看两江交汇，夜游洪崖洞赏山城夜景，吃最正宗的重庆火锅。',
  },
  {
    rank: 7,
    cityName: '广州',
    imageUrl: 'https://images.unsplash.com/photo-1585669666867-f4eee227eb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWFuZ3pob3UlMjBDYW50b24lMjBUb3dlcnxlbnwxfHx8fDE3NzI1ODYyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '千年商都，食在广州！登小蛮腰俯瞰珠江，逛骑楼老街品早茶文化，感受岭南风情与活力。',
  },
  {
    rank: 8,
    cityName: '厦门',
    imageUrl: 'https://images.unsplash.com/photo-1695970435048-1298dc37c612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxYaWFtZW4lMjBHdWxhbmd5dSUyMGlzbGFuZHxlbnwxfHx8fDE3NzI1ODYyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '海上花园，文艺小清新！漫步鼓浪屿听琴声悠扬，环岛路骑行吹海风，在这座浪漫海滨城市放空心灵。',
  },
  {
    rank: 9,
    cityName: '三亚',
    imageUrl: 'https://images.unsplash.com/photo-1634317343250-05844895e2d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW55YSUyMHRyb3BpY2FsJTIwYmVhY2h8ZW58MXx8fHwxNzcyNTg2MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '中国的马尔代夫！椰林沙滩，碧海蓝天，潜水冲浪，享受热带海岛的阳光与慵懒时光。',
  },
  {
    rank: 10,
    cityName: '丽江',
    imageUrl: 'https://images.unsplash.com/photo-1754624048337-d87271d76701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaWppYW5nJTIwYW5jaWVudCUyMHRvd258ZW58MXx8fHwxNzcyNTg2MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tagline: '艳遇之都，世外桃源！古城小桥流水，玉龙雪山巍峨壮丽，在纳西风情中寻找心灵归宿。',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* 顶部导航栏 */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-[#0066FF]">携程旅行</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#0066FF] transition-colors">首页</a>
            <a href="#" className="text-gray-700 hover:text-[#0066FF] transition-colors">目的地</a>
            <a href="#" className="text-gray-700 hover:text-[#0066FF] transition-colors">榜单</a>
            <a href="#" className="text-gray-700 hover:text-[#0066FF] transition-colors">攻略</a>
            <motion.button
              className="px-6 py-2 bg-[#0066FF] text-white rounded-full hover:bg-[#0052CC] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              立即预订
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* 首屏KV区 */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 主标题 */}
            <motion.div
              className="inline-block mb-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 via-orange-100 to-pink-100 rounded-full border-2 border-orange-300">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-orange-700">2026年度官方榜单发布</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-[#0066FF] via-blue-600 to-purple-600 bg-clip-text text-transparent">
              携程年度TOP10
              <br />
              热门旅游城市榜单
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              基于千万用户真实出行数据，携程官方权威发布
              <br />
              一站式搞定酒店、民宿、交通，让旅行更简单
            </p>

            {/* 三大核心服务能力 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { icon: MapPin, text: '覆盖全国热门目的地' },
                { icon: Shield, text: '百万用户真实评价' },
                { icon: Plane, text: '一站式旅行服务' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <span className="text-gray-800">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* 装饰性卡通元素 */}
            <motion.div
              className="absolute top-20 left-10 text-6xl"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ✈️
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-5xl"
              animate={{
                rotate: [0, -10, 10, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              🏖️
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-1/4 text-5xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              🎒
            </motion.div>
          </motion.div>
        </div>

        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* TOP10城市榜单区 */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-900 mb-4">
            🏆 年度最受欢迎旅游城市
          </h2>
          <p className="text-lg text-gray-600">
            基于2026年度用户搜索量、预订量、好评度综合评选
          </p>
        </motion.div>

        <div className="space-y-8">
          {topCities.map((city, index) => (
            <CityCard
              key={city.rank}
              rank={city.rank}
              cityName={city.cityName}
              imageUrl={city.imageUrl}
              tagline={city.tagline}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* 页尾区 */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* 榜单说明 */}
            <div>
              <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0066FF] rounded-full" />
                榜单数据来源
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                本榜单由携程旅行官方发布，基于2026年度平台真实用户搜索、预订、评价等多维度大数据综合评选，确保公正性与权威性。
              </p>
            </div>

            {/* 品牌背书 */}
            <div>
              <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0066FF] rounded-full" />
                携程一站式服务
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 全球200+国家和地区</li>
                <li>• 140万+酒店民宿资源</li>
                <li>• 2亿+真实用户点评</li>
                <li>• 7×24小时客服保障</li>
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0066FF] rounded-full" />
                联系我们
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>客服热线：400-xxx-xxxx</li>
                <li>官方网站：www.ctrip.com</li>
                <li>官方微博：@携程旅行</li>
                <li>官方微信：携程旅行</li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-gray-300 pt-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-[#0066FF]">携程旅行</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              © 2026 携程旅行 Ctrip.com All Rights Reserved
            </p>
            <p className="text-xs text-gray-400">
              网络文化经营许可证 | 增值电信业务经营许可证 | 旅行社业务经营许可证
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
