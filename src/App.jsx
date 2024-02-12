import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from './Layout/Main-layout'
import { mainPages } from './Router/main-pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainPages.map((item)=>(
            <Route key={item.path} index={item.index} element={item.component} />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App
