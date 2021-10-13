import CartContext from '../../Context'
import {BiRupee} from 'react-icons/bi'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import './index.css'


const SimilarFoodItem = props => (
   
  <CartContext.Consumer>
    {value => {
    const {addCartItem, decrementCartItemQuantity} = value
    
    const onClickAddToCart = () => {
        addCartItem({...similarFoodData, quantity})

    }

    const {similarFoodData, quantity ,onDecrementTempQuantity,  changeBtnStatus, onIncrementTempQuantity, onDecrementQuantity} = props
    const {id, cost, tempQuantity ,imageUrl, name, rating, btnStatus} = similarFoodData


    const currentId = id
    
    const onStatusChange = (currentId) => {
      changeBtnStatus(currentId)
      onClickAddToCart()  
        onIncrementTempQuantity(currentId)

    }

    const onIncrement = (cartList, currentId)=> {
        onClickAddToCart()  
        onIncrementTempQuantity(currentId)
             
        }


      const onDecrement = (id,tempQuantity)=> {
        if (tempQuantity > 0){
         onDecrementQuantity(id)
         decrementCartItemQuantity(id)
         onDecrementTempQuantity(id)
    }
      }


return(
  <li className="similar-product-item">
     <div className="similar-product-container">
       <img className = "foodImage" src={imageUrl} alt={name}/>
     <div className="dishes-detail">
     <h1 className="foodNames">{name}</h1>
     <p className="cost"><BiRupee className="rupee"/>{cost}.00</p>
     <p className="rating"><img className = "star" src="https://res.cloudinary.com/dbmvwqck0/image/upload/v1633755694/7_Rating_apvj2o.png" alt="rating"/>{rating}</p>
        { btnStatus ? (<div className="quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={()=>onDecrement(currentId, tempQuantity)}
                    testid="minus"
                  >
                    <BsDashSquare className="quantity-controller-icon" />
                  </button>
                  <p className="quantity">{tempQuantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={()=> onIncrement(similarFoodData, currentId, changeBtnStatus)}
                    testid="plus"
                  >
                    <BsPlusSquare className="quantity-controller-icon" />
                  </button>
                </div>
                ):(<button
                  type="button"
                  className="btnCart"
                  onClick={()=> onStatusChange(currentId)}
                >
                  ADD
                </button>)
           }
             </div>
       </div>
     </li>
)
  }}
     </CartContext.Consumer>   
)



export default SimilarFoodItem


