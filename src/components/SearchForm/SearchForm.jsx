import { filterEntry } from 'store/filterSlice';
import StyledFilter from './SearchForm.component';
import { useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ev => {
    dispatch(filterEntry(ev.currentTarget.value));
  };

  return (
    <StyledFilter>
      <IconContext.Provider value={{ color: '#888888', size: '28px' }}>
        <div>
          <BsSearch />
        </div>
      </IconContext.Provider>
      <StyledFilter.Input
        type="text"
        name="find"
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};
