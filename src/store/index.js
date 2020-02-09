import { createStore } from 'redux';
import { act } from 'react-test-renderer';
import { object } from 'prop-types';

const INITIAL_STATE = {
    counter: 0,
    gamesData: [],
    search: '',
    filterStatus: false,
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
// {...state, gamesData: action.value};
// Object.assign({}, state, {
//     gamesData: action.value
// })
function data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_GAMES':
            return Object.assign({}, state, {
                    gamesData: action.value
                 })
        case 'SET_COUNTER':
            return {...state, counter: action.value};
        case 'SET_SEARCH':
            return {...state, search: action.value};
        case 'UPDATE_FILTERS':
            return {...state, filterStatus: true,
                players: action.players,
                checkedPlayers: action.checkedPlayers,
                time: action.time,
                checkedTime: action.checkedTime,
                easy: action.easy,
                medium: action.medium,
                hard: action.hard,
                classic: action.classic,
                party: action.party,
                strategy: action.strategy,
                goodFor: action.goodFor,
                checkedGoodFor: action.checkedGoodFor};
        case 'SET_GOODFORS':
            return {...state, goodFors: action.value};
        case 'CLEAN_FILTERS':
            return {...state, 
                    filterStatus: false,
                    checkedPlayers: false,
                    checkedTime: false,
                    easy: false,
                    medium: false,
                    hard: false,
                    classic: false,
                    party: false,
                    strategy: false,
                    goodFor: '',
                    checkedGoodFor: false,
                    }
        default:
            return state;
    }
}

const store = createStore(data);

export default store;