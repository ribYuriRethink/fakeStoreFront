import "./ProductDetails.css";

import { Card } from "../../components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { getProductById } from "../../services/products";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="product_details_container">
      {product && (
        <>
          <h1>{product.title}</h1>

          <div className="details_container">
            <Card
              className="product_card"
              titleClass="title_marginB_normal"
              imageClass="image_size_normal"
              imageUrl={product.image}
              imageAlt={product.title}
            />
            <div className="details_content">
              <div className="details_header">
                <p>Marca: {product.category} </p>
                {/* <p>{product.category}</p> */}
                <div className="rating">
                  <div className="stars_container">
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStarFill className="star" />
                    <BsStar className="star" />
                  </div>
                  <p>{product.rating.count} avaliações de clientes</p>
                </div>
              </div>
              <div className="descriptions">
                <p className="price">
                  R$
                  <span className="price_span"> {product.price}</span>
                </p>
                <dl>
                  <dt>Descrição do produto</dt>
                  <dd>{product.description}</dd>
                </dl>
              </div>
              <div className="details">
                <table>
                  <tr>
                    <th>Produto</th>
                    <td>{product.title}</td>
                  </tr>
                  <tr>
                    <th>Categoria</th>
                    <td>{product.category}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
