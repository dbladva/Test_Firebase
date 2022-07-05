import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SigninWithGoogle } from '../../redux/action/auth_action';

const Login = () => {


    const dispatch = useDispatch()

    const GoogleHandler = async () => {
        dispatch(SigninWithGoogle())
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageView}>

                <View style={styles.title}>
                    <Text style={styles.titleText}>mypop</Text>
                </View>
                <View style={styles.imageContiner}>
                    <View style={{ alignContent: 'center' }}>
                        {/* <View style={{}}> */}
                        <Image style={styles.image1} source={require('../../images/1.jpg')} />
                        {/* </View> */}
                        <Image style={styles.image2} source={require('../../images/1.jpg')} />
                    </View>
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder={'Email'}
                    placeholderTextColor={'#666666'}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    placeholderTextColor={'#666666'}
                />
                <TouchableOpacity style={styles.btnView}>
                    <Text style={styles.createBtnText}>Let's create</Text>
                </TouchableOpacity>

                <View style={styles.iconBtn}>
                    <TouchableOpacity onPress={() => GoogleHandler()}>
                        <View style={styles.shadow}>
                            <Image style={styles.googleIcon} source={require('../../images/google.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.shadow}>
                            <Image style={styles.googleIcon} source={require('../../images/facebook.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ top: 20, position: 'absolute', color: 'blue' }} > Create new account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    imageView: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        height: '40%',
        marginHorizontal: 40,
        shadowColor: '#000000',
        elevation: 10,
    },
    title: {
        position: 'absolute',
        top: 20,
        alignItems: 'center',
    },
    titleText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    imageContiner: {
        justifyContent: 'flex-end',
        // borderWidth: 1,
        height: 300,
        width: 300
    },
    image1: {
        marginLeft: 30,
        // paddingBottom: -30,
        height: 150,
        width: 150,
        elevation: 5,
        color: '#000000',
    },
    image2: {
        marginTop: -60,
        marginRight: 30,
        alignSelf: 'flex-end',
        height: 150,
        width: 150,
    },
    input: {
        height: 50,
        // borderColor: '#666666',
        fontSize: 16,
        paddingLeft: 10,
        color: '#000000',
        borderRadius: 5,
        marginVertical: 5,
        fontWeight: '500',
        // shadowColor: '#000000',
        backgroundColor: '#ffffff',
        elevation: 10,

    },
    createBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    btnView: {
        backgroundColor: 'blue',
        width: 120,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginVertical: 12,
    },
    googleIcon: {
        height: 30,
        width: 30,
        margin: 5,
        marginTop: 20,
    },
    iconBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
})