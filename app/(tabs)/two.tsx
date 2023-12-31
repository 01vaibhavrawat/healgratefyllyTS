import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import themeStyles from "@/constants/Colors";

const HomePage: React.FC = ({ navigation }) => {
  const currentDay = 5;

  return (
    <ImageBackground
      source={require("@/assets/images/procrastination.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/procrastination.jpg")}
          style={styles.logo}
        />

        <View style={styles.header}>
          <Text style={styles.headerText}>30-Day Challenge</Text>
          <Text style={styles.dayText}>Day {currentDay}</Text>
        </View>

        <TouchableOpacity style={themeStyles.button}>
          <Text
            onPress={() => navigation.navigate("slider")}
            style={themeStyles.buttonText}
          >
            START NOW!
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly more opaque background
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  dayText: {
    fontSize: 20,
    color: "white",
  },
  buttonContainer: {
    width: "80%",
  },
  studyButton: {
    backgroundColor: "#3498db",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  quizButton: {
    backgroundColor: "#27ae60",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  dayNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  navigationButton: {
    backgroundColor: "#e74c3c",
    padding: 16,
    borderRadius: 12,
    width: "45%",
  },
  navigationButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomePage;
