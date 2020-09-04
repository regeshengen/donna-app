import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native'

import moment from 'moment'
import 'moment/locale/pt-br'
import globalStyle from '../globalStyle.js'
import Task from '../components/Task'

export default class TaskList extends Component {
    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Curso de React Native',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        },
        {
            id: Math.random(),
            desc: 'Curso de React JS',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: new Date(),
        }]
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.done_at = task.done_at ? null : new Date()
            }
        })
        this.setState({tasks})
    }
    render() {
        const today = moment().locale('pt-br').format('D[/]MM[/]YY ')
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/img/logo-nav.png')}></Image>
                </View>
                <View style={styles.containerList}>
                    <Text style={styles.contrastDateYellow}>{today}</Text>
                    <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task { ...item } toggleTask={this.toggleTask} />} />
                        
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'linear-gradient(52deg, rgba(25,3,60,1) 0%, rgba(0,0,0,1) 100%)',
        color: '#FFF',
        flex: 1
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        flex: 1
    },
    containerList: {
        flex: 9,
        backgroundColor: '#FFF',
        padding: 15,
        margin: 10,
        marginTop: -20,
        borderRadius: 10
    },
    contrastDateYellow: {
        backgroundColor: '#FFD500',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 4,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    }
})