import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import './styles/globals.css'
import Home from './pages/Home'
import ContextProvider from './context/Context'
import About from './pages/about/About'
import Search from './pages/recipes/Search'
import RecipePage from './pages/recipes/RecipePage'
import CategoriesPage from './pages/categories/CategoriesPage'
import CategoryPage from './pages/categories/CategoryPage'

export default function AppRouter() {
  return ( 
    <BrowserRouter>
      <ContextProvider>
        <main className="body">
          <Routes>
            <Route path="/about-us" element={<About />} />
            <Route path="/recipes/search" element={<Search />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
            <Route path="/categories/all" element={<CategoriesPage />} />
            <Route path="/categories/:name" element={<CategoryPage />} />
            <Route path="*" element={<Home />} />

          </Routes>
        </main>
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  )
}
