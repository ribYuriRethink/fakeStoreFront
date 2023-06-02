import "./Products.css";

import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Card } from "../../components/index";
import { getProducts, searchProducts } from "../../services/products";
import {
  getCategories,
  getProductsByCategory,
} from "../../services/categories";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState();
  const [query, setQuery] = useState("");
  const [selectDisable, setselectDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(query)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  };

  const handleSelectSubmit = (e) => {
    if (e.target.value === "all") {
      getProducts()
        .then((respose) => {
          setProducts(respose);
        })
        .catch((error) => console.log(error));
      return;
    }
    e.preventDefault();
    getProductsByCategory(e.target.value)
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts()
      .then((respose) => {
        setProducts(respose);
      })
      .catch((error) => console.log(error));

    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="products_container">
      <div className="search_bars">
        <div className="forms_container">
          <form action="/" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Looking for a product?"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
          <form action="/" className="select_form">
            <select
              className="select_categories"
              name="select_categories"
              id="select_categories"
              defaultValue="all"
              disabled={selectDisable}
              onChange={handleSelectSubmit}
            >
              <option value="all">Select a category</option>
              {categories?.map((categorie, idx) => (
                <option key={idx} value={categorie}>
                  {categorie}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div className="product_content_container">
        <h1>Products List</h1>
        <div className="products_cards_container">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card
                key={product.id}
                className="product_card"
                titleClass="title_marginB_normal"
                imageClass="image_size_normal"
                imageUrl={product.image}
                imageAlt={product.title}
                title={product.title}
                description={`R$ ${product.price}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
