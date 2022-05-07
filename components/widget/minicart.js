
import React from 'react';
import Link from 'next/link'
const MiniCartWidget =()=>{
   
    return(
        <div className="container-widget">
            <Link href='/cart' >
                <a> <i class="fa-solid fa-cart-shopping"></i></a>
           
            </Link>
        </div>
    )
}
export default MiniCartWidget;