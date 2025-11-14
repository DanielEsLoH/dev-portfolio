import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import { CheckCircle, X, Sparkles } from "lucide-react";

const SuccesModel = ({ showSuccess, setShowSuccess, isDarkMode }) => {
  const closeButtonRef = useRef(null);

  // Focus close button when modal opens
  useEffect(() => {
    if (showSuccess && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [showSuccess]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && showSuccess) {
        setShowSuccess(false);
      }
    };

    if (showSuccess) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showSuccess, setShowSuccess]);

  return (
    <AnimatePresence>
      {showSuccess && (
        <FocusTrap
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            aria-describedby="success-modal-description"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative p-8 rounded-2xl border max-w-sm w-full text-center ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                onClick={() => setShowSuccess(false)}
                className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
                aria-label="Close success message"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle size={32} className="text-white" />
              </motion.div>

              <motion.h3
                id="success-modal-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-medium mb-2"
              >
                Message Sent!
              </motion.h3>

              <motion.p
                id="success-modal-description"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-6`}
              >
                Thank you reaching out! I'll get back to you within 24 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <Sparkles
                  className="text-yellow-500"
                  size={24}
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
};

export default SuccesModel;
