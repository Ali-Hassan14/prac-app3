import { Fragment,useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HederCartBtn.module.css';
import CartContext from '../../store/cartContect';
const HeaderCartButton =(props)=>{
const cartCtx = useContext(CartContext);
 const numberOfCartItems=cartCtx.items.reduce((curNumber, item)=>{
          return curNumber+item.amount;
    },0);
    return(
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                   {numberOfCartItems}
                </span>
            </button>
        </Fragment>
    );
};
export default HeaderCartButton;