import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>About Screen</Text>
    </View>
  );
};

export default About;

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
