
import { Route, Routes } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import QualityGuarantees from './pages/QualityGuarantees'
import SelectQuantityProduct from "./pages/SelectQuantityProduct";

function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantees" element={<QualityGuarantees />} />
          <Route path="/selectqtyproduct" element={<SelectQuantityProduct />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
