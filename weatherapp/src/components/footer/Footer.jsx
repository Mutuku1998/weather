import React from 'react'
import '../footer/footer.css'
const Footer = () => {
    const date = new Date() 
const year = date.getFullYear()
  return (
    <div className='footer'>
        <div className='copyright'> <p> <i class="ri-copyright-line"></i> Copyright {year} Developed by martin kavindu</p></div>

<div className='socialmedia'>
<p>
  social media<span> <i class="ri-twitter-line"></i> <i class="ri-facebook-line"></i> <i class="ri-linkedin-line"></i></span>
</p>
</div>
    </div>
  )
}

export default Footer