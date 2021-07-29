import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { RadioButton, Switch } from 'react-native-paper';
import Simulacro7 from '../Database/Simulacro7.json'
import Simulacro8 from '../Database/Simulacro8.json'
import Simulacro9 from '../Database/Simulacro9.json'
import Simulacro10 from '../Database/Simulacro10.json'

const db1 = Simulacro7
const db2 = Simulacro8
const db3 = Simulacro9
const db4 = Simulacro10
const DetailsScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [value, setValue] = React.useState('first');
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    const switcher = (param) => {

        switch (param) {
            case 'first':
                db = dbfirst;
                break
            case 'second':
                db = dbsecond;
                break
            default:
                db = dbfirst
        }
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}><Text style={styles.modalText}>Escoje un Simulacro</Text>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <RadioButton.Item label="Second item" value="first" />
                            <RadioButton.Item label="Second item" value="second" />
                        </RadioButton.Group>
                        <View style={{ flexDirection: 'row' }}>
                            <Text> 1 pregunta </Text>
                            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                            <Text> 4 preguntas </Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                {/* <Text style={styles.textStyle}>{eval('db' + value)[1].text}</Text> */}
            </Pressable>

            {/* <Text>{eval('db' + value)[0].Question}</Text>
            <Text>{eval('db' + value)[0].text}</Text>
            <Text>{eval('db' + value)[0].text}</Text>

            <Text>{eval('db' + value)[1].text}</Text>
            <Text>{eval('db' + value)[1].text}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 20
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default DetailsScreen