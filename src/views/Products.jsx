import Header from "../components/Header/Header"

import './Products.css'

function Products() {

    const products = ['Nike Shoes', 'FIFA 23 XBOX One', 'iPhone 19', 'Digital Drumset']

    const showProducts = products.map((product, i) => {
        return (
            <article key={i} className="product">
                <h3>{ product }</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Add to cart</button>
            </article>
        )
    })

    return (

        <section className="view view--products">
            <Header currentView={'products'} />
            <h2>Products</h2>
            <section className="product-container">
                { showProducts }
            </section>
        </section>
    )
}

export default Products