import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/gsap")) return "animation";
          if (id.includes("node_modules/lucide-react") || id.includes("node_modules/simple-icons")) return "icons";
          if (id.includes("node_modules/react") || id.includes("node_modules/react-router")) return "react-vendor";
        },
      },
    },
  },
});
