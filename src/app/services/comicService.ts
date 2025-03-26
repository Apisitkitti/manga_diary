'use server'
import axios from 'axios'
export const getAllComic = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_COMIC_TABLE}/records`,
            {
                headers: {
                    'xc-token': `${process.env.API_TOKEN}`,
                },
            }
        )
        console.log(response.data.list[0].cover_img)
        return response.data // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error // Rethrow the error for further handling
    }
}
