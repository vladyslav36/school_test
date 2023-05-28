import React, { useState } from "react"

import styles from "../styles/Home.module.scss"
import { API_URL } from "../config"

export default function Home({ shops = [], foods = [], cart = [],setCart }) {
  const [foodsByShop, setFoodsByShop] = useState([])
  
 
   const handleShopClick = (shop) => {
     const currentFoods = foods.filter(item => item.shop === shop.name)
     setFoodsByShop(currentFoods)
  }
  const handleCardClick = (shop) => {
   
    const qntFoods = cart.filter(item => item._id === shop._id).length
    console.log(qntFoods)
    if (qntFoods) {     
      const newCart = cart.map(item => (item.name===shop.name?{...item,qnt:item.qnt+1}:item))
      setCart(newCart)    
    } else {      
      setCart([...cart,{...shop,qnt:1}])
    }
    
  }
  console.log(cart)
 
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <h3>Shops</h3>
        {shops.length ? (
          <ul>
            {shops.map((item) => (
              <li key={item._id} onClick={()=>handleShopClick(item)}>{item.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={styles.right_content}>
        <h3>Foods</h3>
        <div className={styles.cards_wrapper}>
            {
          foodsByShop.length ? (
            foodsByShop.map(item => (
              <div className={styles.card} key={item._id} onClick={()=>handleCardClick(item)}>
                <img src={`${API_URL}${item.image}`} alt="No image" />
                <p>{item.name}</p> 
                <p>Цена: {item.price }</p>
             </div>
           ))
          ):null
        }
        </div>
      
      </div>
    </div>
  )
}
