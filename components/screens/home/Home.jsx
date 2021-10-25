import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Card from '../../shared/Card';
import ActivityListItem from './ActivityListItem';

import Pallete from '../../shared/Pallete';

const cardData = [

    {
        time: 1631907392000,
        _id: "l;kjafd098123",
        action: {
            type: "location",
            name: "YMCA AM workout",
            desc: "Got up early and hit the gym!",
            value: 5,
        },
        user: {
            nameFirst: "Matt",
            nameLast: "Groeing",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    },
    {
        time: 1631907492000,
        _id: "l;kjafd0fg123",
        action: {
            type: "buy",
            name: "Starbucks $50 order",
            desc: "Bought the office a morning treat!",
            value: 15,

        },
        user: {
            nameFirst: "Lisa",
            nameLast: "Simpson",
            image: "https://randomuser.me/api/portraits/women/91.jpg"
        }
    },
    {
        time: 1631907592000,
        _id: "l;kjafd09adf23",
        action: {
            type: "location",
            name: "Early to work",
            desc: "Crushing the day, starting by getting there before anyone else!",
            value: 5,

        },
        user: {
            nameFirst: "Sean",
            nameLast: "Johnson",
            image: "https://randomuser.me/api/portraits/men/60.jpg"
        }
    },


    {
        time: 1631907892000,
        _id: "l;kjafd091223",
        action: {
            type: "location",
            name: "Morning workout",
            desc: "Yes, it's early, but this is how you get the day started!",
            value: 5,
        },
        user: {
            nameFirst: "Jane",
            nameLast: "Smith",
            image: "https://randomuser.me/api/portraits/women/63.jpg"
        }
    },
]

export default function Home(props) {
    return (
        <View style={styles.container}>

            <Text style={styles.sectionTitle}>
                Friends Activity
            </Text>
            <FlatList
                data={cardData}
                renderItem={ActivityListItem}
                ItemSeparatorComponent={() =>
                    <View style={styles.seperator} />
                }
                keyExtractor={(item) => item._id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    sectionTitle: {
        fontSize: 32,
        marginBottom: 5,
    },
    cardContainer: {
        padding: 5
    },
    sectionSubTitle: {
        fontSize: 20,
    },
    seperator: {
        backgroundColor: Pallete.primary,
        height: 1,
    }
})

