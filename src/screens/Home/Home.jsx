import "./Home.css";

import { Showcase, About, Categories } from "../../components";

export const Home = () => {
  return (
    <div className="home_container">
      <Showcase />
      <About />
      <Categories />
      {/* <section className="best_selling">
        <h2>Best Selling Plants</h2>
        <p>Easiest way to healthy life by buying your favorite plants </p>
        <button>See more</button>
      </section>
      <section className="about_us">
        <h2>About us</h2>
        <p>Order now and appreciate the beauty of nature</p>
      </section>
      <section className="categories">
        <h2>Categories</h2>
        <p>Find what you are looking for</p>
      </section> */}
    </div>
  );
};
