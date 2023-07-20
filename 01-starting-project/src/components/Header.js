import classes from './Header.module.scss';

import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../reducers/authSlice';
const Header = () => {
  const auth = useSelector(state => state.auth.isAuthenticated);
const dispatch = useDispatch();
  const logOutHandler =()=>{
    dispatch(authActions.logOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
