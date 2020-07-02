import React from 'react';
import { MaterialCommunityIcons,Ionicons,AntDesign,MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import More from '../screen/More';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "white",
                style: {
                    backgroundColor: "#1a1718",
                    borderTopColor: "transparent",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({focused,size,color}) => (
                        <MaterialCommunityIcons name="home-outline" size={size} color={color} />
                    )
                }} 
            />

                <Tab.Screen
                name="Buscar"
                component={Home}
                options={{
                    tabBarLabel: "Buscar",
                    tabBarIcon: ({focused,size,color}) => (
                        <Ionicons name="md-search" size={size} color={color} />
                    )
                }} />
                
                
                <Tab.Screen
                name="Em Breve"
                component={Home}
                options={{
                    tabBarLabel: "Em Breve",
                    tabBarIcon: ({focused,size,color}) => (
                        <MaterialCommunityIcons name="folder-open-outline" size={size} color={color} />
                        )
                }} />

                <Tab.Screen
                name="Downloads"
                component={Home}
                options={{
                    tabBarLabel: "Downloads",
                    tabBarIcon: ({focused,size,color}) => (
                        <AntDesign name="download" size={size} color={color}/>
                    )
                }} />
                
                <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: "Mais",
                    tabBarIcon: ({focused,size,color}) => (
                        <MaterialIcons name="more-vert" size={size} color={color} />
                    )
                }} 
                />

        </Tab.Navigator>
    )

}

export default Tabs;
