import { Prisma,PrismaClient } from '@prisma/client'
import Songs from '../src/datas/songs.json'

const prisma = new PrismaClient();

const main = async () => {
    
    const tracks = []

    for (let index = 0; index < Songs.length; index++) {
      const element = Songs[index];
        const track = {
          title       : element.title,
          artist      : element.artist,
          album       : element.album,
          genre       : element.genre,
          src         : element.src,
          poster      : element.poster,
          duration    : element.duration,
          releaseDate : new Date(element.releaseDate)
      }

      const dbTrack = await prisma.track.create({data: track})
      tracks.push(dbTrack)
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })