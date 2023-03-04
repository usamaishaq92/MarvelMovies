import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState();
  const [passInput, setPassInput] = useState();
  const [showPassword, setShowPassword] = useState(true);

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
        <Button title={"Login"} onPress={loginPress} />
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
