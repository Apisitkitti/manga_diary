'use client'
import Image from 'next/image'
interface Props {
    comicName: string
    comicEp: number
    epImages: string[]
    key: number
}

const ComicReaderComponent: React.FC<Props> = ({
    comicName,
    comicEp,
    epImages,
    key,
}) => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-2 col-start-2 flex flex-col">
                <p>
                    {comicName} - ตอนที่่ {comicEp}
                </p>
                <div>
                    {epImages.map((epImg) => (
                        <Image
                            src={epImg}
                            width={50}
                            key={key}
                            alt="comicImg"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ComicReaderComponent
