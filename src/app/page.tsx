'use client'
import { useEffect, useState } from 'react'
import { ComicInformation } from './interfaces/book'
import { getAllComic } from './services/comicService'
import ComicCard from '@/components/ComicCard'

export default function Home() {
    const [bookData, SetBookData] = useState<ComicInformation>()
    useEffect(() => {
        const fetchComic = async () => {
            try {
                const data = await getAllComic()
                SetBookData(data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchComic()
    }, [])
    if (!bookData) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {bookData.list.map((bookItem) => (
                <ComicCard
                    key={bookItem.Id}
                    name={bookItem.name}
                    type={bookItem.type}
                    cover={bookItem.cover_img[0].signedUrl}
                    isColor={bookItem.color === 'color'}
                    latestEp={bookItem.comic_quantity}
                />
            ))}
        </div>
    )
}
