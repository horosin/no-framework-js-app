class Other extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = 'About'
    }
}

window.customElements.define('app-other', Other)

export default '<app-other></app-other>'