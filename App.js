import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';

import OnboardingScreen from './components/OnboardingScreen'; // Your onboarding screen
import LoginScreen from './components/LoginScreen'; // Your login screen
import RegisterScreen from './components/RegisterScreen'; // Your register screen
import ForgotPasswordScreen from './components/ForgotPasswordScreen'; // Your forgot password screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator 
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false, // Hides the header for a cleaner look
          }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1', // Light gray background
    padding: 8,
  },
});