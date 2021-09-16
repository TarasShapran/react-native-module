import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersScreen from "./pages/UsersScreen";
import HomeScreen from "./pages/HomeScreen";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
                <BottomTabNavigator.Screen name={'homeScreen'} component={HomeScreen}/>

                <BottomTabNavigator.Screen name={'usersScreen'} component={UsersScreen}/>

            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
});
