import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import moment from 'moment'
import 'moment/locale/pt-br'
import globalStyle from '../globalStyle.js'
import Task from '../components/Task'

export default class TaskList extends Component {
    state = {
        visibleTasks: [],
        showDoneTasks: true,
        tasks: [{
            id: Math.random(),
            desc: 'Curso de React Native',
            estimate_at: new Date(),
            done_at: new Date(),
        }, {
            id: Math.random(),
            desc: 'Curso de Java',
            estimate_at: new Date(),
            done_at: null,
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
            done_at: null,
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

    componentDidMount = () => {
        this.filterTasks()
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.done_at === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if(task.id === taskId) {
                task.done_at = task.done_at ? null : new Date()
            }
        })
        this.setState({tasks}, this.filterTasks)
    }
    render() {
        const today = moment().locale('pt-br').format('D[/]MM[/]YY ')
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/img/logo-nav.png')}></Image>
                </View>
                <View style={styles.containerList}>
                    <View style={[globalStyle.rowDirection, globalStyle.spaceBetween]}>
                        <Text style={styles.contrastDateYellow}>{today}</Text>
                        <View>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <FontAwesomeIcon style={globalStyle.blue} icon={ this.state.showDoneTasks ? faEye : faEyeSlash } size={25} />
                            </TouchableOpacity>
                        </View>
    
                    </View>

                    <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`}
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