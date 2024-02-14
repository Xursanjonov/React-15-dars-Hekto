import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from './Layout/Main-layout'
import { mainPages } from './Router/main-pages'
import { ProductDetails } from "./Pages/Home/ProductDetails"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainPages.map((item)=>(
            <Route key={item.path} index={item.index} element={item.component} />
          ))}
          <Route path="home/:id" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
