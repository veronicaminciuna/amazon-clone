import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="Originals: How Non-Conformists Move the World"
            price={13.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Fl0Z+4e-S._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Twilight Blue"
            price={59.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71b9icxgIgL._AC_SX679_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Sony DSC-HX99 Compact Digital 18.2 MP Camera with 24-720 mm Zoom, 4K and Touchpad"
            price={449.95}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61SawvfVo7L._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12321357"
            title="SAMSUNG 75-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in"
            price={947.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg"
          />
          <Product
            id="49538006"
            title="Samsung Galaxy Tab S6 Lite 10.4’’ Touchscreen (2000x1200) WiFi Tablet, Octa Core Exynos 9610 Processor, 4GB RAM, 64GB Memory, 5MP Front and 8MP Rear Camera, Bluetooth, Android 10 w/S Pen & Cover"
            price={337.56}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51mYti4TE3L._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
