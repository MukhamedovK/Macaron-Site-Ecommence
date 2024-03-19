import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import QualityGuarantees from './pages/QualityGuarantees'
import ReadySets from "./pages/ReadySets";
import Swiper from "./components/Swiper";
import DesertCatalog from "./pages/DesertCatalog";
function App() {

  return (
    <>
      <div>
        <Header />
        <Home/>
        <Routes>
          <Route path="/contacts" element={<Contact />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/guarantees" element={<QualityGuarantees />} />
          <Route path="/ReadySets" element={<ReadySets />} />
          <Route path="/legals" element={<LegalEntities />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
