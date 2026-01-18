"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: -50, x: "-50%" }}
      className="fixed top-8 left-1/2 z-[10000] min-w-[300px] max-w-md"
    >
      <div className="bg-gray-900/95 backdrop-blur-lg border border-emerald-500/30 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/20">
        {/* Terminal Header */}
        <div className="bg-gray-800/90 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/70"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/70"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/70"></div>
            </div>
            <span className="text-gray-400 text-xs font-mono ml-2">
              {isSuccess ? "success.log" : "error.log"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={12} />
          </button>
        </div>

        {/* Toast Content */}
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div
              className={`${isSuccess ? "text-emerald-400" : "text-red-400"} mt-1`}
            >
              {isSuccess ? (
                <FaCheckCircle size={20} />
              ) : (
                <FaExclamationCircle size={20} />
              )}
            </div>
            <div className="flex-1">
              <div className="font-mono text-xs text-gray-500 mb-1">
                $ {isSuccess ? "echo 'Success'" : "echo 'Error'"}
              </div>
              <p className="text-white font-mono text-sm">{message}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <motion.div
              className={`h-1 rounded-full ${
                isSuccess ? "bg-emerald-500" : "bg-red-500"
              }`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
