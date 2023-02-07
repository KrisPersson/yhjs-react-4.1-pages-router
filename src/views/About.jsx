import Header from "../components/Header/Header"

import './Home.css' 

function About() {

    return (
        <section className="view view--about">
            <Header currentView={ 'about' } />
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus dolores veritatis illo deserunt, fugiat iusto eveniet quas illum suscipit magni ut porro eos debitis voluptate consequatur, doloremque, ullam perferendis.</p>
        </section>
    )
}

export default About