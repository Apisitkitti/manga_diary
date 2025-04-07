'use client'
import { ComicType } from '@/app/interfaces/book'
import ComicCard from '@/app/components/ComicCard'
import { Listbox, ListboxItem } from '@heroui/react'
interface Props {
    name: string
    cover_img: string
    genres: string
    comic_status: string
    type: ComicType
    summary: string | null
    createAt: string
    comic_quantity: number
    is_color: string
}
const ComicInformationComponent: React.FC<Props> = ({
    name,
    cover_img,
    genres,
    type,
    summary,
    comic_quantity,
    comic_status,
    createAt,
    is_color,
}) => {
    return (
        <div className="col-start-2 flex flex-col space-y-4">
            <p className="rounded-2xl bg-black py-1 text-center text-2xl font-bold">
                {name}
            </p>
            <div className="flex space-x-8">
                <div>
                    <ComicCard
                        type={type}
                        cover={cover_img}
                        isColor={is_color === 'color'}
                    />
                </div>
                <div className="flex flex-col space-y-8">
                    <div className="space-y-6 bg-[#162556] px-5 py-10">
                        <p>Status: {comic_status}</p>
                        <p>CreateAt: {createAt}</p>
                        <p>Genre(s): {genres}</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">Summary</p>
                        {summary}
                    </div>
                    <div>
                        <p className="text-xl font-bold">Latest Release</p>
                        <Listbox color="primary" variant="bordered">
                            <ListboxItem
                                key="new"
                                color="primary"
                                className="bg-black"
                            >
                                ตอนที่ {comic_quantity}
                            </ListboxItem>
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ComicInformationComponent
