import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';


const UserDetailsScreen = (props) => {
    let {route:{params:{data}}} = props
    return <View>
        <Text> {JSON.stringify(data ,null,2)}</Text>
    </View>;
};
export default UserDetailsScreen;

let styles = StyleSheet.create({})