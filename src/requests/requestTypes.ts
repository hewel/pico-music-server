export interface IArtistGet {
    id: number
    name: string
    tns?: []
    alias?: []
}

export interface IArtist {
    artistId: number
    artistName: string
    tns?: []
    alias?: []
}

export interface IAlbumGet {
    id: number
    name: string
    picUrl: string
    tns?: []
    pic_str: string
    pic: number
}

export interface IAlbum {
    albumId: number
    albumName: string
    albumPicUrl: string
    tns?: []
    pic_str?: string
    pic?: number
}

export interface ISongItemGet {
    id: number
    name: string
    dt: number
    ar: IArtistGet[]
    al: IAlbumGet
    copyright: boolean
    publishTime: number
}

export interface ISongItem {
    songId: number
    songName: string
    duration: number
    artist: IArtist[]
    album: IAlbum
    copyright: boolean
    publishTime: number
}
