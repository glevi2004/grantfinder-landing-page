"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function GrantWareLogo({ className }: { className?: string }) {
  const [isClient, setIsClient] = useState(false);
  const text = "GrantWare";
  const aiText = "AI";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <span className="font-sans text-xl font-bold">
        GrantWare <span className="text-primary">AI</span>
      </span>
    );
  }

  return (
    <div className={className}>
      <motion.span
        className="font-sans text-xl font-bold inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}{" "}
        <motion.span
          className="text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: text.length * 0.05 + 0.1,
            ease: "easeOut",
          }}
        >
          {aiText}
        </motion.span>
      </motion.span>
    </div>
  );
}

