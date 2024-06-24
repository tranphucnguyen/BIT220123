import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonColorChange = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    const handleButtonPress = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    // Define background color based on selectedButton
    const getBackgroundColor = () => {
        switch (selectedButton) {
            case 'button1':
                return '#FF6347'; // Red
            case 'button2':
                return '#6495ED'; // Blue
            default:
                return '#FFFFFF'; // Default background color
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: selectedButton === 'button1' ? '#FF6347' : '#DDDDDD' },
                ]}
                onPress={() => handleButtonPress('button1')}
            >
                <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { backgroundColor: selectedButton === 'button2' ? '#6495ED' : '#DDDDDD' },
                ]}
                onPress={() => handleButtonPress('button2')}
            >
                <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        marginBottom: 10,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default ButtonColorChange;
