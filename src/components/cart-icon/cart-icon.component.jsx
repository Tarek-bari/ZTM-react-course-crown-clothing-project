import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { useContext } from 'react'
import cartIcon from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart-context'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={cartIcon} alt="Shopping Bag" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon