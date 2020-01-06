import React, { useState, useEffect } from 'react';
import { Text, View, Image, Picker, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Slider, CheckBox  } from 'react-native-elements';

const Filter = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const [players, setPlayers] = useState(params.filterSettings.players);
    const [checkedPlayers, setCheckedPlayers] = useState(params.filterSettings.checkedPlayers);
    const [time, setTime] = useState(params.filterSettings.time);
    const [checkedTime, setCheckedTime] = useState(params.filterSettings.checkedTime);
    const [easy, setEasy] = useState(params.filterSettings.easy);
    const [medium, setMedium] = useState(params.filterSettings.medium);
    const [hard, setHard] = useState(params.filterSettings.hard);
    const [classic, setClassic] = useState(params.filterSettings.classic);
    const [party, setParty] = useState(params.filterSettings.party);
    const [strategy, setStrategy] = useState(params.filterSettings.strategy);
    const [goodFors, setGoodFors] = useState(params.filterSettings.goodFors);
    const [goodFor, setGoodFor] = useState(params.filterSettings.goodFor);
    const [checkedGoodFor, setCheckedGoodFor] = useState(params.filterSettings.checkedGoodFor);


    if(params.filterSettings.goodFor == '') {
        setGoodFor(goodFors[0]); 
        params.filterSettings.goodFor = goodFors[0];
    }
    const updatePlayers = players => {
        setPlayers(players);
        params.filterSettings.players = players;
    };

    const updateTime = time => {
        setTime(time);
        params.filterSettings.time = time;
    }
    
    useEffect(() => {
        navigation.setParams({cleanFilters: () => {
        setCheckedPlayers(false);
        params.filterSettings.checkedPlayers = false;
        params.filterSettings.filterStatus = false;
        setCheckedTime(false);
        params.filterSettings.checkedTime = false;
        setEasy(false);
        params.filterSettings.easy = false;
        setMedium(false);
        params.filterSettings.medium = false;
        setHard(false);
        params.filterSettings.hard = false;
        setClassic(false);
        params.filterSettings.classic = false;
        setParty(false);
        params.filterSettings.party = false;
        setStrategy(false);
        params.filterSettings.strategy = false;
        setCheckedGoodFor(false);
        params.filterSettings.checkedGoodFor = false;
        params.filterSettings.updateInfo(params.filterSettings);
    }})
    }
, [])

     return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'flex-start', padding: 10, marginBottom:0 }}>
                    <View style={styles.filtersContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Image style={{height: 20, width: 20, margin: 10}} source={require('../resources/icon/players.png')} />
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            justifyContent: 'flex-start',
                                            padding: 0,
                                            marginBottom: 3
                                        }}> Número de Jogadores
                            </Text>
                            <CheckBox
                                containerStyle={{justifyContent: 'flex-end', padding: 0  }}
                                checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                checked={params.filterSettings.checkedPlayers}
                                onPress={() => { params.filterSettings.checkedPlayers = !checkedPlayers; setCheckedPlayers(!checkedPlayers);}}
                            />
                        </View>  

                        {checkedPlayers?<View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                            <Slider step={1}
                                style={{flex:1}}
                                minimumValue={1}
                                maximumValue={12}
                                value={params.filterSettings.players}
                                onValueChange={updatePlayers}
                                thumbTintColor={'#d9a703'}
                                thumbTouchSize={{width: 60, height: 40}}
                            />
                        <View style={{marginLeft: 5}}>
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            }}> {players}
                            </Text>
                        </View>   
                        </View> : <View></View>}

                    </View>
                    <View style={styles.filtersContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <Image style={{height: 20, width: 20, margin: 10}} source={require('../resources/icon/time.png')} />
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            justifyContent: 'flex-start',
                                            padding: 0,
                                            marginBottom: 3
                                            }}> Tempo Médio de Jogo
                            </Text>
                            <CheckBox
                                containerStyle={{justifyContent: 'flex-end', padding: 0  }}
                                checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                checked={checkedTime}
                                onPress={() => { params.filterSettings.checkedTime = !checkedTime; setCheckedTime(!checkedTime);}}
                            />
                        </View>  

                        {checkedTime?<View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                            <Slider step={10}
                                style={{flex:1}}
                                minimumValue={10}
                                maximumValue={180}
                                value={params.filterSettings.time}
                                onValueChange={updateTime}
                                thumbTintColor={'#d9a703'}
                                thumbTouchSize={{width: 60, height: 40}}
                            />
                        <View style={{marginLeft: 5}}>
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            }}> {time} min
                            </Text>
                        </View>   
                        </View> : <View></View>}
                    </View>
                    <View style={styles.filtersContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{height: 20, width: 20, margin: 10}} source={require('../resources/icon/difficulty.png')} />
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            justifyContent: 'flex-start',
                                            padding: 0,
                                            marginLeft: 5,
                                            marginBottom: 3
                                            }}>Dificuldade</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 3}}>
                            
                            <CheckBox
                                iconRight
                                checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                checked={easy}
                                title={'Fácil'}
                                textStyle={{color: '#000', fontSize: 15,}}
                                containerStyle={{backgroundColor: '#d9a703'}}
                                onPress={() => {params.filterSettings.easy = !easy;
                                                setEasy(!easy);
                                                }}
                            />
                            
                            <CheckBox
                                iconRight
                                checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                checked={medium}
                                title={'Médio'}
                                textStyle={{color: '#000', fontSize: 15,}}
                                containerStyle={{backgroundColor: '#d9a703'}}            
                                onPress={() => {
                                                params.filterSettings.medium = !medium;
                                                setMedium(!medium);
                                                }}
                            />
                            <CheckBox
                                iconRight
                                checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                checked={hard}
                                title={'Difícil'}
                                textStyle={{color: '#000', fontSize: 15,}}
                                containerStyle={{backgroundColor: '#d9a703'}}
                                onPress={() => {
                                                params.filterSettings.hard = !hard;
                                                setHard(!hard);
                                                 }}
                            />
                            </View>
                    </View>
                    <View style={styles.filtersContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{height: 20, width: 20, margin: 10}} source={require('../resources/icon/board-gaming.png')} />
                            <Text style={{ fontWeight: 'bold',
                                            fontSize: 18,
                                            justifyContent: 'flex-start',
                                            marginLeft: 5,
                                            padding: 0,
                                            marginBottom: 3
                                            }}>Tipo de Jogo</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 3}}>
                                <CheckBox
                                    iconRight
                                    checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                    uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                    checked={classic}
                                    title={'Clássico'}
                                    textStyle={{color: '#000', fontSize: 13,}}
                                    containerStyle={{backgroundColor: '#d9a703'}}
                                    onPress={() => {params.filterSettings.classic = !classic;
                                                    setClassic(!classic);
                                                    }}
                                />

                                <CheckBox
                                    iconRight
                                    checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                    uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                    checked={party}
                                    title={'Party'}
                                    textStyle={{color: '#000', fontSize: 13,}}
                                    containerStyle={{backgroundColor: '#d9a703'}}            
                                    onPress={() => {
                                                    params.filterSettings.party = !party;
                                                    setParty(!party);
                                                    }}
                                />
                                <CheckBox
                                    iconRight
                                    checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                    uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                    checked={strategy}
                                    title={'Estratégia'}
                                    textStyle={{color: '#000', fontSize: 13}}
                                    containerStyle={{backgroundColor: '#d9a703',}}
                                    onPress={() => {
                                                    params.filterSettings.strategy = !strategy;
                                                    setStrategy(!strategy);
                                                    }}
                                />
                            </View>
                        </View>
                            <View style={styles.filtersContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Image style={{height: 20, width: 20, margin: 10}} source={require('../resources/icon/tip.png')} />
                                        <Text style={{ fontWeight: 'bold',
                                                        fontSize: 18,
                                                        justifyContent: 'flex-start',
                                                        padding: 0,
                                                        marginBottom: 3
                                                    }}> Bom para
                                        </Text>
                                        <CheckBox
                                            containerStyle={{justifyContent: 'flex-end', padding: 0  }}
                                            checkedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/checked.png')} />}
                                            uncheckedIcon={<Image style={{height: 20, width: 20}} source={require('../resources/icon/unchecked.png')} />}
                                            checked={checkedGoodFor}
                                            onPress={() => { params.filterSettings.checkedGoodFor = !checkedGoodFor; setCheckedGoodFor(!checkedGoodFor);}}
                                        />
                                </View>
                                                   
                                {checkedGoodFor ? <View style={{borderColor: '#000', borderWidth: 1.5, borderRadius: 30, height: 50, width: '90%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                                    <Picker
                                                    prompt={''}
                                                    mode={('dialog')}
                                                    selectedValue={goodFor}
                                                    style={{height: 50, width: '90%', alignSelf: 'center'}}
                                                    onValueChange={(itemValue) =>{
                                                        params.filterSettings.goodFor = itemValue
                                                        setGoodFor(itemValue)
                                                    }}>
                                                {goodFors.map((item, index) => <Picker.Item itemStyle={{backgroundColor: '#f0f0f0'}} label={item} value={item} key={index} />)}
                                                    </Picker>
                                                </View> 
                                                : <View>
                                                    <Text style= {{fontFamily: 'sans-serif-light',
                                                                    fontSize: 16,
                                                                    color: "#000",
                                                                    lineHeight: 20,
                                                                    marginLeft: 45,
                                                                    }}>Algumas dicas pra você</Text>
                                                </View>
                                }
                            </View> 
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 3}}>
                         <TouchableOpacity onPress={() => {params.filterSettings.filterStatus = true  ;params.filterSettings.updateInfo(params.filterSettings); navigation.goBack()}}>
                             <View style={{backgroundColor: '#d9a703',
                                            borderWidth: 1,
                                            borderColor: '#42301C',
                                            borderRadius: 1000,
                                            padding: 7,
                                            width: '100%',
                                            marginBottom: 1,
                                            marginRight: 0,
                                            }}>
                                 <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold',padding: 5}}>Filtrar</Text>
                             </View>
                         </TouchableOpacity>
                         
                </View>
                   
                  
                    
        </View>
        </ScrollView>
     );
    }

Filter.navigationOptions = ({ navigation }) => ({
    title: 'Filtros',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => {return(
    <TouchableOpacity onPress={() => navigation.state.params.cleanFilters() }>
        <View style={{
                        width: 80,
                        height: 35,
                        marginRight: 10,
                        alignItems: 'center',
                        justifyContent: 'center'}}>
            <Text style={{color: '#fff',
                        fontSize: 18,
                        fontFamily: 'android',}}>Limpar</Text>
        </View>
    </TouchableOpacity>
    )}
});

const styles = StyleSheet.create({
    filtersContainer: {
        marginBottom: '5%',
    }
});


export default Filter;