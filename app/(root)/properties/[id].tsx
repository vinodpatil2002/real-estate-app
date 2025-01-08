import {View, Text} from 'react-native'
import React from 'react'
import {useLocale} from "@react-navigation/native";
import {useLocalSearchParams} from "expo-router";

const Property = () => {
    const {id} = useLocalSearchParams();


    return (
        <View>
            <Text>Property {id}</Text>
        </View>
    )
}
export default Property
