import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Pallete from './Pallete';


export default function Card(props) {
    const time = new Date(props.time)
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.userIcon} source={{uri: props.image}}/>
                </View>
                <View style={styles.right}>
                    <View style={styles.cardTop}>
                        <Text style={styles.cardTopText}>{props.name + " earned " + props.value + "creds @ " + time.getHours() + ":" + time.getMinutes()}</Text>
                    </View>
                    <View style={styles.body}>
                        <Text numberOfLines={1} style={styles.bodyText}>{props.title}</Text>
                        <Text numberOfLines={1} style={styles.bodySubText}>{props.desc}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: Pallete.paperDark,
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: .3,
        shadowRadius: 3,
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userIcon:{
        resizeMode: 'stretch',
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    right: {
        flex: 3,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
    cardTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTopText: {
        fontSize: 14,
    },
    body: {

    },
    bodyText: {
        fontSize: 24,
    },
    bodySubText: {
        fontSize: 18,

    },
})