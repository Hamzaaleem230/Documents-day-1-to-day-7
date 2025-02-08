import { client } from "@/sanity/lib/client";
import { Product } from "@/interface";
import ProductCard from "@/components/common/ProductCard";
import * as motion from "framer-motion/client";

// Function to get random products
async function getRandomProducts() {
  const query = `*[_type == "products"] {
    _id,
    name,
    price,
    image,
    discountPercent,
    "new": new,
    colors,
    sizes
  }`;

  const products = await client.fetch(query);
  
  // Shuffle the products array
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
  
  // Return first 12 products
  return shuffledProducts.slice(0, 12);
}

export default async function BrandsPage() {
  const products = await getRandomProducts();

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        
        <div className="flex flex-col space-y-6">
          {/* Animated Heading */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="font-extrabold text-2xl md:text-[36px] text-center tracking-wide font-poppins uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              Our Brands
            </motion.h1>
            <motion.span
              className="text-sm md:text-base text-black/60 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
            >
              Showing {products.length} Random Products
            </motion.span>
          </motion.div>

          {/* Product Grid with Staggered Animation */}
          <motion.div
            className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {products.map((product: Product) => (
              <motion.div
                key={product._id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard key={product._id} id={product._id} data={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
