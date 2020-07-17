/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import BrowseReducer from '../../reducers/browse';
import { getCategory, getAuthor, getCategoryDetails } from '../../actions/browse';

const BrowseContext = React.createContext();
const initialState = {
  categories: [],
  authors: [],
  isLoading: false,
  categoryDetails: [],
};
const BrowseProvider = (props) => {
  const [state, dispatch] = useReducer(BrowseReducer, initialState);
  return (
    <BrowseContext.Provider
      value={
          {
            state,
            getCategory: getCategory(dispatch),
            getAuthor: getAuthor(dispatch),
            getCategoryDetails: getCategoryDetails(dispatch),
          }
        }
    >
      {props.children}
    </BrowseContext.Provider>
  );
};
export { BrowseProvider, BrowseContext };
