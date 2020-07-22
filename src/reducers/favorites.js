/* eslint-disable default-case */
import {
  REQUEST_DATA,
  REQUEST_FAILED,
  RECEIVE_ALL_FAVORITES,
} from '../Constant/actions/favorites';

const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_ALL_FAVORITES:
      return {
        ...state,
        isLoading: false,
        allFavorites: action.data,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    default: return state;
  }
};

export default FavoriteReducer;
