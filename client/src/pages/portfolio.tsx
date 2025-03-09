import { motion } from "framer-motion";
import PortfolioGrid from "@/components/portfolio-grid";

export default function Portfolio() {
  return (
    <div className="py-12 md:py-24">
      <div className="container px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">
            A selection of our finest work for premium clients worldwide.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
}