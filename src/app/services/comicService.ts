import axios from 'axios'

export const getAllComic = async () => {
    try {
        const response = await axios.get(
            `${process.env.HOST}/${process.env.COMIC_TABLE}/record`,
            {
                headers: {
                    Authorization: `${process.env.TOKEN_CATEGORY}${process.env.API_TOKEN}`,
                },
            }
        )
        return response.data // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error // Rethrow the error for further handling
    }
}
