import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    box: { padding: 10 },
    text: { fontWeight: 'bold' }
});

export default _ => {
    return (
        <View style={[styles.box, {
            height: '100%'
        }]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Hello world!</Text>
                <Text>Try to run `yarn run:web`, `yarn run:android` and see the UI changes while you change app/App.js file!</Text>
                <Text style={{
                    marginTop: 15
                }}>To change your app name, install `react-native-rename`</Text>
            </View>
            <View>
                <Button title="Click Me!" onPress={_ => {
                    alert("Button Clicked!")
                }}></Button>
            </View>
        </View>
    )
};