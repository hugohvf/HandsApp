import React, { Component } from 'react';
import {SearchBar, Image, Badge} from 'react-native-elements';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { images } from "../helpers/image";

export default class Main extends Component {
    state = {
        status: false,
        counter: 0,
        docs: [],
        search: '',
        players: 4,
        checkedPlayers: false,
        time: 60,
        checkedTime: false,
        easy: false,
        medium: false,
        hard: false,
        classic: false,
        party: false,
        strategy: false,
        goodFors: [],
        goodFor: '',
        checkedGoodFor: false,
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let  headerTitle= (
                        <View style={{flex: 1, marginLeft: '2%'}}>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={images.Menu}
                                style={{width: 25,
                                        height: 25,
                                        marginRight: 10,    
                                    }}
                                />
                                <Image
                                source={images.Hands}
                                style={{width: 71,
                                        height: 41,  }}
                                />
                            </TouchableOpacity>

                        </View>
        );


        let headerRight = (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flex:1, padding: 10, justifyContent: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Filter', {filterSettings: navigation.state.params,
                                                                                                })}>
                                    <Image style={{width: 25, height: 25}}
                                    source={images.Filter}
                                    />
                                {params.filterStatus ?
                                    (<Badge
                                        status="success"
                                        containerStyle={{ position: 'absolute', top: -5, right: -5 }}
                                    />)
                                :(<View></View>)}
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
                                    <SearchBar
                                        placeholder="Escolha um jogo"
                                        containerStyle={{padding: 3 ,width: "100%", backgroundColor:'#57402b', borderTopWidth:0, borderBottomWidth:0, alignSelf:'center'}}
                                        inputContainerStyle={{backgroundColor:'#d9a703'}}
                                        placeholderTextColor= '#000'
                                        inputStyle={{color: '#000', bottom: -2}}
                                        clearIcon = {params.search!=''?(
                                            <TouchableOpacity onPress={() => {navigation.setParams({ search: '' }); params.clearSearch();}}> 
                                                <Image style={{width: 20, height: 20}}
                                                source={images.Delete}
                                                />
                                            </TouchableOpacity> 
                                            ):<View></View>}
                                        cancelIcon
                                        searchIcon={null}
                                        round
                                        onChangeText={params.updateSearch}
                                        value={params.search}
                                        autoCorrect={false}
                                    />
                            </View>
                        </View>)
                        ;

        
        return { headerRight, headerTitle }
    };

    _updateSearch = search => {
        this.setState({ search });
        this.props.navigation.setParams({ search: search });
      };

    _clearSearch = () => {
        this.setState({search: ''})
        this.props.navigation.setParams({ search: '' });
    }
    
    componentDidMount() {
        this.loadGames();
        this.props.navigation.setParams({ updateSearch: this._updateSearch.bind(this), 
                                        updateInfo: this._updateInfo.bind(this),
                                        clearSearch: this._clearSearch.bind(this),
                                        players: this.state.players,
                                        checkedPlayers: this.state.checkedPlayers,
                                        time: this.state.time,
                                        checkedTime: this.state.checkedTime,
                                        easy: this.state.easy,
                                        medium: this.state.medium,
                                        hard: this.state.hard,
                                        classic: this.state.classic,
                                        party: this.state.party,
                                        strategy: this.state.strategy,
                                        goodFor: this.state.goodFor,
                                        checkedGoodFor: this.state.checkedGoodFor,
                                        })
    }

    _updateInfo = async(info) => {
        await this.setState({ players: info.players,
                            checkedPlayers: info.checkedPlayers,
                            time: info.time,
                            checkedTime: info.checkedTime,
                            easy: info.easy,
                            medium: info.medium,
                            hard: info.hard,
                            classic: info.classic,
                            party: info.party,
                            strategy: info.strategy,
                            goodFor: info.goodFor,
                            checkedGoodFor: info.checkedGoodFor,
                            });
    };

    

    loadGames = async () => {
        this.setState({status: false})
        
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=6zHUkk4V_JpPoNBamC-jM1mPOa0nYNzj4EyEIAQQ321HFUhnbmsv-53sAx1Prckxx8ZJzm6i920_5aUdqP-DMz6kDEo_ViOSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFRR9YzJZhWTmr9lwr3NVXTgvhUEhWjVbQ0Vch5Hq5cbLEBZriGkMTC9q0cQfp1v3tpytj_A4aoE&lib=MYaf-IVUoN4gNLR2pzGvtyveXYCx8nRBo'
        const response = await axios.get(url)
        
        this.setState({ docs: response.data.filter(item => item.game.length > 0) });
        this.setState({ counter: this.state.docs.length });
        
        let gFors=[]
        for(let i=0;i<this.state.counter;i++){
            if(!gFors.includes(this.state.docs[i].goodFor)){
                gFors.push(this.state.docs[i].goodFor)
            }
            
        }
                                        
        this.props.navigation.setParams({goodFors: gFors})
        this.state.goodFors = gFors

        this.setState({status: true})
    }   
    
    renderItem = ({ item }) => {
        

        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('GameInfo', { gameProp: item });}} style={styles.gameContainer}>
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


    render() {
        
        return (
            <View style={styles.container}>
                {this.state.status ? (
                <FlatList
                contentContainerStyle={styles.list}
                data={this.state.docs.filter(item => this.state.search.length>0 ? (item.game.toUpperCase().includes(this.state.search.toUpperCase())
                                                                            || item.subdesc.toUpperCase().includes(this.state.search.toUpperCase())) : item)
                                                                            .filter(item => this.state.checkedPlayers ? item.maxPlayers >= this.state.players  && item.minPlayers <= this.state.players : item)
                                                                            .filter(item => this.state.checkedTime ?  this.state.time <= item.maxTime && this.state.time >= item.minTime  : item)
                                                                            .filter(item => this.state.easy && this.state.medium && this.state.hard ? item : 
                                                                                            this.state.easy && this.state.medium ? item.difficulty == 1 || item.difficulty == 2 :
                                                                                            this.state.easy && this.state.hard ? item.difficulty == 1 || item.difficulty == 3 :
                                                                                            this.state.medium && this.state.hard ? item.difficulty == 2 || item.difficulty == 3 :
                                                                                            this.state.easy ? item.difficulty == 1 :
                                                                                            this.state.medium ? item.difficulty == 2 :
                                                                                            this.state.hard ? item.difficulty == 3 : item
                                                                                            )
                                                                            .filter(item => this.state.classic && this.state.party && this.state.strategy ? item : 
                                                                                            this.state.classic && this.state.party ? item.type == 1 || item.type == 2 :
                                                                                            this.state.classic && this.state.strategy ? item.type == 1 || item.type == 3 :
                                                                                            this.state.party && this.state.strategy ? item.type == 2 || item.type == 3 :
                                                                                            this.state.classic ? item.type == 1 :
                                                                                            this.state.party ? item.type == 2 :
                                                                                            this.state.strategy ? item.type == 3 : item
                                                                                            )
                                                                            .filter(item => this.state.checkedGoodFor ? item.goodFor == this.state.goodFor : item)
                                                                            } // 
                keyExtractor={item => item._id.toString()}
                renderItem={this.renderItem}
                enableSnap={true}
                refreshing={!this.state.status}
                onRefresh={()=>{
                this.loadGames()
              }}
                />
                )   :   (
                    <ActivityIndicator style={{flex:1, justifyContent:'center'}} size="large" color="#4b3521" />
                    )}
        </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginTop:1,
        padding: 2,
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    infoBox: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: "#d9a703",
    },
    list: {
        padding: 10,
    },

    upContainer: {
        flex: 1,
        flexDirection: 'row',
    },

    gameContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 10,
        padding: 5,
        marginTop: 8,
        marginBottom: 9,
    },

    descContainer: {
        padding: 10,
        marginBottom: 3,
        marginTop: 8,
        flex: 1,
        justifyContent: "center"
    },

    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        color: "#fff",
        justifyContent: "center",
        textAlign: "center",
    },

    titleContainer: {
        position: 'absolute',
        top: -20,
        left: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#57402b',
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 10,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        zIndex: 5,
    },

    gameDescription: {
        fontFamily: 'sans-serif-light',
        fontSize: 16,
        color: "#000",
        marginTop: 10,
        lineHeight: 19,
        textAlign: "center",
    },

    gameDescriptionSmall: {
        fontFamily: 'sans-serif-light',
        fontSize: 13,
        marginTop: 10,
        color: "#000",
        marginTop: 4,
        lineHeight: 15,
        textAlign: "center",
    },

    img: { 
        width: 150, 
        height: 150,
 
    },
    imgContainer: {

    },
    
        
});