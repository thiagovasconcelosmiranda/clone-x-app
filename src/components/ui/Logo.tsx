import { Image, View } from "react-native";


type Props = {
    size: number
}

export const Logo = ({size}:Props) =>{
    return (
        <View>
            <Image 
             source={require('../../../assets/images/logo.png')}
             style={{width: size, height: size, resizeMode:'cover'}}
            />
        </View>
    )
}