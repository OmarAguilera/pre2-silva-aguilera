import cart from '../icons/cart.png'
import style from '../style.css'

export function CartWidget(){
    return (
        <div className='cart'>
            <img src={cart} alt="cart icon" />
            <h3>3</h3>
        </div>
    )
}