Games.navigationOptions = ({ navigation }) => ({
    dispatch: useDispatch(),
    search: useSelector(state => state.search),
    filterStatus: useSelector(state => state.filterStatus),

    headerTitle: () => { return (
                    <View style={{flex: 1, marginLeft: '3%', flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{height: 30, width: 30, alignItems: 'center'}}>
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


    headerRight: () => { return (
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        
                        <View style={{flex: 1,width: '75%', justifyContent: 'center', paddingTop: 5, paddingBottom: 5}}>
                                <SearchBar
                                    placeholder="Busque um jogo"
                                    containerStyle={{padding: 3 ,width: "100%", backgroundColor:'#4b3521', borderTopWidth:0, borderBottomWidth:0, alignSelf:'center'}}
                                    inputContainerStyle={{backgroundColor:'#fff'}}
                                    placeholderTextColor= '#b0b0b0'
                                    inputStyle='#'
                                    inputStyle={{color: '#000', bottom: -2}}
                                    clearIcon = {search!=''?(
                                        <TouchableOpacity onPress={() => {dispatch({ type: 'SET_SEARCH', value: ''})}}> 
                                            <Image style={{width: 20, height: 20}}
                                            source={images.Delete}
                                            />
                                        </TouchableOpacity> 
                                        ):<View></View>}
                                    cancelIcon
                                    searchIcon={null}
                                    round
                                    onChangeText={dispatch({ type: 'SET_SEARCH', value: search})}
                                    value={search}
                                    autoCorrect={false}
                                />
                        </View>
                        <View style={{flex:1, padding: 10, justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                                <Image style={{width: 25, height: 25}}
                                source={images.Filter}
                                />
                            {filterStatus ?
                                (<Badge
                                    status="success"
                                    containerStyle={{ position: 'absolute', top: -5, right: -5 }}
                                />)
                            :(<View></View>)}
                            </TouchableOpacity>
                        </View>
                    </View>
                    )},


});