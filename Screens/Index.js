import React from 'react'
import { View } from 'react-native'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <View style={{flex:1}}>
            <Header/>
            
            <Footer/>
        </View>
    )
}