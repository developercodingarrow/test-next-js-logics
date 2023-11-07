import React from "react";
import styles from "./css/homepageProductCarsole.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../public/img/Godrej 101.jpg";
import Image from "next/image";

const productData = [
  {
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    image: "product1.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image: "product2.jpg",
  },
  // Add more product data as needed
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function HomePageProductCarsole() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <Carousel responsive={responsive}>
          {productData.map((product, i) => {
            return (
              <div className={styles.product_Card} key={i}>
                <Image src={img} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
