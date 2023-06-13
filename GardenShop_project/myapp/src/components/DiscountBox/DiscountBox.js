import React from 'react'
import gnom from './media/gnom.png';
import s from './DiscountBox.module.css';
import { useForm } from 'react-hook-form';


function DiscountBox() {

let {
  register, 
  handleSubmit,
  formState: {errors},
  reset,     // сбрасывание данных
} = useForm({mode:'onSubmit'});

const onSubmit = (data) => {
  console.log(data)
  reset()
}

const phoneRegister = register('phone', {
  pattern: {
    value: /^(\+\d{1,3}\s?)?((\(\d{3,5}\)|\d{3,5})(\s)?)\d{3,8}$/,
    message:"Please enter valid phone number",
  }
})



  return (
    <div className={s.discount_wrapper}>
      <div className={s.box_left}>
        <img src={gnom} alt='dwarf'/>
      </div>

      <div className={s.box_right}>
        <h1>5% OFF</h1>
        <h2>on the first order</h2>
      
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <input type='text' name='phone' placeholder='+49' className={s.phone_input}
          {...phoneRegister}/>
          <div className={s.errors}>{errors.phone && <p style={{color: 'red'}}>{errors.phone.message} </p>}</div>
        </form>
        <button className={s.phone_button}>Get a discount</button>
      </div>
      

    </div>
  )
}

export default DiscountBox