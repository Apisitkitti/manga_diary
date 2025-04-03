'use server'

import { getAllComic } from '../services/comicService'
import ComicCategory from './components/ComicCategory'

interface Props {
    params: Promise<{ type: string }>
}

const comicCategory: React.FC<Props> = async ({ params }) => {
    const { type } = await params
    const bookData = await getAllComic()
    return <ComicCategory comicCategorySlug={type} bookData={bookData} />
}

export default comicCategory
