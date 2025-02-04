import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigater">
        <div className="descriptionbox-nav-box">Descriptions</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online plateform that facilitates the
          buying and selling of products or services over the internet. 
          it serves as virtual marketplace where buesiness and individuals can
          showcase their products, interact with customer , and conducts
          transactions without the need for a physical presence. E-commerce,
          websites have gained immens popularity due to their convenience
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices,and any available variations
          (e.g: sizes,colors). Each product usually has its own dedicated page
          with relevant inforamation.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox