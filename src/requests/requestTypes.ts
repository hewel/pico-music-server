export interface IArtistRaw {
    id: number
    name: string
    tns?: []
    alias?: []
}

export interface IArtist {
    id: number
    name: string
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
    id: number
    name: string
    picUrl: string
    tns?: []
    picStr?: string
    pic?: number
}

export interface ISongRaw {
    id: number
    name: string
    dt?: number
    duration?: number
    ar: IArtistRaw[]
    artists: IArtistRaw[]
    al: IAlbumRaw
    album: IAlbumRaw
    copyright?: boolean
    copyrightId?: number
    publishTime?: number
}

export interface ISong {
    id: number
    name: string
    duration?: number
    artist: IArtist[]
    album: IAlbum
    copyright?: boolean
    copyrightId?: number
    publishTime?: number
}

export interface ISongUrlRow {
    id: number
    url: string
    br: number
    size: number
    md5: string
    type: string
    level: string
}
export interface ISongUrl {
    id: number
    url: string
    bitRate: number
    fileSize: number
    md5: string
    type: string
    level: string
}

export interface ISearchFilter {
    keywords: string
    type?: string
    first: number
    offset: number
}
