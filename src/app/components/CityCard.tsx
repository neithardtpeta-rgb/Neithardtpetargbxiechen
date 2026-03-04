import { motion } from 'motion/react';
import { Hotel, Home, Plane } from 'lucide-react';
import { ServiceButton } from './ServiceButton';
import { ReviewPanel } from './ReviewPanel';

interface CityCardProps {
  rank: number;
  cityName: string;
  imageUrl: string;
  tagline: string;
  index: number;
}

export function CityCard({ rank, cityName, imageUrl, tagline, index }: CityCardProps) {
  // 模拟用户评价数据
  const mockReviews = [
    {
      id: 1,
      userName: '旅行达人小李',
      avatar: '',
      date: '2026年2月',
      rating: 5,
      comment: `${cityName}真的太美了！城市规划很好，景点丰富，美食也很赞。特别推荐大家来体验一下当地文化，绝对不虚此行！`,
    },
    {
      id: 2,
      userName: '周末游玩者',
      avatar: '',
      date: '2026年1月',
      rating: 5,
      comment: `带着家人一起来的，老人小孩都玩得很开心。住宿和交通都很方便，携程的服务也很到位，全程无忧！`,
    },
    {
      id: 3,
      userName: '美食探索家',
      avatar: '',
      date: '2025年12月',
      rating: 4,
      comment: `这里的美食文化太丰富了，每天都在尝试不同的特色小吃。建议大家多留几天时间慢慢品味。`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100"
    >
      {/* 头部：排名 + 城市名称 + 地标视觉 */}
      <div className="flex items-start gap-6 mb-6">
        <motion.div
          className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="text-center">
            <div className="text-xs text-blue-200">NO.</div>
            <div className="text-3xl text-white">{rank}</div>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={imageUrl}
              alt={cityName}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h2 className="text-4xl text-white mb-2">{cityName}</h2>
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-[#FF9500] rounded-full" />
                <span className="text-sm text-white/90">热门目的地</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 一句话种草点评 */}
      <motion.div
        className="mb-8 p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-pink-50 rounded-2xl border-2 border-amber-200"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-lg">✨</span>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">携程旅行推荐</p>
            <p className="text-lg text-gray-800 leading-relaxed">{tagline}</p>
          </div>
        </div>
      </motion.div>

      {/* 一站式服务入口区 */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-700 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#0066FF] rounded-full" />
          一站式旅行服务
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <ServiceButton
            icon={Hotel}
            title="酒店住宿"
            description={`${cityName}精选酒店`}
            onClick={() => console.log(`查看${cityName}酒店`)}
          />
          <ServiceButton
            icon={Home}
            title="特色民宿"
            description="当地体验推荐"
            onClick={() => console.log(`查看${cityName}民宿`)}
          />
          <ServiceButton
            icon={Plane}
            title="交通票务"
            description="机票火车一键搞定"
            onClick={() => console.log(`查看${cityName}交通`)}
          />
        </div>
      </div>

      {/* 用户真实评价折叠面板 */}
      <ReviewPanel reviews={mockReviews} />
    </motion.div>
  );
}
