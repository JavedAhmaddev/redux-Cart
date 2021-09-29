import React from 'react'

function Header(props) {

    console.warn("home: ", props.data)

    return (

        <div>

            <div className="add-to-cart">
                <span className="span2"> {props.data.length} </span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  alt="" />
            </div>
        </div>

    )
}

export default Header
