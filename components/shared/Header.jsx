import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from 'react';

import Pallete from './Pallete';
import SettingsModal from './HeaderSettingsModal';


export default function Header(props) {
    const [settingsVisible, setSettingsVisible] = useState(false)

    return (
        <View style={styles.wrapper}>
            <View style={styles.userIconWrapper}>
                <Image source={{ uri: props.info.image }} style={styles.userIcon} />
            </View>
            <View style={styles.headerText}>
                <View>
                    <Text style={styles.headerTextLead}>Elliot Szutz</Text>
                    <Text style={styles.headerTextSub}>61,150</Text>
                </View>
                <TouchableOpacity style={styles.settingIcon}  onPress={() => setSettingsVisible(true)}>
                    <MaterialCommunityIcons name="cog" size={30} color={"white"} />
                </TouchableOpacity>
            </View>
            <SettingsModal user={props.info} visible={settingsVisible} close={() => setSettingsVisible(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Pallete.secondary,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    userIconWrapper: {
        flex: 1,

        margin: 10,
        paddingLeft: 5

    },
    userIcon: {
        height: 50,
        width: 50,
        resizeMode: 'stretch',
        borderRadius: 25,

    },
    headerText: {
        flex: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextLead: {
        color: "white",
        fontSize: 30
    },
    headerTextSub: {
        color: "white",
        fontSize: 20,
    },
    settingIcon: {
        paddingRight: 15
    }
})