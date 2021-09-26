import React, { useContext } from 'react';
import {
    View,
    Text,
   
    TouchableOpacity,
   
    TextInput,
  
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    ToastAndroid,
    Image,
    Modal,
   
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import Feather from 'react-native-vector-icons/Feather';




const Login = ({ navigation }) => {
  

    const [data, setData] = React.useState({
        userEmailId: '',
        password: '',
        admin: false
    });

    const [secureEntry, setSecureEntry] = React.useState({
        secureTextEntry: true,
        isLoading: false
    })

    const textInput = (user) => {
        setData({
            ...data,
            userEmailId: user,
        });
    }

    const handlePasswordChange = (pass) => {
        setData({
            ...data,
            password: pass
        });
    }

    const updateSecureTextEntry = () => {
        setSecureEntry({
            ...secureEntry,
            secureTextEntry: !secureEntry.secureTextEntry
        });
    }

    async function submitHandler() {
        ToastAndroid.show("This is just a template!",
        ToastAndroid.LONG)
    
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#3d0099' barStyle="light-content" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <Modal transparent={true} visible={secureEntry.isLoading} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#000000aa' }}>
                    <Image style={{ width: 100, height: 100 }} source={require('../assets/gifs/loading.gif')} />
                    </View>
                </Modal>
                <LinearGradient
                 style={{ flex: 1 }}
                 colors={['#4700b3', '#a366ff']}
                >
                
                <View
                  
                    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                >
                    <Image
                        source={require('../assets/icons/login.png')}
                        style={{ height: 100, width: 100, }}

                    />
                </View>
                <View
                    style={styles.footer}
                >
                    <Text style={{
                        fontFamily: 'nunitoBold',
                        fontSize: 28,
                        color: '#4700b3',
                    }}>Hello There!</Text>
                    <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 18,
                        paddingBottom: 10,
                        color: 'grey',
                    }}>Login to continue</Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Email Address"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(user) => textInput(user)}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={secureEntry.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(pass) => handlePasswordChange(pass)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {secureEntry.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="#a6a6a6"
                                    size={17}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="#8533ff"
                                    size={17}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textPrivate}>
                        <TouchableOpacity
                            // onPress={() => navigation.push('ForgotPass')}
                        >
                            <Text style={[{ fontFamily: 'nunitoBold' }, { color: '#4700b3' }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View
                            style={styles.signIn}
                            
                        >
                             <LinearGradient
                                     colors={['#8533ff', '#4700b3']}
                                     start={[1,0]}
                                    style={styles.signIn}
                                >
                                    <TouchableOpacity
                                    onPress={submitHandler}
                                    >

                                    
                                <Text style={[styles.textSign, {
                                    color: '#fff',
                                }]}>Login</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View style={styles.textPrivate}>
                            <Text style={[{ fontFamily: 'nunitoRegular' }, { color: 'grey' }]}>
                                Don't have an Account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Sign Up')}
                            >
                                <Text style={[{ fontFamily: 'nunitoBold' }, { color: '#4700b3' }]}>{" "}Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
               
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4700b3'
    },
    safeArea: {
        flex: 1,
        marginTop: StatusBar.currentHeight + 10,
        paddingHorizontal: '3%',
        backgroundColor: '#4700b3'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 0.1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomColor: '#c299ff',
        borderBottomWidth: 2,
    },
    textInput: {
        flex: 1,
        fontFamily: 'nunitoRegular',
        color: '#000000',
    },
    bottomContainer: {
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 10,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 7,
    },
    textSign: {
        fontFamily: 'nunitoBold',
        fontSize: 20,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
});