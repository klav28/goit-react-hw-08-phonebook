import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import { selectIsLoggedIn, selectUser } from 'store/authSelectors';
import { logOut } from '../../store/authOperations';
import { SearchForm } from '../SearchForm/SearchForm';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUser);
  const navigate = useNavigate();
  const logoUrl = new URL('../../../public/logo192.png', import.meta.url);

  return (
    <Container>
      <div class="w-auto flex bg-slate-200 shadow-lg p-3 text-3xl justify-between align-baseline">
        <Link to="/" class="flex">
          <img src={logoUrl} alt="phonebook" width="36" />
          <p class="text-slate-700 font-black pl-3">Phonebook</p>
        </Link>
        {isLoggedIn && <SearchForm />}
        {isLoggedIn && (
          <div class="flex gap-10">
            <p class="italic font-light text-2xl text-orange-700">
              Hello, {userName.name}
            </p>
            <button
              class="bg-slate-700 hover:bg-orange-700 text-white font-light text-base h-9 py-1 px-4 rounded"
              onClick={() => dispatch(logOut())}
              type="button"
            >
              Logout
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <button
            class="bg-orange-600 hover:bg-slate-700 text-white font-light text-base h-9 py-1 px-4 rounded"
            onClick={() => navigate('/register')}
            type="button"
          >
            Register
          </button>
        )}
      </div>
    </Container>
  );
};
