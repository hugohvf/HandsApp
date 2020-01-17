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
        case 'TOGGLE_FILTER':
            return {...state, filterStatus: !state.filterStatus};
        case 'TOGGLE_PLAYERS':
            return {...state, checkedPlayers: !state.checkedPlayers};
        case 'SET_PLAYERS':
            return {...state, players: action.value};
        case 'TOGGLE_TIME':
            return {...state, checkedTime: !state.checkedTime};
        case 'SET_TIME':
            return {...state, time: action.value};
        case 'TOGGLE_EASY':
            return {...state, easy: !state.easy};
        case 'TOGGLE_MEDIUM':
            return {...state, medium: !state.medium};
        case 'TOGGLE_HARD':
            return {...state, hard: !state.hard};
        case 'TOGGLE_CLASSIC':
            return {...state, classic: !state.classic};
        case 'TOGGLE_PARTY':
            return {...state, party: !state.party};
        case 'TOGGLE_STRATEGY':
            return {...state, strategy: !state.strategy};
        case 'SET_GOODFORS':
            return {...state, goodFors: [action.value]};
        case 'TOGGLE_GOODFOR':
            return {...state, checkedGoodFor: !state.checkedGoodFor};
        case 'SET_GOODFOR':
            return {...state, goodFor: action.value};
        default:
            return state;
    }
}

const store = createStore(data);

export default store;