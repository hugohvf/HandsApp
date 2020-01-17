import React, { useEffect, useState } from 'react';
import {SearchBar, Image, Badge} from 'react-native-elements';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { images } from "../helpers/image";
import styles from "../styles/styleMain";
import { useSelector, useDispatch } from 'react-redux';

const Games = ({navigation}) => {
    
    
    const [status, setStatus] = useState(false)
    navigation.setParams({filterStatus: false})
   // const filterStatus = useSelector(state => state.filterStatus)
    const docs = useSelector(state => state.gamesData)
    const counter = useSelector(state => state.counter)
    const search = useSelector(state => state.search)
    const players = useSelector(state => state.players)
    const checkedPlayers = useSelector(state => state.checkedPlayers)
    const time = useSelector(state => state.time)
    const checkedTime = useSelector(state => state.checkedTime)
    const easy = useSelector(state => state.easy)
    const medium = useSelector(state => state.hard)
    const hard = useSelector(state => state.hard)
    const classic = useSelector(state => state.classic)
    const party = useSelector(state => state.party)
    const strategy = useSelector(state => state.strategy)
    const goodFors = useSelector(state => state.goodFors)
    const goodFor = useSelector(state => state.goodFor)
    const checkedGoodFor = useSelector(state => state.checkedGoodFor)
    const dispatch = useDispatch();

    useEffect(() => {
        loadGames();
    }, []);
    
    const loadGames = async () => {
        setStatus(false);
        
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=6zHUkk4V_JpPoNBamC-jM1mPOa0nYNzj4EyEIAQQ321HFUhnbmsv-53sAx1Prckxx8ZJzm6i920_5aUdqP-DMz6kDEo_ViOSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFRR9YzJZhWTmr9lwr3NVXTgvhUEhWjVbQ0Vch5Hq5cbLEBZriGkMTC9q0cQfp1v3tpytj_A4aoE&lib=MYaf-IVUoN4gNLR2pzGvtyveXYCx8nRBo'
        const response = await axios.get(url)
        await dispatch({ type: 'SET_GAMES', value: response.data.filter(item => item.game.length > 0) })
        dispatch({ type: 'SET_COUNTER', value: docs.length})
        let gFors=[]
        for(let i=0;i<counter;i++){
            if(!gFors.includes(docs[i].goodFor)){
                gFors.push(docs[i].goodFor)
            }
            
        }
                                        
        dispatch({ type: 'SET_GOODFORS', value: gFors});

        setStatus(true);
    }   
    
    const renderItem = ({ item }) => {
        

        return (
            <TouchableOpacity onPress={() => {navigation.navigate('GameInfo', { gameProp: item });}} style={styles.gameContainer}>
                <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.game}</Text>
                </View>
                </View>
            <View style={styles.upContainer}>
                <View style={styles.descContainer}>
                    <Text style={item.subdesc.length >= 75 ? styles.gameDescriptionSmall : styles.gameDescription}>{item.subdesc}</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image  
                    style={styles.img} resizeMode="contain"
                    source={{ uri: item.imgMain }}
                    shadowColor={'#fff'}
                    PlaceholderContent={<ActivityIndicator size="large" color="#d9a703"/>} // IMPLEMENTAR
                    />
                </View>
            </View>
            <View style={styles.info}>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../resources/icon/players.png')}
                    />
                    <Text style={styles.iconDesc}> {item.minPlayers} - {item.maxPlayers} </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../resources/icon/playerAge.png')}
                    />
                    <Text style={styles.iconDesc}> +{item.minAge} </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../resources/icon/time.png')}
                    />
                    <Text style={styles.iconDesc}> {item.minTime} - {item.maxTime} min </Text>
                </View>
                <View style={styles.infoBox}>
                    <Image style={styles.icon}
                    source={require('../resources/icon/difficulty.png')}
                    />
                    {item.difficulty == 1 ? <Text style={styles.iconDesc}> Fácil </Text> :
                    item.difficulty == 2 ? <Text style={styles.iconDesc}> Médio </Text> :
                    item.difficulty == 3 ? <Text style={styles.iconDesc}> Difícil </Text> : null
                    }
                </View>
            </View>
        </TouchableOpacity>
        );
    };
        
        return (
            <View style={styles.container}>
                {status ? (
                <FlatList
                contentContainerStyle={styles.list}
                data={docs.filter(item => search.length > 0 ? (item.game.toUpperCase().includes(search.toUpperCase())
                                                                            || item.subdesc.toUpperCase().includes(search.toUpperCase())) : item)
                                                                            .filter(item => checkedPlayers ? item.maxPlayers >= players  && item.minPlayers <= players : item)
                                                                            .filter(item => checkedTime ?  time <= item.maxTime && time >= item.minTime  : item)
                                                                            .filter(item => easy && medium && hard ? item : 
                                                                                            easy && medium ? item.difficulty == 1 || item.difficulty == 2 :
                                                                                            easy && hard ? item.difficulty == 1 || item.difficulty == 3 :
                                                                                            medium && hard ? item.difficulty == 2 || item.difficulty == 3 :
                                                                                            easy ? item.difficulty == 1 :
                                                                                            medium ? item.difficulty == 2 :
                                                                                            hard ? item.difficulty == 3 : item
                                                                                            )
                                                                            .filter(item => classic && party && strategy ? item : 
                                                                                            classic && party ? item.type == 1 || item.type == 2 :
                                                                                            classic && strategy ? item.type == 1 || item.type == 3 :
                                                                                            party && strategy ? item.type == 2 || item.type == 3 :
                                                                                            classic ? item.type == 1 :
                                                                                            party ? item.type == 2 :
                                                                                            strategy ? item.type == 3 : item
                                                                                            )
                                                                            .filter(item => checkedGoodFor ? item.goodFor == goodFor : item)
                                                                            } // 
                keyExtractor={item => item._id.toString()}
                renderItem={renderItem}
                enableSnap={true}
                refreshing={!status}
                onRefresh={()=>{
                loadGames()
              }}
                />
                )   :   (
                    <ActivityIndicator style={{flex:1, justifyContent:'center'}} size="large" color="#4b3521" />
                    )}
        </View>
        );
    
}

Games.navigationOptions = ({ navigation }) => ({
    headerTitle: () => { return (
        <View style={{flex: 1, marginLeft: '3%', flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {navigation.toggleDrawer();console.log(this)}} style={{height: 30, width: 30, alignItems: 'center'}}>
            <Image
                source={images.Menu}
                style={{width: 25,
                        height: 25,
                        marginRight: 10,    
                    }}
                />
            </TouchableOpacity>
                <Image
                source={images.Hands}
                style={{width: 71,
                        height: 41,  marginRight: 10, marginLeft: 5}}
                />

        </View>
    )},


});

export default Games;