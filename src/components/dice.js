import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  LayoutAnimation,
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';

StatusBar.setBarStyle('light-content', true);

const dice = [
  { name: 'D4', maxValue: 4 },
  { name: 'D6', maxValue: 6 },
  { name: 'D8', maxValue: 8 },
  { name: 'D10', maxValue: 10 },
  { name: 'D100', maxValue: 100 },
  { name: 'D12', maxValue: 12 },
  { name: 'D20', maxValue: 20 },
];

export default class Dice extends Component {

  constructor() {
    super();
    this.state = {
      selectedDieIndex: 1,
      value: null,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedDieIndex) {
    this.setState({selectedDieIndex})
  }

  rollDie = () => {
    LayoutAnimation.spring();
    this.setState({ value: null });
    const maxValue = dice[this.state.selectedDieIndex].maxValue;
    const value = Math.ceil(Math.random() * maxValue);
    setTimeout(() => {
      LayoutAnimation.spring();
      this.setState({ value });
    }, 0);

  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.row}>
          <View style={styles.diceTypeContainer}>
            <Text style={styles.diceTypeText}>
              {dice[this.state.selectedDieIndex].name}
            </Text>
          </View>
        </View> */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.diceContainer}>
            <Text style={styles.diceText}>
              {this.state.value}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.rollDie}
          >
            <Text style={styles.buttonText}>{'Roll the dice'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <ButtonGroup
            containerStyle={styles.diePicker}
            buttons={dice.map((die) => die.name)}
            selectedIndex={this.state.selectedDieIndex}
            onPress={this.updateIndex}
            textStyle={styles.dieText}
            innerBorderStyle={styles.borderStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d9a703',
  },

  row: {
    flexDirection: 'row',
  },

  diceContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#57402b',
  },

  diceTypeContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    margin: 20,
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 120,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  diceTypeText: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'sans-serif',
  },

  buttonContainer: {
    alignItems: 'center',
    margin: 30,
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#000',
    padding: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },

  diceText: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'sans-serif',
  },


  diePicker: {
    height: 50,
    width: '100%',
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#57402b',
    borderColor: '#000'
  },

  dieText: {
    fontFamily: 'sans-serif',
    color: 'white',
  },

  borderStyle: {
      color: '#000',
  }
});
