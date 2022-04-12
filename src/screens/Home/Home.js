import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giving Control to Creators</Text>
      <Text style={styles.content}>Connecting Creators & Consumers</Text>
      <Text>
        Let your followers buy directly from your videos and interact with you
        live
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: "20%",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
  },
  content: {
    fontSize: 24,
    fontWeight: "500",
  },
});
