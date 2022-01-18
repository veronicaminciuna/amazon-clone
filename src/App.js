import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51KJK8pGRhXHPvNs1LSFaefbWIrLIWnaFcMkyXpzz9dLjtLIOt1o9SvVyHBs3wIAtLWfk4HLf30soi72uEc7KR5HV00XVwxRGqb"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={[<Header />, <Home />]} />
          <Route exact path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            exact
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                ,<Payment />
              </Elements>,
            ]}
          />

          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
