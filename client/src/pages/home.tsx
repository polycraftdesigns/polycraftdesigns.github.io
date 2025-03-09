import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Precision. Innovation.
              <br />
              Design Excellence.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We craft exceptional digital experiences for premium brands,
              combining Swiss precision with innovative design.
            </p>
            <Link href="/contact">
              <Button size="lg" className="group">
                Work with Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Modern office space"
              className="rounded-lg shadow-lg aspect-video object-cover"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Swiss Design Excellence
              </h2>
              <p className="text-muted-foreground">
                Based in Lugano, Switzerland, we bring precision and innovation
                to every project. Our expertise in 3D modeling, branding, and
                strategic design consulting helps premium brands stand out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
