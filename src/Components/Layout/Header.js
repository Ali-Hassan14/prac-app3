import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCardButton';
const Header=(props)=>{
    return(
            <Fragment>
                <header className={classes.header}>
                    <h1 >React Food App</h1>
                    <HeaderCartButton  onClick={props.onShowCart}/>
                </header>
                <div className={classes['main-image']}>
                    <img src={mealsImage} alt='A table full of delicious Foods...!'/>
                </div>
            </Fragment>
    );
};
export default Header;