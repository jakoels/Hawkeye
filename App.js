import React from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';

import { Amplify } from 'aws-amplify';
import {
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';
//import Home from './src/Home';

Amplify.configure(awsconfig);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut} title="Sign Out" />;
}

function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <SignOutButton />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify'
import { 
  useAuthenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/