import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CategoryScreen, HomeScreen, SearchNewsScreen } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLOR } from '../styles/Color'
import { WIDTH } from '../styles/Dimensions'
import TabBarCustomButton from '../components/TabBarCustomButton'
import { Header } from 'react-native/Libraries/NewAppScreen'

const MainTab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <MainTab.Navigator
        initialRouteName='Home' tabBarShowOptions={{
          title: 'Institut Teknologi Garut',
          tabBarShowLabel: false,
          tabBarStyle: {
            display: 'flex',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLOR.transparent,
            elevation: 0
          
          }
        }}
      >
        <MainTab.Screen
          name='Cari' component={SearchNewsScreen} options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Icon
                name='search'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Home' component={HomeScreen} options={{
          headerTitle:'Institut Teknologi Garut',
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Icon
                name='home'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
        <MainTab.Screen
          name='Kategori' component={CategoryScreen} options={{
            tabBarShowLabel: true,
            tabBarIcon: ({ focused }) => (
              <Icon
                name='list'
                color={focused ? COLOR.white : COLOR.secondary}
                size={WIDTH * 0.08}
                resizeMode='contain'
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />
          }}
        />
      </MainTab.Navigator>
    </NavigationContainer>
  )
}

export default MainTabNavigator