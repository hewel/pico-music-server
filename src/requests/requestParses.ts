import { ISongRaw, ISong, IAlbumRaw, IAlbum } from './requestTypes'

export function parseAlbum(AlbumRow: IAlbumRaw): IAlbum {
    const { id, name, picUrl, pic, pic_str: picStr, tns } = AlbumRow

    return {
        id,
        name,
        picUrl,
        pic,
        picStr,
        tns,
    }
}

export function parseSong(songRow: ISongRaw): ISong {
    const {
        id,
        name,
        dt: duration,
        ar: artist,
        al,
        copyright,
        publishTime,
    } = songRow
    const album = parseAlbum(al)

    return {
        id,
        name,
        duration,
        artist,
        album,
        copyright,
        publishTime,
    }
}
