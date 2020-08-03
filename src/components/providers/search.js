/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import searchReducer from '../../reducers/search';
import { performSearch } from '../../actions/search';

const SearchContext = React.createContext();

const initialState = {
  isLoading: false,
  searchResult: [],
  recentSeach: [],
  populars: [
    'Android',
    'React',
    'React Native',
    'Redux',
    'CSS',
    'Git',
    'Java',
  ],
};

const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <SearchContext.Provider value={
            {
              state,
              performSearch: performSearch(dispatch),
            }
        }
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
