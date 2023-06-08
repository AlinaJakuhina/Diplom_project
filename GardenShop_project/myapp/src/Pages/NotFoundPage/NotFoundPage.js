import React from 'react'
import s from './NotFoundPage.module.css';
import notFound from './media/notFound.png';

function NotFoundPage() {
  return (
    <div>
      <div className={s.image_notFound}>
        <img src={notFound} alt='notFoundPage'/>
      </div>  
    </div>
  )
}

export default NotFoundPage