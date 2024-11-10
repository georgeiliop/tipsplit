import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button, View } from "tamagui";
import { Header } from "@/components/home/Header";
import { NewEntryButton } from "@/components/home/NewEntryButton";

export default function HomeScreen() {
  return (
    <ParallaxScrollView

    // headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    // headerImage={
    //   <Image
    //     source={require("@/assets/images/partial-react-logo.png")}
    //     style={styles.reactLogo}
    //   />
    // }
    >
      <Header />
      <View style={styles.contentContainer}>
        <NewEntryButton />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  contentContainer: {
    // borderColor: "red",
    // borderWidth: 1,
  },
});
