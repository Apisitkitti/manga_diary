'use server'
import axios from 'axios'
import { ComicInformation } from '../interfaces/book'
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
        // console.log(response.data)
        return response.data as ComicInformation // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error // Rethrow the error for further handling
    }
}

export const getComicEp = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST}${process.env.NEXT_PUBLIC_COMIC_EP_TABLE}/records?_expand=comic_img`,
            {
                headers: {
                    'xc-token': `${process.env.API_TOKEN}`,
                },
            }
        )
        console.log(response.data)
        return response.data as ComicInformation // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error // Rethrow the error for further handling
    }
}
