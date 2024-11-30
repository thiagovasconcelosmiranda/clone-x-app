import * as ImagePicker from 'expo-image-picker';

export default {
    camera: async() => {
        try {
            await ImagePicker
                .requestCameraPermissionsAsync();
            let result = await ImagePicker.launchCameraAsync({
                cameraType: ImagePicker.CameraType.front,
                allowsEditing: true,
                aspect: [2, 2],
                quality: 1,
            });

            if (!result.canceled) {
                 return result.assets[0];
            }

        } catch (error) {
             alert(error); 
        }
      
    },
    gallery: async () => {
        try {
            await ImagePicker
                .requestCameraPermissionsAsync();
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.
                    Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                return result.assets[0];
            }

        } catch (error) {
            alert(error);
        }
    },
    video: async () => {
        try {
            await ImagePicker
                .requestCameraPermissionsAsync();
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.
                    Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if (!result.canceled) {
                return result.assets[0];
            }

        } catch (error) {
            alert(error);
        }
    }
}