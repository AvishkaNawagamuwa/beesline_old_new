import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Quality from './pages/Quality'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import RequestExport from './pages/RequestExport'

function App() {
    const location = useLocation()

    return (
        <>
            <LoadingScreen />
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:slug" element={<ProductDetails />} />
                            <Route path="/quality" element={<Quality />} />
                            <Route path="/partners" element={<Partners />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/request-export" element={<RequestExport />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
