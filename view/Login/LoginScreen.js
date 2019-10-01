import React, { Fragment } from "react";
import {TextInput, View, ImageBackground, Text, TouchableOpacity} from "react-native";
import styles from "./LoginStyle";
import loginService from "./LoginService";
import Credentials from "../../models/Credentials";

const IMAGE_URI = require("../../images/cover.jpg");

export default class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <View style={styles.container}>
                    <ImageBackground
                        style={styles.cover} 
                        source={IMAGE_URI}>
                        <View style={styles.loginContainer}>
                            <Text style={styles.loginTitulo}>
                                PickAPic
                            </Text>
                            <TextInput 
                                style={styles.loginInput} 
                                placeholder="Login"
                                placeholderTextColor="black"
                                autoCorrect={false}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                onChangeText={(text) => Credentials.username = text}>
                            </TextInput>
                            <TextInput 
                                style={styles.loginInput}
                                placeholder="Password"
                                placeholderTextColor="black"
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={(text) => Credentials.password = text}>
                            </TextInput>
                            <View style={styles.botaoLoginContainer}>
                                <TouchableOpacity style={styles.botaoLogin} onPress={login}>
                                    <Text>Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.botaoLogin}>
                                    <Text>Criar conta</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.loginTexto}>Recuperar senha</Text>
                        </View>
                    </ImageBackground>
                </View>  
            </Fragment> 
        )
    }
}

const login = () => {
    loginService.doLogin(Credentials);
}
