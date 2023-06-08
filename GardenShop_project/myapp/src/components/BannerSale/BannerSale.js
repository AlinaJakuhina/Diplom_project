import React from 'react'
import { Link } from 'react-router-dom'
import s from './BannerSale.module.css'
import banner from './media/banner.png'

function BannerSale() {


  return (
    <section>
        <div className={s.banner_left}>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <Link to='sale' smooth={true} duration={700} >
            <button>Sale</button>
            </Link>
        </div>

        <div className={s.banner_right}>
            <img src={banner} alt='sale_image'/>
        </div>

    </section>
  )
}

export default BannerSale