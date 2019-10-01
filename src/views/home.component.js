import postsAPI from '../services/api'
import Post from '../components/post.component'

class Home extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = '<h2>Home</h2>'
    }

    async connectedCallback() {
        const posts = await postsAPI.get()
        const postHtml = posts.map(post => `
            <app-post title="${post.title}" body="${post.body}"></app-post>
        `).join('\n')
        this.innerHTML += postHtml
    }
}
 
window.customElements.define('app-home', Home)

export default '<app-home></app-home>'