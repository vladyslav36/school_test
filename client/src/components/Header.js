import React from 'react'
import styles from '../styles/Header.module.scss'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'



export default function Header({ cart }) {
  const navigate = useNavigate()
  const totalQnt=cart.reduce((acc,item)=>acc+item.qnt,0)
  return (
    <div className={styles.container}>
      <h1 onClick={() => navigate('/')}>Food Delivery Company</h1>
      <div className={styles.cart_wrapper} onClick={() => navigate('/cart')}>
        <FaShoppingCart  />
        <p>
          {totalQnt?totalQnt:''}
        </p>
      </div>
      
    </div>
  )
}
