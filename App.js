/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, ScreenKey, themes } from './src/Constant/Constant';
import Login from './src/components/Authentications/login/login';
import Register from './src/components/Authentications/Register/register';
import SplashScreen from './src/components/SplashScreen/splash-screen';
import Browse from './src/components/Main/browse/browse';
import Home from './src/components/Main/home/home';
import AllCourses from './src/components/Courses/allCourses';
import Search from './src/components/Main/search/Search';
import Downloads from './src/components/Main/downloads/downloads';
import DetailCourse from './src/components/DetailCourse/detail-course';
import DetailAuthor from './src/components/Main/browse/Author/DetailAuthor/detail-author';
import SettingScreen from './src/components/Setting/setting-screen';
import DetailCategory from './src/components/Main/browse/Categories/DetailCategory/detail-category';
import { AuthenProvider } from './src/components/providers/authen';
import { HomeProvider } from './src/components/providers/home';
import { BrowseProvider } from './src/components/providers/browse';
import { AuthorProvider } from './src/components/providers/author';
import { getUserInfo } from './src/storage/storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenStack = createStackNavigator();
function AuthenStackScreen() {
  return (
    <AuthenProvider>
      <AuthenStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthenStack.Screen
          name={ScreenKey.SplashScreen}
          component={SplashScreen}
        />
        <AuthenStack.Screen
          name={ScreenKey.Login}
          component={Login}
        />
        <AuthenStack.Screen
          name={ScreenKey.Register}
          component={Register}
        />
      </AuthenStack.Navigator>
    </AuthenProvider>
  );
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <ThemeContext.Consumer>
    {
    ({ theme }) => (
      <HomeStack.Navigator
        initialRouteName={ScreenKey.Home}
        screenOptions={
    {
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '500',
      },
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTintColor: theme.textColor,
    }
  }
      >
        <HomeStack.Screen
          name={ScreenKey.Home}
          component={Home}
        />
        <HomeStack.Screen
          name={ScreenKey.DetailCourse}
          component={DetailCourse}
        />
        <HomeStack.Screen
          name={ScreenKey.AllCourses}
          component={AllCourses}
        />
        <HomeStack.Screen
          name={ScreenKey.Setting}
          component={SettingScreen}
        />
      </HomeStack.Navigator>
    )
  }
  </ThemeContext.Consumer>
);

const DownloadStack = createStackNavigator();
const DownloadStackScreen = () => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <DownloadStack.Navigator
          initialRouteName={ScreenKey.Downloads}
          creenOptions={
          {
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '500',
            },
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.textColor,
          }
        }
        >
          <DownloadStack.Screen
            name={ScreenKey.Downloads}
            component={Downloads}
          />
        </DownloadStack.Navigator>

      )
    }
  </ThemeContext.Consumer>
);

const BrowseStack = createStackNavigator();
function BrowseStackScreen() {
  return (
    <ThemeContext.Consumer>
      {
        ({ theme }) => (
          <BrowseStack.Navigator
            initialRouteName={ScreenKey.Browse}
            screenOptions={
    {
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '500',
      },
      headerStyle: {
        backgroundColor: theme.background,
      },
      headerTintColor: theme.textColor,
    }
  }
          >
            <BrowseStack.Screen
              name={ScreenKey.Browse}
              component={Browse}
            />
            <BrowseStack.Screen
              name={ScreenKey.AllCourses}
              component={AllCourses}
            />
            <BrowseStack.Screen
              name={ScreenKey.DetailAuthor}
              component={DetailAuthor}
            />
            <BrowseStack.Screen
              name={ScreenKey.DetailCategory}
              component={DetailCategory}
            />
            {/* <BrowseStack.Screen
        name={ScreenKey.DetailCourse}
        component={DetailCourse}
      />
      <BrowseStack.Screen
        name={ScreenKey.NewRelease}
        component={AllCourses}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailPopularSkill}
        component={DetailPopularSkill}
      />
      <BrowseStack.Screen
        name={ScreenKey.Recommened}
        component={AllCourses}
      />
      <BrowseStack.Screen
        name={ScreenKey.DetailAuthor}
        component={DetailAuthor}
      /> */}
          </BrowseStack.Navigator>

        )
      }
    </ThemeContext.Consumer>
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
const MainStackScreen = () => (
  <ThemeContext>
    {
      ({ theme }) => (
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
            style: {
              backgroundColor: theme.background,
              borderTopWidth: 0,
            },
          }}
        >
          <Tab.Screen name={ScreenKey.Home} component={HomeStackScreen} />
          <Tab.Screen name={ScreenKey.Browse} component={BrowseStackScreen} />
          <Tab.Screen name={ScreenKey.Downloads} component={DownloadStackScreen} />
          <Tab.Screen name={ScreenKey.Search} component={SearchStackScreen} />
        </Tab.Navigator>
      )
    }
  </ThemeContext>
);
export const ThemeContext = React.createContext();
export const CoursesContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const isLogined = () => {
    const user = getUserInfo();
    console.log('user', user);
    if (user) return true;
    return false;
  };

  return (
    <HomeProvider>
      <BrowseProvider>
        <AuthorProvider>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                  !isLogined()
                    ? <Stack.Screen name={ScreenKey.Authen} component={AuthenStackScreen} />
                    : null
                }
                <Stack.Screen name={ScreenKey.Main} component={MainStackScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeContext.Provider>
        </AuthorProvider>
      </BrowseProvider>
    </HomeProvider>
  );
}
registerRootComponent(App);
