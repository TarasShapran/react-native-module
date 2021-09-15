import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../../services/user.api";
import User from "../user/User";
import {createStackNavigator} from "@react-navigation/stack";


const Users = ({navigation}) => {

    let [users, setUsers] = useState();

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    createStackNavigator();
    return <View>
        <FlatList data={users} renderItem={({item}) => <User nav={navigation} item={item}/>}
                  keyExtractor={item => "" + item.id}/>
    </View>;
};
export default Users;

let styles = StyleSheet.create({})