import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';
import Tab from './routes/Tabs';

const Stack = createStackNavigator();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Tabs"
        component={Tab}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="ProfileToEdit"
        component={ProfileToEdit}
        options={{headerShown: false}}
        />
        
        <Stack.Screen
        name="ChooseIcon"
        component={ChooseIcon}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
