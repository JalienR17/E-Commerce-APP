import React from "react";
import { Link } from "react-router-dom";
import "/styles/ProductCard.css";

const ProductCard = ({ product, onCardClick, addToCart }) => {
  return (
    <Link
      to={`/viewer/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => onCardClick && onCardClick(product)}
    >
      <div className="product-card">

        <div className="product-card-header">
          <h3>{product.title}</h3>
        </div>

        {/* Flip Card Container */}
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front: Image of the product */}
              <div className="flip-card-front">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              {/* Back: Description on hover */}
              <div className="flip-card-back">
                <p>{product.description || "No description available."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer: Price and Add to Cart */}
        <div className="product-card-footer">
          <span className="price">${product.price}</span>
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevents the Link navigation when clicking the button
              addToCart && addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;