import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    publicDir: "public", // Corrigido para apontar para a pasta correta
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          // Removido o input da imagem, não é necessário para imagens estáticas
        },
      },
    },
  };
});
