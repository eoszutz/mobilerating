import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Pallete from '../../shared/Pallete';


export default function RankingListItem(props) {
    let chevronColor = Pallete.tertiary
    let iconName = "minus"

    if (props.item.movement === "up") {
        chevronColor = Pallete.success
        iconName = "chevron-double-up"
    } else if (props.item.movement === "down") {
        chevronColor = Pallete.warning
        iconName = "chevron-double-down"
    }

    return (
        <TouchableOpacity style={styles.listItem}>
            <MaterialCommunityIcons name={iconName} size={35} color={chevronColor} />
            <View style={styles.itemBody}>
                <View style={styles.listItemTitle}>
                    <Text style={styles.listItemTitleText}>{props.item.nameFirst} {props.item.nameLast}</Text>
                </View>
                <View style={styles.listItemSub}>
                    <Text style={styles.listItemSubText}>{props.item.ranking}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    listItem: {
        flex: 1,
        padding: 10,
        flexDirection: "row"
    },
    itemBody: {
        paddingLeft: 15
    },
    listItemTitle: {
        
    },
    listItemTitleText: {
        fontSize: 24
    },
    listItemSub: {

    },
    listItemSubText: {
        fontSize: 18
    }

})