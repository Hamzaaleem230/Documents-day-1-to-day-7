import { client } from "@/sanity/lib/client";
import { Product } from "@/interface";
import ProductCard from "@/components/common/ProductCard";
import * as motion from "framer-motion/client";

async function getNewArrivals() {
  const query = `*[_type == "products"] | order(_createdAt desc)[0...12] {
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
  return products;
}

export default async function NewArrivalsPage() {
  const products = await getNewArrivals();

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />

        <div className="flex flex-col w-full space-y-5">
          {/* Animated Heading with Centered Style */}
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="font-poppins font-extrabold text-4xl md:text-[56px] text-center tracking-wider uppercase relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-black font-poppins font-extrabold">
                New Arrivals
              </span>
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
              Showing {products.length} Latest Products
            </motion.span>
          </motion.div>

          {/* Product Grid with Staggered Animation */}
          <motion.div
            className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
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
