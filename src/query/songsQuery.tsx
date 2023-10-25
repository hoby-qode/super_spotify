import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const getSongs = () => prisma.track.findMany()
export const getSongsByArtist = (artist: string) =>
  prisma.track.findMany({
    where: {
      artist,
    },
  })
export type SongsHome = Prisma.PromiseReturnType<typeof getSongs>[number]
