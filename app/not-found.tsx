"use client";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "5rem", color: "#333" }}
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontSize: "1.5rem",
          color: "#777",
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
      >
        Sorry, the page you are looking for does not exist.
      </motion.p>
    </div>
  );
};

export default NotFound;
