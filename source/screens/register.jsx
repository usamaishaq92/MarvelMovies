import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import * as EmailValidator from "email-validator";

function Register() {
  // depend the whole form is filled or not
  const [isValid, setIsValid] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitPress = () => {
    alert("hie this an alert from a valid form");
  };

  useEffect(() => {
    checkValidForm();
  }, [email, firstName, lastName, password, confirmPassword]);

  const checkValidForm = () => {
    if (email === "") {
      setIsValid(false);
      return;
    }

    if (firstName === "") {
      setIsValid(false);
      return;
    }

    if (lastName === "") {
      setIsValid(false);
      return;
    }

    if (password === "") {
      setIsValid(false);
      return;
    }

    if (confirmPassword === "") {
      setIsValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsValid(false);
      return;
    }

    // uses email validator package and tell that email is valid or not
    if (EmailValidator.validate(email) === false) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.inputBox}
          placeholder={"first name"}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"last name"}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"email"}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"password"}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={"confirm password"}
          onChangeText={setConfirmPassword}
        />

        <Button
          title={"submit"}
          onPress={onSubmitPress}
          disabled={isValid === false}
        />
      </View>
      <View style={styles.bottomBox}></View>
    </View>
  );
}

export { Register };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  form: {
    flex: 0.8,
    padding: 10,
  },
  inputBox: {
    padding: 10,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  bottomBox: {
    flex: 0.2,
  },
  camera: {
    width: "100%",
    height: 200,
  },
  cameraButtonView: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraButton: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },
  profilePicImg: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 50,
  },
});
