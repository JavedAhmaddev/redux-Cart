import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../service/actions/actions";


const mapStateToProps= ({cardItems})=>({
 data: cardItems
})

const mapDispatchToProps = dispatch =>({
    add:data=>dispatch(addToCart(data)),
    remove:data=>dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)