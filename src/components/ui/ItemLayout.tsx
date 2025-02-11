import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface ItemLayoutProps {
  children: ReactNode;
  className?: string;
}

const ItemLayout: React.FC<ItemLayoutProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg",
        "p-3",
        "sm:p-6",
        "rounded-xl",
        "flex",
        "items-center",
        "justify-center",
        "space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
