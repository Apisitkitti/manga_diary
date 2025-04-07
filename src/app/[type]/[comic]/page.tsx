'use server'

import { getAllComic } from '@/app/services/comicService'
import ComicInformationComponent from './components/ComicInformationComponent'
import { redirect } from 'next/navigation'
import dayjs from 'dayjs'

interface Props {
    params: Promise<{ comic: string }>
}
const ComicInformationPage: React.FC<Props> = async ({ params }) => {
    const { comic } = await params
    const getComicData = await getAllComic()
    const getFullNameFromParam = comic.split('%20').join(' ').trim()
    const findComic = getComicData.list.find(
        (comic) => comic.name.trim() === getFullNameFromParam
    )
    const setDateTemplate = (date: string) => {
        const changedDateStringToDateObj = new Date(date)
        const setDateTemplate = dayjs(changedDateStringToDateObj)
            .add(7, 'hour')
            .format('DD/MM/YYYY')
        return setDateTemplate
    }
    if (!findComic) {
        redirect('/')
    }
    return (
        <div className="grid [grid-template-columns:1fr_5fr_1fr]">
            <ComicInformationComponent
                name={findComic.name}
                cover_img={findComic.cover_img[0].signedUrl}
                genres={findComic.genres.split(',').join(', ')}
                comic_status={findComic.comic_status}
                type={findComic.type}
                summary={findComic.summary}
                createAt={setDateTemplate(findComic.CreatedAt)}
                comic_quantity={findComic.comic_quantity}
                is_color={findComic.is_color}
            />
        </div>
    )
}
export default ComicInformationPage
