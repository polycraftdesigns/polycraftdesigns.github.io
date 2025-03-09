import { motion } from "framer-motion";

export default function About() {
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
            About PolyCraft
          </h1>
          <p className="text-xl text-muted-foreground">
            Founded in Lugano, Switzerland, with studios in Cape Town, South Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-4">
              PolyCraft was born from a vision to combine Swiss precision with South African creativity.
              Our journey began between the precision of Switzerland and the vibrant creative energy of Cape Town.
            </p>
            <p className="text-muted-foreground">
              Today, we work with premium brands worldwide, bringing this unique blend of design
              perspectives to every project we undertake.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Modern office"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">200+</h3>
            <p className="text-muted-foreground">Premium Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Design Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}