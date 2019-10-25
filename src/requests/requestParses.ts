import {
    ISongRaw,
    ISong,
    IAlbumRaw,
    IAlbum,
    ISongUrlRow,
    ISongUrl,
} from './requestTypes'

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

export function parseSongUrl(row: ISongUrlRow): ISongUrl {
    const { id, url, br: bitRate, size: fileSize, md5, type, level } = row
    return {
        id,
        url,
        bitRate,
        fileSize,
        md5,
        type,
        level,
    }
}
