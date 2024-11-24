import { Stack } from "expo-router"

export const RouteStack = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='dashboard' options={{ headerShown: false }} />
            <Stack.Screen name='auth/signin' options={{ headerShown: false }} />
            <Stack.Screen name='auth/signup' options={{ headerShown: false }} />
            <Stack.Screen name='user/[slug]' options={{ headerShown: false }} />
            <Stack.Screen name='user/edit/user' options={{ headerShown: false }} />
            <Stack.Screen name='search' options={{ headerShown: false }} />
            <Stack.Screen name='post' options={{ headerShown: false }} />
        </Stack>
    )
}