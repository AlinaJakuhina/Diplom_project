import React from 'react'
import { HashLink } from 'react-router-hash-link'
import s from './BannerSale.module.css'
import banner from './media/banner.png'

function BannerSale() {


  return (
    <section className={s.banner_section}>
        <div className={s.banner_left}>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <HashLink to='#sale' smooth="true" duration={500} >
            <button>Sale</button>
            </HashLink>
        </div>

        <div className={s.banner_right}>
            <img src={banner} alt='sale_image'/>
        </div>

    </section>
  )
}

export default BannerSale