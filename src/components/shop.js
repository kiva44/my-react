import { useEffect, useState } from "react";
import styles from "../index.module.css";
import UpdateButton from "../components/updateButton";
import { Link } from 'react-router-dom';
import ShopCard from './ShopCard';

export default function Shop() {
  let url = "https://fakestoreapi.com/products";
  let [products, stateProducts] = useState([]);

  let [isOpen, stateIsOpen] = useState(false)

  function updCount(id, upd) {
    let newProducts = products.map((product) => {
      if (product.id === id) {
        if (product.count) {
          product.count = product.count + upd;
        } else {
          product.count = upd;
        }
      }
      return product;
    });
    // console.log(products);
    stateProducts(newProducts);
  }



  useEffect(() => {
    fetch(url)
      .then((result) => {
        return result.json();
      })
      .then((jsonResult) => {
        stateProducts(jsonResult);
      });
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <div className={styles.products}>
        {products.length &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <div className={styles.product}>
                  <img className="" src={product.image}></img><br></br>
                  {/* <div>{product.title}</div> */}
                  <Link to={`product/${product.id}`}>{product.title}</Link>
                  <br />
                  <div>

                    <UpdateButton
                      name="-"
                      onClick={() => {
                        updCount(product.id, -1);
                      }}
                    />
                    <UpdateButton
                      name="+"
                      onClick={() => {
                        updCount(product.id, 1);
                      }}
                    />
                    <div>{product.count}</div>
                  </div>

                  <button className={styles.button} onClick={() => {
                    // console.log(product);
                    stateIsOpen(true)
                    console.log(isOpen);
                  }
                  }>Подробнее</button>

                  <ShopCard key={product} props={product} visible={isOpen} />

                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
