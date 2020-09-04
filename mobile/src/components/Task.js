import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import globalStyle from '../globalStyle.js'

import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

    const dataFormatada = moment(props.estimate_at).locale('pt-br').format('D[/]MM[/]YY ')

    const doneOrNotStyle = props.done_at != null ?
        { textDecorationLine: 'line-through'} : {}

    return (
        <View style={styles.containerTask}>
            <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                <View style={styles.containerCheck}>
                    {getCheckView(props.done_at)}
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[globalStyle.white, globalStyle.bold, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={[globalStyle.gray, globalStyle.bold]}>{dataFormatada}</Text>
            </View>
        </View>
    )
}

function getCheckView(done_at) {
    if(done_at != null) {
        return (
            <View style={styles.done}>
                <FontAwesomeIcon icon={ faCheck } size={13} color='#FFF' />
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }
}

const styles = StyleSheet.create({
    containerTask: {
        flexDirection: 'row',
        backgroundColor: '#F2521D',
        borderRadius: 5,
        padding: 15,
        marginTop: 10,
        color: '#FFF',
        alignItems: 'center'
    },
    containerCheck: {
        width: '13%'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#FFF'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    }
})