export enum ComicType {
    MANGA = 'manga',
    MANHWA = 'manhwa',
}
export enum ComicStatus {
    ONGOING = 'On Going',
    BREAK = 'Break',
    END = 'End',
}
export interface ComicInformation {
    list: {
        Id: number
        name: string
        cover_img: {
            signedUrl: string
        }[]
        genres: string
        comic_status: string
        type: ComicType
        summary: string | null
        CreateAt: string
        UpdatedAt: string
        comic_quantity: number
        is_color: string
    }[]
}
interface BasePagination {
    page: number
    pageSize: number
    totalPage: number
}
export interface ComicWithPagination {
    data: {
        id: number
        name: string
    }
    pagination: BasePagination
}
