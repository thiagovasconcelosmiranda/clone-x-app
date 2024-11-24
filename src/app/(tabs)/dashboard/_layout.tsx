import { Tabs } from "expo-router";
import { FontAwesome, Foundation, Ionicons } from "@expo/vector-icons";

export default function Layout() {
    return (
        <Tabs screenOptions={{tabBarStyle:{backgroundColor: 'black'}}}>
            <Tabs.Screen name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <FontAwesome name="home" color={color} size={size} />
                        }
                        return <FontAwesome name="home" color={color} size={size} />
                    }
                }} />

            <Tabs.Screen name="recommendation"
                options={{
                    headerShown: false,
                    title: 'Recommendation',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <FontAwesome name="users" color={color} size={size} />
                        }
                        return <FontAwesome name="users" color={color} size={size} />
                    }
                }} />
            <Tabs.Screen name="trending"
                options={{
                    headerShown: false,
                    title: 'Trending',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Foundation name="graph-trend" size={size} color={color} />
                        }
                        return <Foundation name="graph-trend" size={size} color={color} />
                    }
                }} />

            <Tabs.Screen name="notifications"
                options={{
                    headerShown: false,
                    title: 'Notifications',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name="notifications-outline" size={size} color={color} />
                        }
                        return <Ionicons name="notifications-outline" size={size} color={color} />
                    }
                }} />

            <Tabs.Screen name="[search]"
                options={{
                    headerShown: false,
                    title: 'Search Z',
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name="search" size={size} color={color} />
                        }
                        return <Ionicons name="search" size={size} color={color} />
                    }
                }} />
        </Tabs>
    )
}