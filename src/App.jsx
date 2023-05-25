import "./App.css";
import { Footer, Header } from "./components";
import { Home, Products, Contacts } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// npm install axios --save

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
