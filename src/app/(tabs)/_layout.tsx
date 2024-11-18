import React, { useEffect } from 'react';
import {Stack} from 'expo-router';
import '../../styles/global.css';
import { StatusBar } from 'react-native';

export default function TabLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='dashboard' options={{headerShown: false}}/>
      <Stack.Screen name='auth/signin' options={{headerShown: false}}/>
      <Stack.Screen name='auth/signup' options={{headerShown: false}}/>
      <Stack.Screen name='user/[slug]' options={{headerShown: false}}/>
      <Stack.Screen name='user/edit/[id]' options={{headerShown: false}}/>
      <Stack.Screen name='search' options={{headerShown: false}}/>
      <Stack.Screen name='post' options={{headerShown: false}}/>
    </Stack>
    <StatusBar backgroundColor="black" />
    </>
  )
}
