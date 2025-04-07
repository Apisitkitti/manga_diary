'use server'

import { getAllComic } from '../services/comicService'
import ComicCategoryComponent from './components/ComicCategory'

interface Props {
    params: Promise<{ type: string }>
}

const ComicCategoryPage: React.FC<Props> = async ({ params }) => {
    const { type } = await params
    const bookData = await getAllComic()
    return (
        <ComicCategoryComponent comicCategorySlug={type} bookData={bookData} />
    )
}

export default ComicCategoryPage
