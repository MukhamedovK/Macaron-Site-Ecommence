import { Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import QualityGuarantees from './pages/QualityGuarantees'
import ReadySets from "./pages/ReadySets";
import LegalEntities from "./pages/LegalEntities";
import SelectQuantityProduct from "./pages/SelectQuantityProduct";

function App() {

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantees" element={<QualityGuarantees />} />
          <Route path="/ReadySets" element={<ReadySets />} />
          <Route path="/legals" element={<LegalEntities />} />
          <Route path="/selectqtyproduct" element={<SelectQuantityProduct />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
