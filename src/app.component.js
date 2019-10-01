import router from './router'

import Header from './components/header.component'

const template = /*html*/`
    ${ Header }
    <h1>Application</h1>
    <div id="content"></div>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500&display=swap');
        body {
            font-family: "Raleway";
            font-weight: 300;
        }
        h1, h2, h3, h4 {
            font-weight: 300;
        }
    </style>
`

class App extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = template
    }

    attributeChangedCallback(attr, oldVal, newVal) {}

    connectedCallback() {
        this.appRoot = this.querySelector("#content")
        router.init(this.appRoot)
    }
}

window.customElements.define('app-main', App)

export default "<app-main></app-main>"