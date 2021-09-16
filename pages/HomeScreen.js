import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import About from "../components/about/About";
import Company from "../components/company/Company";



let Drawer = createDrawerNavigator();

const HomeScreen = () => {

    return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About" component={About}/>
        <Drawer.Screen name="Company" component={Company}/>
    </Drawer.Navigator>
    )
};
export default HomeScreen;

let styles = StyleSheet.create({})