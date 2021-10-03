import Header from "../components/Header";
import { connect } from "react-redux";
import cardItems from "../service/reducers/reducer";



const mapStateToProps= cardItems=>({
 cards: cardItems
})


export default connect(mapStateToProps )(Header)