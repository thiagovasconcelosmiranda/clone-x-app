import React from 'react';
import '../../styles/global.css';
import { StatusBar } from 'react-native';
import { RouteStack } from '@/src/router';
import {AuthProvider} from  '@/src/contexts/UserContext'

export default function TabLayout() {
  return (
    <>
    <AuthProvider>
         <RouteStack/>
    </AuthProvider>
    <StatusBar backgroundColor="black"/>
    </>
  )
}
