import "./Products.css";

import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Card } from "../../components/index";
import { getProducts } from "../../services/products";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respose) => {
        console.log(respose);
        setProducts(respose);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="products_container">
      <div className="search_bars">
        <div className="forms_container">
          <form action="/">
            <input type="text" value="Looking for a product?" />
            <button type="button">
              <BsSearch />
            </button>
          </form>
          <form action="/" className="select_form">
            <select name="" id="">
              <option value="select_category">Select a category</option>
              <option value="jewelery">Jewelery</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </form>
        </div>
      </div>
      <div className="product_content_container">
        <h1>Categories</h1>
        <div className="products_cards_container">
          {products.map((product) => (
            <Card
              className="product_card"
              titleClass="title_marginB_normal"
              imageClass="image_size_normal"
              imageUrl={product.image}
              imageAlt={product.title}
              title={product.title}
              description={`R$ ${product.price}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
