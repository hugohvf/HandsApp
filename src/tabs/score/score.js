import React, { useState} from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Overlay, Input, Button} from 'react-native-elements';
import {images} from '../../helpers/image';
//import {AddPlayers} from '../../components/addPlayers';

const ScoreSheet = ({ navigation }) => {
    const [players,setPlayers] = useState({})
    const [adding,setAdding] = useState(false)
    const player = React.createRef();

    const AddPlayers = () => {

        const addPlayer = () => {
            
        }

        return (
            <Overlay
                isVisible={adding}
                overlayBackgroundColor="white"
                width={'85%'}
                height={130}
                containerStyle={{}}
            >
                <View>
                <Input
                    placeholder='Nome do Jogador'
                    containerStyle={{marginBottom: 10}}
                    ref={player}
                />
                <TouchableOpacity>
                    <Button
                        title="Adicionar"
                        buttonStyle={{}}
                        containerStyle={{alignSelf: 'flex-end', width: '30%'}}
                        onPress={() => {addPlayer(); setAdding(false)}}
                    />
                </TouchableOpacity>
                </View>
            </Overlay>
        )
    }

    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
                <Image style={styles.backIcon} source={images.Back}/>
            </TouchableOpacity>
            <ScrollView>
                <View>
                    <AddPlayers></AddPlayers>
                </View>
            </ScrollView>
                <View style={styles.addContainer}>
                    <TouchableOpacity onPress={() => setAdding(true)}>
                        <Image style={styles.addIcon} source={images.Add}/>
                    </TouchableOpacity>    
                </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d9a703",
    },

    backContainer: {

    },

    backIcon: {
        width: 20,
        height: 20,
        margin: 15,
    },

    addContainer: {
        backgroundColor: '#57402b',
        width: 40,
        height: 40,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 15,
        zIndex: 5,
    },

    addIcon: {
        width: 25,
        height: 25,
        margin: 10,
    },
});

export default ScoreSheet;