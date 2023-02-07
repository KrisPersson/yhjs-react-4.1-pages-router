import { createBrowserRouter } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import Error from './views/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/products',
        element: <Products />
    }
])

export default router 