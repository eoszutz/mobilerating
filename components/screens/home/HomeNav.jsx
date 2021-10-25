import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useContext } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

import AuthContext from '../../shared/Auth';
import Pallete from '../../shared/Pallete'
import Home from './Home';
import Rankings from '../ranking/Rankings';
import Settings from '../settings/Settings';
import Search from '../search/Search'
import Header from '../../shared/Header';
import Goals from '../goals/Goals'


const Tab = createBottomTabNavigator()
const userInfo = {
    nameFirst: "Elliot",
    nameLast: "Szutz",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
}

export default function HomeNav(props){
    const authContext = useContext(AuthContext)
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: Pallete.secondary}}>
            <Header info={userInfo} />
            <View style={{flex: 7}}>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="home" size={30} color={Pallete.contrast} />
                    }} />
                    <Tab.Screen name="Rankings" component={Rankings} options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="format-list-numbered" size={30} color={Pallete.contrast} />
                    }} />
                    <Tab.Screen name="Goals" component={Goals} options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="trophy-outline" size={30} color={Pallete.contrast} />
                    }} />
                    <Tab.Screen name="Search" component={Search} options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="magnify" size={30} color={Pallete.contrast} />
                    }} />
                </Tab.Navigator>

            </View>

        </SafeAreaView>
    )
}