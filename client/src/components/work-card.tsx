import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function WorkCard({ title, description, imageUrl }: WorkCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
