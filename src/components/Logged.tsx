import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogged } from '../state/slice/loggedInSlice';
import { stateType } from '../state/store';

interface ILoggedProps {
}

const Logged: React.FC<ILoggedProps> = (props) => {

  const logged = useSelector((state:stateType) => state.logged)

  const dispatch = useDispatch() 

  const toggleLogButton = () => {
    dispatch(toggleLogged())
  }
  

  return (
    <button onClick={toggleLogButton}>{logged?'Log out':'Log in'}</button>
  );
};

export default Logged;
