import { motion } from "framer-motion";
import ServiceCard from "@/components/service-card";
import { BoxIcon, Palette, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "3D Design & Prototyping",
      description: "Photorealistic 3D visualization and prototyping for products, architecture, and more.",
      Icon: BoxIcon
    },
    {
      title: "Luxury Brand Development",
      description: "Complete brand identity development for premium and luxury brands.",
      Icon: Palette
    },
    {
      title: "Strategic Design Consulting",
      description: "Expert consultation for businesses looking to elevate their design strategy.",
      Icon: Lightbulb
    }
  ];

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
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Premium design services tailored for discerning clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <img
            src="https://images.unsplash.com/photo-1653398792259-1b31e48c29c4"
            alt="3D Design Example"
            className="rounded-lg shadow-lg w-full aspect-video object-cover"
          />
        </div>
      </div>
    </div>
  );
}