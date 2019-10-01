import Post from '../components/post.component'

const template = /*html*/`
    <h2>Other</h2>
    <input type="text" />
    <app-post></app-post>
`


class Other extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = template
        this._post = this.querySelector('app-post')
    }

    connectedCallback() {
        this.querySelector('input').oninput = ev => this._post.title = ev.target.value
    }
}

window.customElements.define('app-other', Other)

export default '<app-other></app-other>'