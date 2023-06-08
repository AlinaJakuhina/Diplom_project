import React from 'react'
import s from './Footer.module.css'
import { SiInstagram } from "react-icons/si"
import { SiWhatsapp } from "react-icons/si"


function Footer() {
  return (
    <footer className={s.footer}>

        <div className={s.footer_wrapper}>
            <div className={s.footer_left}>
                <h2>Contact</h2>
                <h1>+49 999 999 99 99</h1>
                     <div className={s.icons}>
                         <a href="https://instagram.com">
                         <SiInstagram className={s.instagram_logo}/>
                         <p>Instagramm</p>
                         </a>
                         <a href="https://whatsapp.com">
                         <SiWhatsapp className={s.whatsapp_logo}/>
                         <p>WhatsApp</p>
                         </a>
                     </div>
             </div>

            <div className={s.footer_right}>
                <h2>Address</h2>
                     <div className={s.footer_right_adress}>
                         <p>Linkstraße 2, 8 OG,10785,</p>
                         <p>Berlin, Deutchland</p>
                     </div>
                     <div className={s.footer_day_container}>
                         <p className={s.footer_hours}>Working Hours:</p>
                         <p className={s.footer_day}>24 hours a day</p>
                     </div>
            </div>
        </div>

        <div style={{ width: '150%' }} >
                 <iframe className={s.map}
                    title="Google Map"
                    width="150%"
                    height="505"
                    frameBorder="0"
                    scrolling="scroll"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=150%25&amp;height=505&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                 ></iframe>
            </div>
    </footer>
  )
}

export default Footer