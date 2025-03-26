import { ComicType } from '@/app/interfaces/book'
import Image from 'next/image'
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
        <div>
            <div className="relative w-max">
                <Image
                    src={handleComicTypeFlagDisplay()}
                    alt="flag img"
                    className="absolute top-0 right-0"
                    width={50}
                    height={50}
                />
                <Image
                    src={cover}
                    alt="cover comic img"
                    width={200}
                    height={200}
                />
                {isColor && <p className="text-left">COLOR</p>}
            </div>
            <div>
                <p>{name}</p>
                <p className="w-max rounded-2xl bg-amber-400 px-2 py-1">
                    ตอนที่ {latestEp}
                </p>
            </div>
        </div>
    )
}
export default ComicCard
