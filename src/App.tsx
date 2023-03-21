import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'

import Nav from './component/Nav'
import MainSection from './page/MainSection'
import Footer from './component/Footer'
import Fashion from './page/Fashion'
import Accessory from './page/Accessory'
import Digital from './page/Digital'
import Cart from './page/Cart'
import Error from './page/Error'
import ProductView from './page/ProductView'
import SideBar from './component/SideBar'
import useCartLoad from './composable/useCartLoad'

function App() {
  const $sidebarIcon = useRef<HTMLInputElement>(null)
  const closeSidebar = () => {
    $sidebarIcon?.current?.click()
  }
  useCartLoad()

  return (
    <BrowserRouter>
      <main className="drawer">
        <input
          type="checkbox"
          id="side-menu"
          className="drawer-toggle"
          ref={$sidebarIcon}
        />
        <section className="drawer-content">
          <Nav />
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<MainSection />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductView />} />
          </Routes>
          <Footer />
        </section>
        <SideBar closeSidebar={closeSidebar} />
      </main>
    </BrowserRouter>
  )
}

export default App
