import { StyleSheet, View, type ViewProps } from "react-native";

import { Image } from "tamagui";
import { Colors } from "@/constants/Colors";
import { Text } from "@tamagui/core";
import { Icon } from "../Icon";

export type HeaderProps = ViewProps & {};

export function Header({ style, ...otherProps }: HeaderProps) {
  return (
    <View style={styles.container} {...otherProps}>
      <View style={styles.logoContainer}>
        <Image
          objectFit="contain"
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={[styles.title, { color: Colors.default.secondary }]}>
          Tipsplit
        </Text>
      </View>
      <View style={styles.helpIconContainer}>
        <Icon name="help-outline" color={Colors.default.secondary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    // borderColor: "red",
    // borderWidth: 1,
    width: "100%",
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    lineHeight: 29,
  },
  logoContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  logo: {
    height: 90,
    // borderColor: "red",
    // borderWidth: 1,
  },
  helpIconContainer: {
    position: "absolute",
    right: 0,
    top: 30,
  },
});
