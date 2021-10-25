import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Pallete from '../../shared/Pallete';


export default function ActivityListItem(props) {

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.left}>
                <Image style={styles.userIcon} source={{ uri: props.item.user.image }} />
            </View>
            <View style={styles.middle}>
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.bodyText}>{props.item.action.name}</Text>
                    <Text numberOfLines={1} style={styles.bodySubText}>{props.item.action.desc}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.value}>+{props.item.action.value}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    listItem: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row"
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userIcon: {
        resizeMode: 'stretch',
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    middle: {
        flex: 4,
        padding: 10,
    },
    right: {
        width: 30,

        alignItems: 'center',
    },
    bodyText: {
        fontSize: 24,
    },
    bodySubText: {
        fontSize: 18,

    },
    value: {
        fontWeight: "500",
        fontSize: 18,
        color: Pallete.primary
    }

})