import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Contant Us Screen</Text>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: "20%",
    width: "90%",
  },
  content: {
    fontSize: 28,
    fontWeight: "700",
  },
});
