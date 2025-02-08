import React from "react";
import { motion } from "framer-motion"; // For smooth animations
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Importing Heroicons for enhanced visuals

export type SpecItem = {
  label: string;
  value: string;
};

const specsData: SpecItem[] = [
  {
    label: "Material composition",
    value: "100% Cotton",
  },
  {
    label: "Care instructions",
    value: "Machine wash warm, tumble dry",
  },
  {
    label: "Fit type",
    value: "Classic Fit",
  },
  {
    label: "Pattern",
    value: "Solid",
  },
];

type ProductDetailsProps = {
  stock: number;
};

const ProductDetails = ({ stock }: ProductDetailsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      scale: 1.05,
      backgroundColor: "#f0f8ff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    }, // Enhanced hover effect
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {specsData.map((item, i) => (
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-100 shadow-lg rounded-lg cursor-pointer"
          key={i}
        >
          <div className="flex items-center space-x-3">
            <CheckCircleIcon className="h-6 w-6 text-indigo-500" />
            <p className="text-sm font-semibold text-gray-800">{item.label}</p>
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="text-sm text-gray-700 font-medium"
          >
            {item.value}
          </motion.span>
        </motion.div>
      ))}

      {/* Stock Information */}
      <motion.div
        variants={itemVariants}
        whileHover="hover"
        className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 via-teal-50 to-green-100 shadow-lg rounded-lg cursor-pointer border-t border-gray-200"
      >
        <div className="flex items-center space-x-3">
          <CheckCircleIcon
            className={`h-6 w-6 ${
              stock > 0 ? "text-blue-500" : "text-red-500"
            }`}
          />
          <p className="text-sm font-semibold text-gray-800">Stock</p>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-sm ${
            stock > 0 ? "text-blue-700" : "text-red-700"
          } font-medium`}
        >
          {stock > 0 ? (
            <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-700">
              {stock} available
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-red-200 text-red-700">
             Available
            </span>
          )}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetails;
