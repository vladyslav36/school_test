import React, { useState } from "react"

import styles from "../styles/Cart.module.scss"
import { API_URL } from "../config"
import { FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Cart({ cart, setCart }) {
  const totalAmount = cart
    .reduce((acc, item) => acc + parseInt(item.qnt) * parseInt(item.price), 0)
    .toString()
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  })
  const handleDelete = (food) => {
    const newCart = cart.filter((item) => item.name !== food.name)
    setCart(newCart)
  }

  const handleSubmit = () => {
    setCart([])
    toast.success("Заказ успешно отправлен")
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const decQnt = (food) => {

    const newCart = cart.map((item) => {
      
     
      if (item.name === food.name) {
        if (item.qnt === 0) {
          return item
        } else {
          return { ...item, qnt: item.qnt - 1 }
        }
      } else {
        return item
      }
    })
    setCart(newCart)
  }

  const incQnt = (food) => {
    const newCart = cart.map((item) => {
      if (item.name === food.name) {
        return { ...item, qnt: item.qnt + 1 }
      } else {
        return item
      }
    })
    setCart(newCart)
  }

  return (
    <>
      <ToastContainer />
      {cart.length ? (
        <>
          <div className={styles.container}>
            <div>
              <h3>Delivery details</h3>
              <div className={styles.delivery_details}>
                <div>
                  <label htmlFor="name">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="surname">Фамилия</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Телефон</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="address">Адрес</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Cart</h3>
              <div className={styles.cards_wrapper}>
                {cart.length
                  ? cart.map((item) => (
                      <div className={styles.card} key={item._id}>
                        <img src={`${API_URL}${item.image}`} alt="Noimage" />
                        <p>{item.name}</p>
                        <div>
                          <div className={styles.left_footer_card}>
                            Количество:{item.qnt}
                            <span
                              title="Уменьшить"
                              onClick={(e) => decQnt(item)}
                            >
                              <FaCaretDown />
                            </span>
                            <span title="Увеличить">
                              <FaCaretUp onClick={(e) => incQnt(item)} />
                            </span>
                          </div>
                          <div>Цена: {item.price}</div>{" "}
                        </div>
                        <FaTimes
                          onClick={() => handleDelete(item)}
                          className={styles.delete_btn}
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className={styles.submit_wrapper}>
            <h4>Сумма заказа: {totalAmount} грн</h4>
            <div className={styles.submit} onClick={handleSubmit}>
              Подтвердить заказ
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty_cart}>
          <h2>Корзина пуста</h2>
        </div>
      )}
    </>
  )
}
