import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5177, // You can set a default port here
    open: true, // Optional: Automatically open the browser
  },
  plugins: [react()]
})
