import "./Showcase.css";

import { Title } from "../index";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../index";

export const Showcase = () => {
  return (
    <section className="container_show">
      <div className="description_container">
        <Title
          className="showcase_title"
          title="Best Selling Plants"
          description="Easiest way to healthy life by buying your favorite plants "
        />
        <button type="button" className="showMore_button">
          See more
          <BsArrowRight />
        </button>
      </div>

      <div className="card_container">
        <Card
          className="showcase_card"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
          description="R$ 9999"
        />
        <Card
          className="showcase_card"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
          description="R$ 9999"
        />
        <Card
          className="showcase_card"
          imageUrl="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          imageAlt="fakestore_image"
          title="product"
          description="R$ 9999"
        />
      </div>
    </section>
  );
};
