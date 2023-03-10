import { View, StyleSheet, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState();
  const [passInput, setPassInput] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [imageUri, setImageUri] = useState();

  const loginPress = () => {
    navigation.navigate("register");
  };

  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const openGallery = () => {
    ImagePicker.getMediaLibraryPermissionsAsync().then((response) => {
      console.log("permission granted");
    });

    ImagePicker.launchImageLibraryAsync({
      quality: 0.5,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })
      .then((response) => {
        if (response.uri !== undefined) {
          setImageUri(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.Main}>
      <View style={styles.Form}>
        <TextInput
          placeholder={"Email"}
          onChangeText={(text) => setEmailInput(text)}
          style={styles.Input}
        />
        <View style={styles.passwordCon}>
          <TextInput
            placeholder={"Password"}
            onChangeText={(text) => setPassInput(text)}
            style={styles.passwordInput}
            secureTextEntry={showPassword}
          />
          <Ionicons
            size={25}
            color={showPassword ? "orange" : "purple"}
            name={showPassword ? "eye" : "eye-off"}
            onPress={onEyePressed}
          />
        </View>
      </View>
      <View style={styles.Button}>
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
        <Button title={"Login"} onPress={loginPress} />
        <Button title={"Open Gallery"} onPress={openGallery} />
      </View>
    </View>
  );
}
export { Login };

const styles = StyleSheet.create({
  Main: {
    flex: 1,
  },

  Form: {
    flex: 1,
    padding: 10,
  },

  Input: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  passwordCon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  passwordInput: {
    width: "90%",
    padding: 10,
  },
  Button: {
    flex: 1,
    //backgroundColor: "pink",
  },
});
