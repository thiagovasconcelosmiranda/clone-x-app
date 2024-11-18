import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Layout() {
    
    return (
        <Tabs>
            <Tabs.Screen name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <FontAwesome name="tags" color={color} size={size} />
                        }
                        return <FontAwesome name="tags" color={color} size={size} />
                    }
                }} />

            <Tabs.Screen name="settings"
                options={{
                    headerShown: false,
                    title: 'settings',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <FontAwesome name="gear" color={color} size={size} />
                        }
                        return <FontAwesome name="gear" color={color} size={size} />
                    }
                }} />

             <Tabs.Screen name="notifications"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name="search" size={size} color={color}/>
                        }
                        return <Ionicons name="search" size={size} color={color}/>
                    }
                }} />
        </Tabs>
    )
}