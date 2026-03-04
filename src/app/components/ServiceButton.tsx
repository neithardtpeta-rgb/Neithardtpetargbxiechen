import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ServiceButton({ icon: Icon, title, description, onClick }: ServiceButtonProps) {
  return (
    <motion.div
      className="flex-1 bg-white rounded-2xl p-6 border-2 border-gray-100 cursor-pointer group"
      whileHover={{ scale: 1.05, borderColor: '#0066FF' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
          <Icon className="w-7 h-7 text-[#0066FF]" />
        </div>
        <div>
          <p className="text-gray-900 mb-1">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <motion.button
          className="mt-2 px-6 py-2 bg-[#0066FF] text-white rounded-full text-sm hover:bg-[#0052CC] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          立即预订
        </motion.button>
      </div>
    </motion.div>
  );
}
