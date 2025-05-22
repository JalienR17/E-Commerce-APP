import React from "react";
import { useParams } from "react-router-dom";
import ThreeDViewer from "./ThreeDViewer.jsx";
import { products } from "./ProductGrid.jsx";
import "/styles/ThreeDViewer.css"

const ViewerPage = () => {
  const { productId } = useParams();

  // Find the product in the products array by matching the id.
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        Product not found. Please select a product from the grid.
      </div>
    );
  }

  return (
    <div className="viewer-page" style={{ padding: "1rem" }}>
      <div>
          <b>3D Controls</b>
          <p>Right Click: Grab </p>
          <p>Left Click: Spin </p>
          <p>Scroll Wheel: Zoom  </p>
      </div>
      {/* 3D Viewer Section */}
      <div
        className="viewer-container"
        style={{ width: "100%", height: "31.0rem", marginBottom: "2rem" }}
      >
        <ThreeDViewer modelPath={product.modelPath} />
        <div id="loading-screen">
        <div id="progress-bar"></div>
        <p id="loading-text">0%</p>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-description" style={{ textAlign: "center" }}>
        <h2>{product.title}</h2>
        <p>{product.description || "This is an amazing product!"}</p>
        <div className="price-addtocart" style={{ marginTop: "1rem" }}>
          <span
            className="price"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            ${product.price}
          </span>
          <button style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewerPage;