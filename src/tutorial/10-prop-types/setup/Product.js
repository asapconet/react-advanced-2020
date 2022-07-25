import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, price, name }) => {
const imageCheck = image && image.url 

  return (
    <article className="product">
      <img src={imageCheck || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 4.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   image: defaultImage,
//   price: "44.5",
// };

export default Product;
