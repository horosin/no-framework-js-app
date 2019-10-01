import Home from './views/home.component'
import Other from './views/other.component'

const routes = {
    '/': Home,
    '/other': Other
}

function init(rootEl) {
    rootEl.innerHTML = routes[window.location.pathname]

    document.querySelectorAll("[router-link]").forEach((el) => {
        el.addEventListener("click", event => {
            event.preventDefault()
            const location = el.getAttribute("href")
            rootEl.innerHTML = routes[location]
            window.history.pushState(
                {},
                location,
                window.location.origin + location
            );
        })
    })
    window.onpopstate = () => {
        rootEl.innerHTML = routes[window.location.pathname];
    }
}

export default {
    routes,
    init
}