import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';


const User = ({item}) => {


    return <View style={[styles.userBox , styles.margins,styles.sixes]}>
        <Text> {item.name} - {item.username} </Text>
        <button onTouchStart={()=>{
            console.log(item)}
        }>details</button>

    </View>;
};

export default User;

let styles = StyleSheet.create({
    userBox:{
        flex:1,
        backgroundColor: 'silver',

    },
    margins:{
        marginBottom: 3,
    },
    sixes:{
        width:"70%",
        height:100,
    }
})

