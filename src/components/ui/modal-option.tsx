import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  uploadCamera?: () => void;
  uploadGallery?: () => void;
  uploadCancel?: () => void;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export const ModalOption = ({uploadCamera, uploadGallery, uploadCancel, top, left, bottom}: Props) => {
    return (
        <View className={`w-auto h-auto p-5 px-5 bg-blue-950 absolute z-50 bottom-${bottom} top-${top} left-${left} flex-row gap-5`}>
        <Pressable className="gap-2 flex justify-center items-center"
            onPress={uploadCamera}
            >
            <Ionicons name="camera" size={30} color="#fff" />
            <Text className="text-white text-2xl">Camera</Text>
        </Pressable>

        <Pressable className="gap-2 flex justify-center items-center"
            onPress={uploadGallery}>
            <Ionicons name="phone-landscape" size={30} color="#fff" />
            <Text className="text-white text-2xl">Galeria</Text>
        </Pressable>

        <Pressable className="gap-2 flex justify-center items-center"
            onPress={uploadCancel}>
            <Ionicons name="close" size={30} color="#fff" />
            <Text className="text-white text-2xl">Cancelar</Text>
        </Pressable>
    </View>
    )
}