import { React } from 'react'
import Product from "./Product";
import "../styles/Home.scss"

export default function Home() {
    return (
        <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/A74/20thapril/GW/V348719848_IN_WLD_OPPO_A74_TallHero_1500x600._CB655112762_.jpg"
          alt=""
        />

        <div className="homeRow">
          <Product
            id="12321341"
            title="New Apple iPhone 12 Pro Max (512GB) - Graphite"
            price={(1, 52, 900.0)}
            rating={5}
            image="https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Space Grey (Latest Model)"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
          />
        </div>

        <div className="homeRow">
          <Product
            id="4903850"
            title="PS5 Marvel's Spiderman Miles morales Ultimate Edition"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81tH0uekxiL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="Lenovo Legion 7 10th Gen Intel Core i7 15.6 inch Full HD Gaming Laptop"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61VyUXLL+8L._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71zlbKfhFsL._AC_UY218_.jpg"
          />
        </div>

        <div className="homeRow">
          <Product
            id="90829332"
            title="GIGABYTE AORUS CV27F 27 165Hz 1080P 1500R FreeSync GamingMonitor, ExclusiveBuilt-inANC"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71rWlQeqAfL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
    )
}