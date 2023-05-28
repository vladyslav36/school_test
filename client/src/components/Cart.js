import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "../styles/Cart.module.scss"
import { API_URL } from "../config"
import { FaTimes } from 'react-icons/fa'

export default function Cart({ cart,setCart }) {
  const totalAmount = cart.reduce((acc, item) => acc + parseInt(item.qnt) * parseInt(item.price), 0).toString()
  const [values, setValues] = useState({
    name: '',
    surname: '',
    phone: '',
    email:''
  })
  const handleDelete=(food)=>{
    const newCart = cart.filter(item => item.name !== food.name)
    setCart(newCart)
  }
  return (
    
    <>
      {cart.length ? (
        <>
         <div className={styles.container}>
      <div>
          <h3>Delivery details</h3>
          <div className={styles.delivery_details}>
            <div>
               <label htmlFor="name">Имя</label>
            <input type="text" id='name'/>
            </div>
            <div>
               <label htmlFor="surname">Фамилия</label>
            <input type="text" id='surname'/>
            </div>
            <div>
               <label htmlFor="phone">Телефон</label>
            <input type="text" id='phone'/>
            </div>
            <div>
               <label htmlFor="address">Адрес</label>
            <input type="text" id='address'/>
            </div>
            
           
           
          </div>
      </div>
      <div>
        <h3>Cart</h3>
        <div className={styles.cards_wrapper}>
          {cart.length
            ? cart.map((item) => (
                <div
                  className={styles.card}
                  key={item._id}
                 
                >
                  <img src={`${API_URL}${item.image}`} alt="No image" />
                <p>{item.name}</p>
                <div><span>Количество:{ item.qnt}</span> <span>Цена: {item.price}</span> </div>
                <FaTimes onClick={()=>handleDelete(item) } />
                </div>
              ))
            : null}
        </div>
      </div>
     
       
      </div>
       <div className={styles.submit_wrapper}>
        <h4>Сумма заказа: {totalAmount} грн</h4>
        <div className={styles.submit}>Подтвердить заказ</div>
      </div>
        </>
      
      ) : (
          <div className={styles.empty_cart }>
            <h2>Корзина пуста</h2>
          </div>
          
      )}
    
    </>
   
  )
}
