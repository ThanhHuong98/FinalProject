import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, ScreenKey } from './src/Constant/Constant';


import Browse from './src/components/Main/browse/browse';
import Home from './src/components/Main/home/home';
import ListCourses from './src/components/Courses/ListCoursesItem/list-courses-item';
import CourseItem from './src/components/Courses/CourseItem/course-item';
import Search from './src/components/Main/search/Search';
import Downloads from './src/components/Main/downloads/downloads';
import Register from './src/components/Authentications/Register/Register';
import DetailCourse from './src/components/DetailCourse/detail-course';


const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={ScreenKey.Home}>
      <HomeStack.Screen name={ScreenKey.Home} component={Home} />
      <HomeStack.Screen name={ScreenKey.DetailCourse} component={DetailCourse} />
      <HomeStack.Screen name={ScreenKey.ListCourse} component={ListCourses} />
    </HomeStack.Navigator>
  );
}

const DownloadStack = createStackNavigator();
function DownloadStackScreen() {
  return (
    <DownloadStack.Navigator initialRouteName={ScreenKey.Downloads}>
      <DownloadStack.Screen name={ScreenKey.Downloads} component={Downloads} />
    </DownloadStack.Navigator>
  );
}

const BrowseStack = createStackNavigator();
function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen name={ScreenKey.Browse} component={Browse} />
      <BrowseStack.Screen name={ScreenKey.DetailCourse} component={DetailCourse} />
    </BrowseStack.Navigator>
  );
}

const SearchStack = createStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={ScreenKey.Search} component={Search} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === ScreenKey.Home) {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === ScreenKey.Downloads) {
              iconName = focused
                ? 'ios-download'
                : 'ios-download-outline';
            } else if (route.name === ScreenKey.Browse) {
              iconName = focused
                ? 'ios-browsers'
                : 'ios-browsers-outline';
            } else if (route.name === ScreenKey.Search) {
              iconName = focused
                ? 'ios-search'
                : 'ios-search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.blue,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={ScreenKey.Home} component={HomeStackScreen} />
        <Tab.Screen name={ScreenKey.Browse} component={BrowseStackScreen} />
        <Tab.Screen name={ScreenKey.Downloads} component={DownloadStackScreen} />
        <Tab.Screen name={ScreenKey.Search} component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
