import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
    <Navbar/>
         <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
