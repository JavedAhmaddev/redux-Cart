import React from 'react'
import a from '../img/a.png'
function Home(props) {

    console.warn("home: ", props.data.length)

    return (

        <div>

            <h1> Home Component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={a} alt=""/>
                </div>
                <div className="text-wrapper item">
                    <span className="span1"> I-Phone </span>
                    <span className="span1"> Price: $100.00 </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}> Add To Cart </button>
                    <button onClick={()=>props.removeToCartHandler()} disabled={props.data.length ===0}>  Remove From Cart </button>
                </div>
            </div>
        </div>

    )
}

export default Home
