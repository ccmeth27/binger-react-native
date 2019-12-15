import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';

function DiscoverHeader() {
    return (
        <View style={{ flex: 2 }}>
            <Text style={styles.header}>binger</Text>
        </View>
    )
}
export default DiscoverHeader
const styles = {
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
}