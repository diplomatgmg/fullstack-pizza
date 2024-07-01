import { defineConfig, loadEnv, PluginOption } from "vite"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      visualizer({
        filename: "./stats.html",
        open: true,
      }) as PluginOption,
    ],
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
  }
})
