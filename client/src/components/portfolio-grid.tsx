import { motion } from "framer-motion";
import WorkCard from "./work-card";

const portfolioItems = [
  {
    title: "Minimalist Brand Identity",
    description: "Corporate identity design for a Swiss luxury watchmaker",
    imageUrl: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef"
  },
  {
    title: "3D Product Visualization",
    description: "Photorealistic 3D renders for an architectural firm",
    imageUrl: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea"
  },
  {
    title: "Premium Packaging",
    description: "Luxury packaging design for a high-end cosmetics brand",
    imageUrl: "https://images.unsplash.com/photo-1481277542470-605612bd2d61"
  },
  {
    title: "Digital Experience",
    description: "Interactive website design for a modern art gallery",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  }
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <WorkCard {...item} />
        </motion.div>
      ))}
    </div>
  );
}
