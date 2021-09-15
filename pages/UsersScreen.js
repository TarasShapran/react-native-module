import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {getUsers} from "../services/user.api";
import UserDetailsScreen from "./UserDetailsScreen";
import Users from "../components/users/Users";

let StackNavigator = createStackNavigator();
const UsersScreen = ({navigation}) => {


    return <StackNavigator.Navigator>
        <StackNavigator.Screen name={'users'} component={Users}/>
        <StackNavigator.Screen name={'userDetails'} component={UserDetailsScreen}/>
    </StackNavigator.Navigator>
};
export default UsersScreen;

let styles = StyleSheet.create({})