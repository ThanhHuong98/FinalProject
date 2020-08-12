/* eslint-disable max-len */
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
import ForgotPassword from './src/components/Authentications/ForgotPassword/forgot-password';
import ActiveEmail from './src/components/Authentications/ActiveEmail/active-email';
import SplashScreen from './src/components/SplashScreen/splash-screen';
import Browse from './src/components/Main/browse/browse';
import Home from './src/components/Main/home/home';
import AllCourses from './src/components/Courses/allCourses';
import Search from './src/components/Main/search/Search';
import Favorites from './src/components/Main/favorites/favorites';
import Download from './src/components/Main/download/download';
import DetailCourse from './src/components/DetailCourse/detail-course';
import DetailAuthor from './src/components/Main/browse/Author/DetailAuthor/detail-author';
import SettingScreen from './src/components/Setting/setting-screen';
import SetTheme from './src/components/Setting/thems';
import SetLanguage from './src/components/Setting/languages';
import Profile from './src/components/Profile/profile';
import EditProfile from './src/components/Profile/edit-profile';
import DetailCategory from './src/components/Main/browse/Categories/DetailCategory/detail-category';
import RelatedCourse from './src/components/DetailCourse/RelatedCourses';
import { AuthenProvider } from './src/components/providers/authen';
import { ProfileProvider } from './src/components/providers/profile';
import { HomeProvider } from './src/components/providers/home';
import { BrowseProvider } from './src/components/providers/browse';
import { AuthorProvider } from './src/components/providers/author';
import { FavoritesProvider } from './src/components/providers/favorites';
import { SearchProvider } from './src/components/providers/search';
import { getUserInfo } from './src/storage/storage';
import { CourseDetailsProvider } from './src/components/providers/courseDetails';
import languages from './src/Constant/language';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthenStack = createStackNavigator();
function AuthenStackScreen() {
  return (
    <AuthenProvider>
      <LanguageContext>
        {
          ({ lang }) => (
            <AuthenStack.Navigator
              initialRouteName={ScreenKey.SplashScreen}
              screenOptions={
        {
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '500',
          },
          headerStyle: {
            backgroundColor: themes.dark.background,
          },
          headerTintColor: themes.dark.textColor,
        }
      }
            >
              <AuthenStack.Screen
                name={ScreenKey.SplashScreen}
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <AuthenStack.Screen
                name={ScreenKey.Login}
                component={Login}
                options={{ title: lang.SignIn }}
              />
              <AuthenStack.Screen
                name={ScreenKey.Register}
                component={Register}
                options={{ title: lang.MSignUp }}
              />
              <AuthenStack.Screen
                name={ScreenKey.ForgotPassword}
                component={ForgotPassword}
                options={{ title: lang.ForgotPass }}
              />
              <AuthenStack.Screen
                name={ScreenKey.ActiveEmail}
                component={ActiveEmail}
                options={{ title: lang.ActiveAccount }}
              />
            </AuthenStack.Navigator>

          )
        }
      </LanguageContext>
    </AuthenProvider>
  );
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <LanguageContext>
    {
      ({ lang }) => (
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
        backgroundColor: theme.headerColor,
      },
      headerTintColor: theme.textColor,
    }
  }
      >
        <HomeStack.Screen
          name={ScreenKey.Home}
          component={Home}
          options={{ title: lang.Home }}
        />
        <HomeStack.Screen
          name={ScreenKey.AllCourses}
          component={AllCourses}
          options={{ title: lang.Courses }}
        />
        <HomeStack.Screen
          name={ScreenKey.Setting}
          component={SettingScreen}
          options={{ title: lang.Setting }}
        />
        <HomeStack.Screen
          name={ScreenKey.SetTheme}
          component={SetTheme}
          options={{ title: lang.SettingTheme }}
        />
        <HomeStack.Screen
          name={ScreenKey.SetLanguage}
          component={SetLanguage}
          options={{ title: lang.SettingLang }}
        />
      </HomeStack.Navigator>
    )
  }
        </ThemeContext.Consumer>

      )
    }
  </LanguageContext>
);
const DetailStack = createStackNavigator();
const DetailStackScreen = () => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <CourseDetailsProvider>
          <DetailStack.Navigator
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
            <DetailStack.Screen
              name={ScreenKey.DetailCourse}
              component={DetailCourse}
              options={{ headerShown: false }}
            />

            <DetailStack.Screen
              name={ScreenKey.RelatedCourse}
              component={RelatedCourse}
              options={{ headerShown: true, title: '' }}
            />

            <DetailStack.Screen
              name={ScreenKey.DetailAuthor}
              component={DetailAuthor}
              options={{ headerShown: true, title: '' }}
            />

          </DetailStack.Navigator>

        </CourseDetailsProvider>
      )
    }
  </ThemeContext.Consumer>
);
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <LanguageContext>
    {
      ({ lang }) => (
        <ThemeContext.Consumer>
          {
      ({ theme }) => (
        <ProfileStack.Navigator
          initialRouteName={ScreenKey.Profile}
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
          <ProfileStack.Screen
            name={ScreenKey.Profile}
            component={Profile}
            options={{ title: lang.Profile }}
          />
          <ProfileStack.Screen
            name={ScreenKey.EditProfile}
            component={EditProfile}
            options={{ title: '' }}
          />
          <ProfileStack.Screen
            name={ScreenKey.Authen}
            component={AuthenStackScreen}
            options={{ title: '', headerShown: false }}
          />
        </ProfileStack.Navigator>

      )
    }
        </ThemeContext.Consumer>

      )
    }

  </LanguageContext>
);
const FavoriteStack = createStackNavigator();
const FavoriteStackScreen = () => (
  <LanguageContext>
    {
      ({ lang }) => (
        <ThemeContext.Consumer>
          {
      ({ theme }) => (
        <FavoriteStack.Navigator
          initialRouteName={ScreenKey.Favorite}
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
          <FavoriteStack.Screen
            name={ScreenKey.Favorite}
            component={Favorites}
            options={{ title: lang.Favorite }}
          />
        </FavoriteStack.Navigator>

      )
    }
        </ThemeContext.Consumer>

      )
    }
  </LanguageContext>
);
const DownloadStack = createStackNavigator();
const DownloadStackScreen = () => (
  <LanguageContext>
    {
      ({ lang }) => (
        <ThemeContext.Consumer>
          {
      ({ theme }) => (
        <DownloadStack.Navigator
          initialRouteName={ScreenKey.Download}
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
          <DownloadStack.Screen
            name={ScreenKey.Download}
            component={Download}
            options={{ title: lang.Download }}
          />
        </DownloadStack.Navigator>

      )
    }
        </ThemeContext.Consumer>

      )
    }
  </LanguageContext>
);

const BrowseStack = createStackNavigator();
function BrowseStackScreen() {
  return (
    <LanguageContext>
      {
        ({ lang }) => (
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
              options={{ title: lang.Browse }}
            />
            <BrowseStack.Screen
              name={ScreenKey.AllCourses}
              component={AllCourses}
              options={{ title: lang.Courses }}
            />
            <BrowseStack.Screen
              name={ScreenKey.DetailAuthor}
              component={DetailAuthor}
              options={{ title: '' }}
            />
            <BrowseStack.Screen
              name={ScreenKey.DetailCategory}
              component={DetailCategory}
              options={{ title: '' }}
            />
          </BrowseStack.Navigator>

        )
      }
          </ThemeContext.Consumer>

        )
      }
    </LanguageContext>
  );
}

const SearchStack = createStackNavigator();
function SearchStackScreen() {
  return (
    <SearchProvider>
      <LanguageContext>
        {
          ({ lang }) => (
            <ThemeContext>
              {
        ({ theme }) => (
          <SearchStack.Navigator
            initialRouteName={ScreenKey.Search}
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
            <SearchStack.Screen
              name={ScreenKey.Search}
              component={Search}
              options={{ title: lang.Search }}
            />
          </SearchStack.Navigator>
        )
      }
            </ThemeContext>

          )
        }
      </LanguageContext>
    </SearchProvider>
  );
}
const MainStackScreen = () => (
  <LanguageContext>
    {
      ({ lang }) => (
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
              } else if (route.name === ScreenKey.Favorite) {
                iconName = focused
                  ? 'ios-heart'
                  : 'ios-heart';
              } else if (route.name === ScreenKey.Download) {
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
          <Tab.Screen name={ScreenKey.Home} component={HomeStackScreen} options={{ title: lang.Home }} />
          <Tab.Screen name={ScreenKey.Browse} component={BrowseStackScreen} options={{ title: lang.Browse }} />
          <Tab.Screen name={ScreenKey.Favorite} component={FavoriteStackScreen} options={{ title: lang.Favorite }} />
          <Tab.Screen name={ScreenKey.Download} component={DownloadStackScreen} options={{ title: lang.Download }} />
          <Tab.Screen name={ScreenKey.Search} component={SearchStackScreen} options={{ title: lang.Search }} />
        </Tab.Navigator>
      )
    }
        </ThemeContext>

      )
    }

  </LanguageContext>
);
export const ThemeContext = React.createContext();
export const CoursesContext = React.createContext();
export const LanguageContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const [lang, setLang] = useState(languages.eng);

  const isLogined = () => {
    const user = getUserInfo();
    console.log('user', user);
    if (user) return true;
    return false;
  };

  return (
    <AuthenProvider>
      <HomeProvider>
        <BrowseProvider>
          <AuthorProvider>
            <FavoritesProvider>
              <ProfileProvider>
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <LanguageContext.Provider value={{ lang, setLang }}>
                    <NavigationContainer>
                      <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {
                 !isLogined()
                   ? <Stack.Screen name={ScreenKey.Authen} component={AuthenStackScreen} />
                   : null
                }
                        <Stack.Screen name={ScreenKey.Main} component={MainStackScreen} />
                        <Stack.Screen name={ScreenKey.DetailScreen} component={DetailStackScreen} />
                        <Stack.Screen name={ScreenKey.ProfileMain} component={ProfileStackScreen} />
                      </Stack.Navigator>
                    </NavigationContainer>

                  </LanguageContext.Provider>
                </ThemeContext.Provider>
              </ProfileProvider>
            </FavoritesProvider>
          </AuthorProvider>
        </BrowseProvider>
      </HomeProvider>

    </AuthenProvider>
  );
}
registerRootComponent(App);
