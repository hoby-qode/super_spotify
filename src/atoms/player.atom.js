import { atom, selector } from "recoil";
import SONGS from '@/src/datas/songs.json'

export const playState = atom({
  key: "playState",
  default: false,
});

const sortedSongsData = SONGS.sort((a, b) => a.title > b.title ? 1 : -1)
export const currentlyPlayingTrackState = atom({
  key: "currentlyPlayingTrack",
  default: SONGS[0],
});
export const allTracksState = atom({
  key: "allTracksState",
  default: [],
});

export const searchState = atom({
  key: "searchState",
  default: ""
})

export const artistsState = atom({
  key: 'artistsState',
  // default: selector({
  //   key: 'artists/default',
  //   get: ({get}) => {
  //     const allSongs = get(allSongsState)
  //     const artists = allSongs.reduce((acc, song) => {
  //       const slugArtist = song.artist
  //       .trim()
  //       .normalize('NFD')
  //       .replace(/[\u0300-\u036f]/g, '')
  //       .toLowerCase()
  //       .replace(/\s+/g, '-')
  //       .replace(/[^\w-]+/g, '')
  //       if (!acc[slugArtist]) {
  //         acc[slugArtist] = []
  //       }
  //       acc[slugArtist].push(song)
  //       return acc
  //     }, {})
  //     return artists
  //   }
  // })
  default: []
})

export const searchResultsState = atom({
  key: 'searchResultsState',
  default: selector({
    key: 'searchResults/default',
    get: ({get}) => {
      const search = get(searchState)
      const allSongs = get(allSongsState)
      function searchBy(arg) {
        return arg.toLowerCase().includes(search.toLowerCase())
      }
      return search.length > 2 ? allSongs.filter((song) => searchBy(song.title) || searchBy(song.album) || searchBy(song.artist) || searchBy(song.genre) ) : []
    }
  })
})

export const themeState = atom ({
  key: 'themeState',
  default: "dark-theme"
})