import React, { useState} from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import BackgroundCarousel from '../../components/imagecarousel';

 const GameInfo = ({ navigation }) => {
    const { gameProp = {} } = navigation.state.params;
    const images = gameProp.imgs.split(',')
     return (
         <>
            <View style={{height: '40%', width:'100%'}}>
                <BackgroundCarousel images={images}/>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{gameProp.game}</Text>
                <Text style={styles.year}>({gameProp.yearRelease})</Text>
                <Text style={styles.score}>{gameProp.score}</Text>
            </View>

            <View style={styles.creators}>
                <View>
                    <Text style={styles.designer}>Designer: </Text>
                    <Text style={styles.designerProp}>{gameProp.designer}</Text>
                </View>
                <View>
                    <Text style={styles.artist}>Artista: </Text>
                    <Text style={styles.artistProp}>{gameProp.artist}</Text>
                </View>
                <View>
                    <Text style={styles.editor}>Editora: </Text>
                    <Text style={styles.editorProp}>{gameProp.editor}</Text>
                </View>
            </View>

            <View style={styles.descContainer}>
                <Text style={styles.desc}>{gameProp.desc}</Text>
            </View>

            <View style={styles.info}>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../../resources/icon/players.png')}
                    />
                    <Text style={styles.iconDesc}> {gameProp.minPlayers} - {gameProp.maxPlayers} </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../../resources/icon/playerAge.png')}
                    />
                    <Text style={styles.iconDesc}> +{gameProp.minAge} </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../../resources/icon/time.png')}
                    />
                    <Text style={styles.iconDesc}> {gameProp.minTime} - {gameProp.maxTime} min </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../../resources/icon/difficulty.png')}
                    />
                    {gameProp.difficulty == 1 ? <Text style={styles.iconDesc}> Fácil </Text> :
                    gameProp.difficulty == 2 ? <Text style={styles.iconDesc}> Médio </Text> :
                    gameProp.difficulty == 3 ? <Text style={styles.iconDesc}> Difícil </Text> : null
                    }
                </View>
            </View>
        </>
     );
    }

GameInfo.navigationOptions = ({ navigation }) => ({
    headerRight: ( <View style={{flex: 1, padding: 10}} >
                            <Text style= {{fontSize: 20,
                                            fontFamily: 'sans-serif-medium',
                                            color: "#fff",
                                            }}
                            >
                                            {navigation.state.params.gameProp.game}
                            </Text>
                        </View>),

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitle: (
        <View style={{flex: 1, aligngameProps: 'center'}}>
            <Image
            source={require('../../resources/icon/hands.png')}
            style={{width: 69,
                    height: 40,  }}
            />
        </View>
    ),
 
});

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: 'sans-serif-medium',
        justifyContent: "center",
        color: "#000",
        textAlign: "left",
        
    },
    year: {
        marginLeft: 6,
        fontSize: 18,
        fontFamily: 'sans-serif-medium',
        justifyContent: "center",
        color: "#333",
        textAlign: "center",
    },
    score: {
        marginLeft: 6,
        fontSize: 18,
        fontStyle: 'italic',
        fontFamily: 'sans-serif-medium',
        justifyContent: "center",
        color: "#333",
        textAlign: "center",
        textDecorationLine: 'underline'
    },
    titleContainer: {
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        padding: 4,
        borderWidth: 1,
        backgroundColor: '#d9a703',
        borderRadius: 300,
    },
    desc: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: "#000",
        textAlign: "auto",
    },
    descContainer: {
        padding: 15,
        
    },
    icon: {
        width: 18, 
        height: 18,
    },
    iconDesc: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        justifyContent: "center",
        color: "#000",
    },
    iconDescEnd: {
        fontSize: 15,
        fontFamily: 'sans-serif',
        justifyContent: "center",
        color: "#000",
    },
    info: {
        margin: 5,
        marginTop:1,
        padding: 2,
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    infoBox: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    creators: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        padding: 6,
    },
    designer: {
        fontFamily: 'sans-serif-medium',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },
    artist: {
        fontFamily: 'sans-serif-medium',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },
    editor: {
        fontFamily: 'sans-serif-medium',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },
    designerProp: {
        fontFamily: 'sans-serif-medium',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },
    artistProp: {
        fontFamily: 'sans-serif-medium',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },
    editorProp: {
        fontFamily: 'sans-serif-medium',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontSize: 11,
        color: "#000",
        textAlign: 'center',
    },

  });
  

export default GameInfo;