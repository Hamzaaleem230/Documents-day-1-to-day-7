"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type ReceiptDetails = {
  orderId: string;
  paymentMethod: string;
  amount: string;
  date: string;
};

export default function OrderConfirmation() {
  // Hardcoded receipt details (replace with dynamic data if needed)
  const receipt: ReceiptDetails = {
    orderId: "ORD-987654",
    paymentMethod: "Visa **** 1234",
    amount: "$120.00",
    date: "2024-12-23",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-lg">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-5xl" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Order Confirmed!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed!
        </p>
        <div className="bg-gray-50 border rounded-lg p-6 text-left">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Payment Receipt
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-gray-600">
              <p className="font-medium">Order ID:</p>
              <p>{receipt.orderId}</p>
            </div>
            <div className="text-gray-600">
              <p className="font-medium">Payment Method:</p>
              <p>{receipt.paymentMethod}</p>
            </div>
            <div className="text-gray-600">
              <p className="font-medium">Amount Paid:</p>
              <p>{receipt.amount}</p>
            </div>
            <div className="text-gray-600">
              <p className="font-medium">Date:</p>
              <p>{receipt.date}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between gap-4">
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => alert("View Order Details Coming Soon!")}
          >
            View Order Details
          </button>
          <button
            className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition"
            onClick={() => alert("Return to Homepage Coming Soon!")}
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
