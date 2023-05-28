import styles from "./styles/App.module.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Cart from "./components/Cart"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import { API_URL } from "./config/index.js"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [foods, setFoods] = useState([])
  const [shops, setShops] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      const res = await fetch(`${API_URL}/api/foods`)
      const { foods } = await res.json()
      setFoods(foods)
    }
    getFoods()
  }, [])
  useEffect(() => {
    const getShops = async () => {
      const res = await fetch(`${API_URL}/api/shops`)
      const { shops } = await res.json()
      setShops(shops)
    }
    getShops()
  }, [])

  return (
    <>
      <Router>
        <div>
          <Header cart={cart} />

          <div className={styles.main}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <Home
                    shops={shops}
                    foods={foods}
                    cart={cart}
                    setCart={setCart}
                  />
                }
              />
              <Route
                path="/cart"
                element={<Cart cart={cart} setCart={setCart} />}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
