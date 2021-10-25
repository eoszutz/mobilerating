import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import GoalsListItem from './GoalsListItem';
import Pallete from '../../shared/Pallete'

export default function Goals(props) {
    const [filter, setFilter] = useState({ scope: "Incomplete" })
    const goalsList = [
        {
            name: "Daily step goal",
            description: "get all 10,000 steps in 1 day before 12:00AM",
            taskId: "adkhjd2342d",
            value: 1,
            type: "action",
            tracking: "continuous",
            frequency: "Daily",
            parameters: {
                api: "https://api.fitbit.com/stepcount",
                completion: [
                    {
                        dailySteps: 2000
                    }
                ],
                progress: [
                    {
                        dailySteps: 2000
                    }
                ]
            },
            complete: false
        },
        {
            name: "Hit the Gym",
            description: "Go to any gym today!",
            taskId: "adkhjfd20123",
            value: 1,
            type: "action",
            tracking: "discreet",
            frequency: "Daily",
            parameters: {
                api: "https://api.google.com/maps",
                completion: [
                    {
                        location: "35.17152230346238, -80.85169397973708",

                    }
                ],
                progress: [
                    
                ]
            },
            complete: false
        },
        {
            name: "Daily step goal",
            description: "get all 10,000 steps in 1 day before 12:00AM",
            taskId: "adkhjd324652d",
            value: 1,
            type: "action",
            tracking: "discreet",
            frequency: "Daily",
            parameters: {
                api: "https://api.fitbit.com/stepcount",
                completion: [
                    {
                        dailySteps: 10000
                    }
                ],
                progress: [
                    {
                        dailySteps: 2000
                    }
                ]
            },
            complete: false
        },
        

    ]
    return (
        <View style={styles.container}>
            <View style={styles.bodyTop}>
                <Text style={styles.sectionTitle}>{filter.scope}</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="sort" size={30} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.bodyList}
                data={goalsList}
                renderItem={GoalsListItem}
                ItemSeparatorComponent={() =>
                    <View style={styles.seperator} />
                }
                keyExtractor={(item) => item.taskId}
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