import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Delivery from './pages/Delivery'
import QualityGuarantees from './pages/QualityGuarantees'
import LegalEntities from "./pages/LegalEntities";

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
          <Route path="/legals" element={<LegalEntities />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
