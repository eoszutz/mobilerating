import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Pallete from '../../shared/Pallete';

export default function GoalsListItem(props) {
/*     function percents(){
        const numberOfTasks = props.item.parameters.completion.length

            let tasksDoneCount = 0
            for(let i = 0; i < numberOfTasks; i++){
                const completionParams = Object.keys(props.item.parameters.completion[i])
                console.log(completionParams)
                if(props.item.parameters.completion[i][completionParams] === props.item.parameters.progress[i][completionParams]){
                    tasksDoneCount++
                } else {
                    //todo: 
                }
            }


        return (tasksDoneCount / numberOfTasks)
    } */
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.left}>
                <MaterialCommunityIcons name="trophy" size={30} />
            </View>
            <View style={styles.middle}>
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.bodyText}>{props.item.name}</Text>
                    <Text numberOfLines={1} style={styles.bodySubText}>{props.item.description}</Text>
                </View>
{/*                 <View style={styles.progressBar}>
                    <View style={{
                        width: "50%",
                        height: 10,
                        backgroundColor: Pallete.tertiary
                    }}><Text>{percents()}</Text></View>
                    <View style={{
                        width: "50%",
                        backgroundColor: Pallete.primary
                    }}></View>
                </View> */}
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
    bodyText: {
        fontSize: 24,
    },
    bodySubText: {
        fontSize: 18,
    },

    progressBar: {
        width: "100%",
        height: 10,
        flexDirection: "row",
        borderRadius: 5,
        overflow: 'hidden'
    }

})
