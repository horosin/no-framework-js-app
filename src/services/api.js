const baseUrl = 'https://jsonplaceholder.typicode.com/'

export default {
    async get() {
        const response = await fetch(`${baseUrl}posts`)
        const posts = await response.json()
        return posts
    }
}