import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    cover: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        width: 300,
        justifyContent: "center",  
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    loginInput: {
        width: 250,
        margin: 10,
        backgroundColor: "white"
    },
    botaoLogin: {
        backgroundColor: "#4371f7",
        alignItems: "center",
        padding: 10,
        marginBottom: 5
    },
    botaoLoginContainer: {
        width: 250,
    },
    loginTexto: {
        color: "yellow",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "right"
    },
    loginTitulo: {
        color: "yellow",
        fontSize: 20,
        fontWeight: "bold",
        margin: 10
    }
});
