import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Pallete from './Pallete';

export default function SettingModal(props) {

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <Text style={styles.title}>Settings</Text>
                        <View style={styles.imgWrapper}>
                            <Image source={{ uri: props.user.image }} style={styles.userImage} />
                            <Text>{props.user.nameFirst}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Linked Accounts</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section 2</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section 3</Text>
                        </View>
                    </View>
                    <View style={styles.closeSection}>
                        <TouchableOpacity onPress={props.close}>
                            <Text style={styles.close}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Pallete.paper,
        padding: 10,
    },
    body: {

        justifyContent: 'center',
        
    },
    title: {
        fontSize: 30,
    },
    imgWrapper: {
        alignItems: 'center',
    },  
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'stretch'
    },
    section: {

    },
    closeSection: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    close: {
        fontSize: 24
    }
})