import *as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>DetailsScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
