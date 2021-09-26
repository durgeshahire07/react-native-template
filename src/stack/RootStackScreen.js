import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'
import ForgetPass from '../screens/ForgetPass'
import { createStackNavigator } from '@react-navigation/stack'

export default RootStackScreen = () => {

    const AppStack = createStackNavigator();
    return(
        <NavigationContainer>
            <AppStack.Navigator>
            <AppStack.Group screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Sign Up" component={SignUpScreen}/>
                <AppStack.Screen name="Sign In" component={SignInScreen}/>
                <AppStack.Screen name="Forget Pass" component={ForgetPass}/>
            </AppStack.Group>
        </AppStack.Navigator>
        </NavigationContainer>
        
    ) 

}