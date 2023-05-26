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
          className="categories_card categories_size"
          imageUrl="https://plus.unsplash.com/premium_photo-1668780538503-142b057ab8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          imageAlt="fakestore_image"
          title="Natural Plants"
        />
        <Card
          className="categories_card categories_size"
          titleClass="title_marginB_medium"
          imageUrl="https://plus.unsplash.com/premium_photo-1668780538503-142b057ab8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          imageAlt="fakestore_image"
          title="Plant Accessories"
          description="Horem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          className="categories_card categories_size"
          imageUrl="https://plus.unsplash.com/premium_photo-1668780538503-142b057ab8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          imageAlt="fakestore_image"
          title="Artificial Plants"
        />
      </div>
      <button type="button">
        Explore
        <BsArrowRight />
      </button>
    </section>
  );
};
