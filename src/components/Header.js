import React from 'react'
import { useStore } from 'react-redux'

function Header(props) {

    console.warn("home: ", props.cards)
    const store =useStore();
    // console.warn('home store:', store.getState().cardItems.length)
    return (
        
        <div>

            <div className="add-to-cart">
                <span className="span2"> {store.getState().cardItems.length}  </span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  alt="" />
            </div>
        </div>

    )
}

export default Header

