import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Pallete from '../../shared/Pallete';
import ListItem from './RankingListItem';

export default function Rankings(props) {
    const [filter, setFilter] = useState({ scope: "Day", population: "Friends" })
    const [rankingData, setRankingData] = useState([
        { nameFirst: "Lisa", nameLast: "Simpson", ranking: 90455, movement: "none", userId: "saldkjfsd9212" },
        { nameFirst: "Elliot", nameLast: "Szutz", ranking: 10455, movement: "up", userId: "saldkjfsd9213" },
        { nameFirst: "Matt", nameLast: "Groeing", ranking: 8450, movement: "up", userId: "saldkj23fsd9213" },
        { nameFirst: "Jane", nameLast: "Smith", ranking: 1250, movement: "down", userId: "saldkjfsd92234" },
        { nameFirst: "Sean", nameLast: "Johnson", ranking: 450, movement: "none", userId: "saldkjfsd9123" },
        { nameFirst: "Ryan", nameLast: "Ward", ranking: 10, movement: "none", userId: "saldkjfsd9123213" },
    ])


    return (
        <View style={styles.container}>
            <View style={styles.bodyTop}>
                <Text style={styles.sectionTitle}>{filter.population} - {filter.scope}</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="sort" size={30} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.bodyList}
                data={rankingData}
                renderItem={ListItem}
                ItemSeparatorComponent={ () => 
                    <View style={styles.seperator} />
                }
                keyExtractor={(item) => item.userId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
    },
    sectionTitle: {
        fontSize: 32,
        marginBottom: 5,
    },
    bodyTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    filter: {
        fontSize: 18
    },
    bodyList: {

    },
    seperator: {
        backgroundColor: Pallete.primary,
        height: 1,
    }

})