import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Games from './pages/games';
import GameInfo from './pages/gameinfo';
import Filter from './pages/filter';
import TapView from './tabs/tapView';
import DiceRoller from './tabs/dice';
import Score from './tabs/score';


const RootStack = createStackNavigator({
    Games,
    GameInfo,
    Filter,
}, 
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#4b3521"
        },
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    Jogos: {
      screen: RootStack,
    },
    "Primeiro Jogador" : {
      screen: TapView,
    },
    "Dados": {
      screen: DiceRoller,
    },
    "Pontos": {
      screen: Score,
    }
  }, {
    drawerBackgroundColor: "#4b3521",
    drawerType: 'front',
    drawerWidth: '40%',
    contentOptions: {
      inactiveTintColor: "#fff",
      activeTintColor: '#d9a703',
      activeBackgroundColor: "#3e2915",
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      },
      deefaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#4b3521"
        },
      },
    },
  });
  


const Routes = createAppContainer(MyDrawerNavigator);
export default Routes;