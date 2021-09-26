import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView,
    StatusBar,  
    ToastAndroid,
    SafeAreaView,
    Modal,
    Image,
    Pressable
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'

import Feather from 'react-native-vector-icons/Feather';



export default SignUpScreen = ({ navigation }) => {    
    
   
    const [data, setData] = React.useState({
        firstName: '',
        lastName: '',
        userEmailId: '',
        password: '',
    });

    const [secureEntry, setSecureEntry] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        confirm_password: '',
        isLoading: false
    })

    const textInputFirstName = (first) => {
        setData({
            ...data,
            firstName: first
        })
    }
    const textInputlastName = (last) => {
        setData({
            ...data,
            lastName: last
        })
    }
    const textInputChange = (user) => {

        if (user.length > 10) {
            setSecureEntry({
                ...secureEntry,
                check_textInputChange: true
            })
            setData({
                ...data,
                userEmailId: user,
            });
        } else {
            setSecureEntry({
                ...secureEntry,
                check_textInputChange: false
            })
            setData({
                ...data,
                userEmailId: user
            });
        }
    }

    const handlePasswordChange = (pass1) => {
        setData({
            ...data,
            password: pass1
        });
    }

    const updateSecureTextEntry = () => {
        setSecureEntry({
            ...secureEntry,
            secureTextEntry: !secureEntry.secureTextEntry
        });
    }

    const handleConfirmPasswordChange = (pass2) => {
        setSecureEntry({
            ...secureEntry,
            confirm_password: pass2
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setSecureEntry({
            ...secureEntry,
            confirm_secureTextEntry: !secureEntry.confirm_secureTextEntry
        });
    }

    async function submitHandler() {
        ToastAndroid.show("This is just a Template!",
        ToastAndroid.LONG)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#3d0099' barStyle="light-content" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <Modal transparent={true} visible={secureEntry.isLoading} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000aa' }}>
                        <Image style={{ width: 100, height: 100 }} source={require('../assets/gifs/loading.gif')} />
                    </View>
                </Modal>
                <LinearGradient
                    style={{ flex: 1 }}
                    colors={['#4700b3', '#a366ff']}
                >

                    <View style={styles.header} />
                    <Text style={{
                        fontFamily: 'nunitoSemi',
                        fontSize: 35,
                        color: '#fff',
                        paddingLeft: 20
                    }}>Hey, get on board</Text>
                    <Text style={{
                        fontFamily: 'nunitoSemi',
                        fontSize: 20,
                        paddingBottom: 30,
                        color: '#fff',
                        paddingLeft: 20,
                    }}>Sign up to start your Journey!</Text>

                    <View
                        
                        style={styles.footer}
                    >

                        <View style={styles.action}>
                            <TextInput
                                placeholder="First Name"
                                style={styles.textInput}
                                onChangeText={(first) => textInputFirstName(first)}
                            />
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Last Name"
                                style={styles.textInput}
                                onChangeText={(last) => textInputlastName(last)}
                            />
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Email Address"
                                style={styles.textInput}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                onChangeText={(userEmailId) => textInputChange(userEmailId)}
                            />
                            {secureEntry.check_textInputChange ?
                                <View
                                >
                                    <Feather
                                        name="check"
                                        color="#00e600"
                                        size={20}
                                    />
                                </View>
                                : null}
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={secureEntry.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(pass1) => handlePasswordChange(pass1)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {secureEntry.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="#a6a6a6"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="#8533ff"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="Confirm Your Password"
                                style={styles.textInput}
                                secureTextEntry={secureEntry.confirm_secureTextEntry ? true : false}
                                autoCapitalize="none"
                                onChangeText={(pass2) => handleConfirmPasswordChange(pass2)}
                            />
                            <TouchableOpacity
                                onPress={updateConfirmSecureTextEntry}
                            >
                                {secureEntry.confirm_secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="#a6a6a6"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="#8533ff"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                </Text>
                            <Text style={[{ color: '#595959' }, { fontFamily: 'nunitoBold' }]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[{ color: '#595959' }, { fontFamily: 'nunitoBold' }]}>{" "}Privacy policy</Text>
                        </View>
                        <View style={styles.button}>
                            <Pressable
                                onPress={submitHandler}
                                android_ripple={{ color: '#fff' }}
                                style={styles.signIn}

                            >

                                <LinearGradient
                                    colors={['#8533ff', '#4700b3']}
                                    start={[1, 0]}
                                    style={styles.signIn}
                                >
                                    <TouchableOpacity
                                        onPress={submitHandler}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff',
                                        }]}>Sign Up</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                            </Pressable>
                            <View style={styles.textPrivate}>
                                <Text style={styles.color_textPrivate}>
                                    Already have an Account?
                </Text>
                                <TouchableOpacity
                                    onPress={() => navigation.push('Sign In')}
                                >
                                    <Text style={[{ color: '#4700b3' }, { fontFamily: 'nunitoBold' }]}>{" "}Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4700b3'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
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
        marginTop: 20,
        borderBottomColor: '#c299ff',
        borderBottomWidth: 2,
    },
    textInput: {
        fontFamily: 'nunitoRegular',
        flex: 1,
        color: '#000000',
    },
    button: {
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
        shadowColor: '#000',
        elevation: 5,
    },
    textSign: {
        fontSize: 20,
        fontFamily: 'nunitoBold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        fontFamily: 'nunitoRegular',
        color: 'grey'
    },
});