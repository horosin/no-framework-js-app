const template = /*html*/`
    <div class="post">
        <h2></h2>
        <p></p>
    </div>
    <style>
        .post {
            padding: 2em;
            border: 1px dotted lightgray;
            margin-top: 1em;
            background: white;
        }
    </style>
`


class Post extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = template
        this._title = this.querySelector('h2')
        this._body = this.querySelector('p')
    }

    static get observedAttributes() {
        return [
            'title',
            'body',
        ]
    }

    get title() {
        return this.getAttribute('title')
    }

    set title(val) {
        this.setAttribute('title', val)
        this.dispatchEvent(new CustomEvent('titleChanged', { detail: this.val }));
    }

    get body() {
        return this.getAttribute('body')
    }

    set body(val) {
        bodu.setAttribute('body')
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        switch (attr) {
            case 'title':
                this._title.innerText = newVal
                break
            case 'body':
                this._body.innerText = newVal
                break
        }
    }

    connectedCallback() {
    }
}

window.customElements.define('app-post', Post)

export default '<app-post></app-post>'