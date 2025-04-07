'use client'
import { useEffect, useState } from 'react'
import { ComicInformation } from './interfaces/book'
import { getAllComic } from './services/comicService'
import ComicCard from '@/app/components/ComicCard'
import { Spinner } from '@heroui/react'

export default function Home() {
    const [bookData, SetBookData] = useState<ComicInformation>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchComic = async () => {
            try {
                setIsLoading(true)
                const data = await getAllComic()
                SetBookData(data)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        fetchComic()
    }, [])
    return (
        <div className="flex flex-wrap justify-center">
            {isLoading ? (
                <Spinner variant="wave" />
            ) : (
                <div className="flex flex-col space-y-5">
                    <div className="flex space-x-10">
                        {bookData?.list.map((bookItem) => (
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
            )}
        </div>
    )
}
