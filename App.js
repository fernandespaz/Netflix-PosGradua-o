import React, { useEffect , useState} from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from '@react-native-community/async-storage';

import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';
import Tab from './routes/Tabs';
import {ProfileContext} from './context/ProfileContext';

const Stack = createStackNavigator();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
	const [user, setUser] = useState(null);
	const value = {user, setUser};

	getData = async () => {
		try {
			return value = await AsyncStorage.getItem('profile')
		} catch(e) {
			return null;
		}
	}
//console.log('avatar', props);

	return (
		<ProfileContext.Provider value={value}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen 
						name="Tabs"
						component={Tab}
						options={{headerShown: false}} />
					<Stack.Screen 
						name="ProfileToEdit"
						component={ProfileToEdit}
						options={{headerShown: false}} />
					<Stack.Screen 
						name="ChooseIcon"
						component={ChooseIcon}
						options={{headerShown: false}} />
					<Stack.Screen 
						name="Camera"
						component={Camera}
						options={{headerShown: false}} />
				</Stack.Navigator>
			</NavigationContainer>
		</ProfileContext.Provider>
	)
}

export default App;
