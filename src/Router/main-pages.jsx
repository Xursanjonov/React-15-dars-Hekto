import React from 'react'
import { Home } from '../Pages/Home/home'
import { Pages } from '../Pages/Pages/pages'
import { Products } from '../Pages/Products/products'
import { Blog } from '../Pages/Blog/blog'
import { Shop } from '../Pages/Shop/shop'
import { Contact } from '../Pages/Contact/contact'

export const mainPages = [
    {
        component: <Home />,
    },
    {
        component: <Pages />,
        path: 'pages',
    },
    {
        component: <Products />,
        path: 'products',
    },
    {
        component: <Blog />,
        path: 'blog',
    },
    {
        component: <Shop />,
        path: 'Shop',
    },
    {
        component: <Contact />,
        path: 'contact',
    }
]