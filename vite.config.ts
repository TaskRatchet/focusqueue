import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    test: {
      setupFiles: "vitest.setup.ts",
      environment: "jsdom",
      clearMocks: true,
    },
    define: {
      __ENV__: JSON.stringify(env),
    },
  };
});
