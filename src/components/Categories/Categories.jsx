import "./Categories.css";

import { Card, Title } from "../index";
import { BsArrowRight } from "react-icons/bs";

export const Categories = () => {
  return (
    <section className="categories_container">
      <div className="categories_title">
        <Title
          className="title_component"
          title="Categories"
          description="Find what you are looking for"
        />
      </div>
      <div className="cards_container">
        <Card
          className="categories_card"
          imageClass="large_size"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
        />
        <Card
          className="categories_card"
          imageClass="large_size"
          titleClass="title_marginB_medium"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
          description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          className="categories_card"
          imageClass="large_size"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
        />
      </div>
      <button type="button">
        Explore
        <BsArrowRight />
      </button>
    </section>
  );
};
