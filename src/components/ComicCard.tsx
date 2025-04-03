import { ComicType } from '@/app/interfaces/book'
import { Chip } from '@heroui/react'
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
                return '/assets/korea_flag.png'
            default:
                return '/assets/no_image.jpg'
        }
    }
    return (
        <div className="flex cursor-pointer flex-col space-y-1">
            <Link href={`${type}/${name}`} className="relative w-max">
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
                    width={150}
                    height={150}
                    className="rounded-2xl"
                />
                {isColor && (
                    <p className="absolute bottom-0 w-max rounded bg-[#68206C] px-2 text-left font-bold text-white">
                        COLOR
                    </p>
                )}
            </Link>
            <div className="flex flex-col space-y-1">
                <Link
                    href={`${type}/${name}`}
                    className="w-1/2 font-bold text-white"
                >
                    {name}
                </Link>
                <Link href={`${type}/${name}/ตอนที่${latestEp}`}>
                    <Chip className="font-bold" color="warning">
                        ตอนที่ {latestEp}
                    </Chip>
                </Link>
            </div>
        </div>
    )
}
export default ComicCard
