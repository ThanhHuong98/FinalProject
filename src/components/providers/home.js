/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import HomeReducer from '../../reducers/home';
import { requestDataHomeScreen, requestAllCourse } from '../../actions/home';

const HomeContext = React.createContext();
const initialState = {
  homeScreen: {
    topSell: [],
    topNew: [],
    topRate: [],
    recommended: [],
  },
  allCourse: [],
  isLoading: false,
};
const HomeProvider = (props) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);
  return (
    <HomeContext.Provider
      value={
          {
            state,
            getDataHomeScreen: requestDataHomeScreen(dispatch),
            getAllCourse: requestAllCourse(dispatch),
          }
        }
    >
      {props.children}
    </HomeContext.Provider>
  );
};
export { HomeProvider, HomeContext };
