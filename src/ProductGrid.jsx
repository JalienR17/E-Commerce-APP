import React from "react";
import ProductCard from "./ProductCard";
import "/styles/ProductGrid.css";

// products array – adjust or expand as needed.
export const products = [
  {
    id: "1",
    title: "Samsung Galaxy Tab 8.9",
    price: "300.00",
    image: "/images/product1.png",
    modelPath: "/images/SamsungTab.glb",
    description: `TECHNOLOGY :

             NETWORK :   GSM / HSPA
              LAUNCH :	Announced	2011, March. Released 2011, October
              STATUS :	Discontinued
                BODY :	Dimensions	230.9 x 157.8 x 8.6 mm (9.09 x 6.21 x 0.34 in)
              WEIGHT :	453 g (1.00 lb)
                 SIM :	Mini-SIM
             DISPLAY :	Type	PLS LCD
                SIZE :	8.9 inches, 229.7 cm2 (~63.0% screen-to-body ratio)
          RESOLUTION :	800 x 1280 pixels, 16:10 ratio (~170 ppi density)
            PLATFORM :	OS	Android 3.0 (Honeycomb), TouchWiz UX UI
             CHIPSET :	Nvidia Tegra 2 T20
                 CPU : 	Dual-core 1.0 GHz Cortex-A9
                 GPU :	ULP GeForce
              MEMORY :	Card slot	No
            INTERNAL :	16GB 1GB RAM, 32GB 1GB RAM, 64GB 1GB RAM
         MAIN CAMERA : 	Single	3.15 MP, AF
            FEATURES :	LED flash
               VIDEO :	720p
       SELFIE CAMERA :	Single	2 MP
               VIDEO :
               SOUND :	Loudspeaker	Yes, with stereo speakers
          3.5mm JACK :	Yes
               COMMS :	WLAN	Wi-Fi 802.11 a/b/g/n, dual-band, hotspot
           BLUETOOTH :	3.0, A2DP
         POSITIONING :	GPS, A-GPS
               RADIO :	No
                 USB :	2.0
            FEATURES :	Sensors	Accelerometer, gyro, compass
             BROWSER :	HTML, Adobe Flash
 	          TV-OUT :
             BATTERY :	Type	Non-removable Li-Po 6000 mAh battery
                MISC :	Colors	Black
              MODELS :	GT-P7300
              SAR EU :	1.15 W/kg (head)
               PRICE :	About 290 EUR `
  },
  {
      id: "2",
      title: "Fiorile Bar Plisse",
      price: "220.00",
      image: "/images/product2.png",
      modelPath: "/images/Fiorile_Base_Plisset.glb",
      description: "Fiorile Bar Plissé BT is a swivel, height-adjustable stool with a round base and steel frame in various fasem finishes. The shell is made of lightly padded Hirek® and upholstered with fasem premium pleated leather on the inside and contrasting fasem full-grain leather on the outside. It is equipped with a footrest and height adjustable gas lift. The height adjustment lever is covered with fasem full-grain leather. The design and the skilful craftsmanship express elegance."
  },
  {
      id: "3",
      title: "Golden Kitchen Tools Set",
      price: "75.00",
      image: "/images/product3.png",
      modelPath: "/images/Kitchen_Tools.glb",
      description: ` BEAUTIFULLY DESIGNED AND CONVENIENT STARTER SET TO COMPLEMENT GOLDEN KITCHEN ACCESSORIES – Eliminate multiple purchases and mismatched utensils! Outfit your kitchen with this complete and cohesive 5-piece set of stylish gold kitchen utensils. Includes black and gold skimmer, gold ladle, gold spatula turner, gold whisk, black spatula, and matching gold utensil holder to keep things organized.
       HIGH QUALITY MEETS HIGH STYLE– Sturdy nylon is food safe, highly durable and resistant to cold and hot temperatures, making this set of gold serving utensils perfectly suited for all your kitchen needs, from cooking and baking to preparing and serving food, this black and gold cooking utensils set with holder and spoons are worth taking a second look!
       NON-STICK AND EASY TO CLEAN MAKES COOKING A BREEZE – Gold plated stainless steel handles are perfectly weighted and dishwasher-safe, durable non scratch gold and matte black kitchen utensils made of non-stick and stain-resistant nylon helps minimize messes and protects pots and pans, making this gold and black kitchen utensils set perfectly suited for all your kitchen needs.`
  },
  {
      id: "4",
      title: "Nature's Essence",
      price: "45.00",
      image: "/images/product4.png",
      modelPath: "/images/Skincare_Bottle_Blender.glb",
      description:`Nature’s Essence—Where Innovation Meets Purity
      Discover the perfect balance of cutting-edge science and nature’s finest ingredients. Nature’s Essence is more than skincare—it’s a revolution in hydration, renewal, and radiance. Infused with powerful botanical extracts and advanced formulations, each product is designed to enhance your skin’s vitality while delivering a luxurious, weightless feel.
      Precision-engineered for optimal absorption and effectiveness, our formulas work in harmony with your skin’s natural rhythm, ensuring deep nourishment and long-lasting results. Whether it’s revitalizing serums, ultra-hydrating creams, or gentle cleansers, Nature’s Essence transforms daily skincare into a ritual of elegance and innovation.
      Elevate your glow with the future of skincare.`
  },
  {
      id: "5",
      title: "Chaise Lounge",
      price: "1700",
      image: "/images/product5.png",
      modelPath: "/images/Rio.glb",
      description:`A striking sculptural masterpiece, the Rio rocking chaise lounge—originally designed in 1978 and reimagined in this contemporary edition—embodies elegance and innovation. Its gracefully curved base, composed of three elements, features supple ribbons of molded darkened ash laminate, creating a fluid, organic silhouette. The plush cushions, expertly secured by refined straps along the seat and backrest, offer both form and function, while the mobile headrest ensures optimal comfort. Finished in sumptuous rust velvet leather upholstery, this exquisite piece harmonizes artistry and ergonomic design in a timeless expression of modern sophistication.`
  }
];

const ProductGrid = ({ onCardClick, addToCart }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCardClick={onCardClick}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;