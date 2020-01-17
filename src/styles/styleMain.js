import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
