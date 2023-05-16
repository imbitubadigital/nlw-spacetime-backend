import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = fastify()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({ port: 3333 })
  .then(() => console.log('HTTP server running on http://localhost:3333'))
