import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star, User } from 'lucide-react';

interface Review {
  id: number;
  userName: string;
  avatar: string;
  date: string;
  rating: number;
  comment: string;
}

interface ReviewPanelProps {
  reviews: Review[];
}

export function ReviewPanel({ reviews }: ReviewPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6">
      <motion.button
        className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all duration-300 border-2 border-amber-200"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center">
            <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
          </div>
          <span className="text-gray-800">查看旅客真实体验评价</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: review.id * 0.1 }}
                  className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-gray-900">{review.userName}</p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.button
                className="w-full py-3 bg-white border-2 border-[#0066FF] text-[#0066FF] rounded-xl hover:bg-[#0066FF] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                查看更多完整评价 →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
