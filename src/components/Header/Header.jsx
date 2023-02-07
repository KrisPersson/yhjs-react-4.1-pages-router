import "./Header.css"

function Header({ currentView }) {

    const views = ['home', 'about', 'products']

    const links = views.map((view, i) => {
        return <a href={ view === 'home' ? '/' : view } key={i} className={ view === currentView ? 'nav__link link--current' : 'nav__link'}>{view}</a>
    })

    return (
        <header>
            <h1>The Online Store</h1>
            <nav> 
                { links }
            </nav>
        </header>
    )
}

export default Header