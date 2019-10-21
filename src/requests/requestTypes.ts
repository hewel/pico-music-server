export interface IArtistRaw {
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

export interface IAlbumRaw {
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

export interface ISongRaw {
    id: number
    name: string
    dt: number
    ar: IArtistRaw[]
    al: IAlbumRaw
    copyright: boolean
    publishTime: number
}

export interface ISong {
    songId: number
    songName: string
    duration: number
    artist: IArtist[]
    album: IAlbum
    copyright: boolean
    publishTime: number
}
