import "./App.css";
import { Contacts, Footer, Header, Home, Products } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
