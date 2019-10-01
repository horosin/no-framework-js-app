const template = /*html*/`
    <div>
        <a href="/" router-link>Home</a>
        <a href="/other" router-link>Other</a>
    </div>
`

class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = template
    }
}

window.customElements.define('app-header', Header)

export default "<app-header></app-header>"