export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  return await $fetch(`https://api.chess.com/pub/player/${config.public.chessUsername}/stats`)
})