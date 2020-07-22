/* eslint-disable react/destructuring-assignment */
import React, { useReducer } from 'react';
import { requestFavorites } from '../../actions/favorites';
import FavoriteReducer from '../../reducers/favorites';

const FavoritesContext = React.createContext();
const initialState = {
  isLoading: false,
  allFavorites: [],
  error: '',
};

const FavoritesProvider = (props) => {
  const [state, dispatch] = useReducer(FavoriteReducer, initialState);
  return (
    <FavoritesContext.Provider
      value={
              {
                state,
                requestFavorites: requestFavorites(dispatch),
              }
            }
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
