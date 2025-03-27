import { ComicType } from '@/app/interfaces/book'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    name: string
    type: ComicType
    cover: string
    isColor: boolean
    latestEp: number
}
const ComicCard: React.FC<Props> = ({
    name,
    type,
    cover = '/assets/no_image.jpg',
    isColor = false,
    latestEp,
}) => {
    const handleComicTypeFlagDisplay = () => {
        switch (type) {
            case ComicType.MANGA:
                return '/assets/japan_flag.png'
            case ComicType.MANHWA:
                return '/assets/japan_flag.png'
            default:
                return '/assets/no_image.jpg'
        }
    }
    console.log(handleComicTypeFlagDisplay())
    return (
        <Link href="#" className="flex cursor-pointer flex-col space-y-1">
            <div className="relative w-max">
                <Image
                    src={handleComicTypeFlagDisplay()}
                    alt="flag img"
                    className="absolute top-0 right-0 rounded"
                    width={50}
                    height={50}
                />
                <Image
                    src={cover}
                    alt="cover comic img"
                    width={200}
                    height={200}
                    className="rounded-2xl"
                />
                {isColor && (
                    <p className="absolute bottom-0 w-max rounded bg-[#68206C] px-2 text-left font-bold text-white">
                        COLOR
                    </p>
                )}
            </div>
            <div className="flex flex-col space-y-1">
                <p className="w-[215px] font-bold text-white">{name}</p>
                <p className="w-max rounded-2xl bg-amber-400 px-2 py-1 font-bold">
                    ตอนที่ {latestEp}
                </p>
            </div>
        </Link>
    )
}
export default ComicCard
