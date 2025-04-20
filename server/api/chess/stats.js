export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  try {
    const data = await $fetch(`https://api.chess.com/pub/player/${config.public.chessUsername}/stats`)
    return data
  } catch (error) {
    console.error('Chess API error:', error)
    return {
      error: 'Failed to fetch chess stats',
      status: error.response?.status || 500
    }
  }
})