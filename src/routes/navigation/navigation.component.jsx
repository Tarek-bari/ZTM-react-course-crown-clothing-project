import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'
import { useSelector, useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import crown from '../../assets/crown.svg'
import { selectCurrentUser } from "../../store/user/user.selector"
import { signOutStart } from '../../store/user/user.action'


const Navigation = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

    const signOutUser = () => dispatch(signOutStart())

    return (
        <>
            <NavigationContainer>
                <LogoContainer to={'/'}>
                    <img src={crown} alt="Crown Clothes" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to={'/shop'}>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink to={'/auth'}>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation