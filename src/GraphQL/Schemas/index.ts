import { commonTypes } from './commonTypes'
import { typeSongDefs } from './typeSongDefs'
import { typeAlbumDefs } from './typeAlbumDefs'
import { typeArtistDefs } from './typeArtistDefs'
import { typeSongListDefs } from './typeSongListDefs'
import { typeQueryDefs } from './typeQuery'

export const schemas = [
    commonTypes,
    typeArtistDefs,
    typeAlbumDefs,
    typeSongDefs,
    typeSongListDefs,
    typeQueryDefs,
]
