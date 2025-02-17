import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, ScreenKey } from './src/Constant/Constant';


import Login from './src/components/Authentications/login/login';
import Register from './src/components/Authentications/Register/Register';
import SplashScreen from './src/components/SplashScreen/splash-screen';
import Browse from './src/components/Main/browse/browse';
import Home from './src/components/Main/home/home';
import ListCourses from './src/components/Courses/ListCoursesItem/list-courses-item';
import Search from './src/components/Main/search/Search';
import Downloads from './src/components/Main/downloads/downloads';
import DetailCourse from './src/components/DetailCourse/detail-course';
import DetailAuthor from './src/components/Main/browse/Author/DetailAuthor/detail-author';
import DetailPopularSkill from './src/components/Main/browse/PopularSkill/DetailPopularSkill/detail-popular-skill';
import DetailPath from './src/components/Main/browse/Paths/DetailPath/detail-path';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName={ScreenKey.Home}>
      <HomeStack.Screen
        name={ScreenKey.Home}
        component={Home}
      />
      <HomeStack.Screen
        name={ScreenKey.DetailCourse}
        component={DetailCourse}
      />
      <HomeStack.Screen
        name={ScreenKey.ListCourse}
        component={ListCourses}
      />
    </HomeStack.Navigator>
  );
}

const DownloadStack = createStackNavigator();
function DownloadStackScreen() {
  return (
    <DownloadStack.Navigator initialRouteName={ScreenKey.Downloads}>
      <DownloadStack.Screen
        name={ScreenKey.Downloads}
        component={Downloads}
      />
    </DownloadStack.Navigator>
  );
}

const BrowseStack = createStackNavigator();
function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name={ScreenKey.Browse}
        component={Browse}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailCourse}
        component={DetailCourse}
      />
      <BrowseStack.Screen
        name={ScreenKey.NewRelease}
        component={ListCourses}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailPopularSkill}
        component={DetailPopularSkill}
      />
      <BrowseStack.Screen
        name={ScreenKey.Recommened}
        component={ListCourses}
      />
      <BrowseStack.Screen
        name={ScreenKey.Paths}
        component={ListCourses}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailPath}
        component={DetailPath}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailAuthor}
        component={DetailAuthor}
      />
    </BrowseStack.Navigator>
  );
}

const SearchStack = createStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name={ScreenKey.Search}
        component={Search}
      />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ScreenKey.Home) {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === ScreenKey.Downloads) {
            iconName = focused
              ? 'ios-download'
              : 'ios-download';
          } else if (route.name === ScreenKey.Browse) {
            iconName = focused
              ? 'ios-apps'
              : 'ios-apps';
          } else if (route.name === ScreenKey.Search) {
            iconName = focused
              ? 'ios-search'
              : 'ios-search';
          }
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
  );
}

const MainStack = createStackNavigator();
function MainNavigation() {
  return (
    <MainStack.Navigator initialRouteName={ScreenKey.SplashScreen}>
      <MainStack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={ScreenKey.Register}
        component={Register}
        options={{ headerShown: true }}
      />
      <MainStack.Screen
        name={ScreenKey.Login}
        component={Login}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={ScreenKey.Main}
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <MainNavigation />
    </NavigationContainer>
  );
}
