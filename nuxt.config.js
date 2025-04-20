// Sebastian Pienaar u24778232
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      chessUsername: process.env.PUBLIC_CHESS_USERNAME
    }
  },
  compatibilityDate: "2025-04-19",
  css: [
    
    '~/assets/css/base.css',
    '~/assets/css/layout.css',
    '~/assets/css/components.css'
  ],
})