'use client'

import { ComicInformation, ComicType } from '@/app/interfaces/book'
import ComicCard from '@/app/components/ComicCard'
interface Props {
    comicCategorySlug: string
    bookData: ComicInformation
}

const ComicCategoryComponent: React.FC<Props> = ({
    comicCategorySlug,
    bookData,
}) => {
    return (
        <div>
            <p className="ml-4 text-3xl font-bold">
                {comicCategorySlug == ComicType.MANGA && 'Manga'}
                {comicCategorySlug == ComicType.MANHWA && 'Manhwa'}
            </p>
            <div className="flex flex-col space-y-5 space-x-10">
                <div className="flex justify-center">
                    {bookData?.list
                        .filter((comic) => comic.type === comicCategorySlug)
                        .map((bookItem) => (
                            <ComicCard
                                key={bookItem.Id}
                                name={bookItem.name}
                                type={bookItem.type}
                                cover={bookItem.cover_img[0].signedUrl}
                                isColor={bookItem.is_color === 'color'}
                                latestEp={bookItem.comic_quantity}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ComicCategoryComponent
