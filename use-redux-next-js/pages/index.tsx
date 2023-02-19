import { selectAuthState, setAuthState } from '@/store/authSlice';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
      <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Home;
