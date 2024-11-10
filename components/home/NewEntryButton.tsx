import { StyleSheet, View, type ViewProps } from "react-native";

import { Button, Image } from "tamagui";
import { Colors } from "@/constants/Colors";
import { Text } from "@tamagui/core";
import { Icon } from "../Icon";

export type NewEntryButton = ViewProps & {};

export function NewEntryButton({ style, ...otherProps }: NewEntryButton) {
  return (
    <View style={styles.container} {...otherProps}>
      <Button
        style={styles.button}
        backgroundColor={Colors.default.secondary}
        size={"$20"}
        paddingHorizontal={40}
        pressStyle={{
          backgroundColor: Colors.default.darkSecondary,
        }}
      >
        <View style={styles.buttonContentWrapper}>
          <Text
            fontSize={27}
            color={Colors.default.primaryNeutral}
            fontWeight="bold"
            textAlign="center"
            numberOfLines={2}
            style={styles.buttonText}
          >
            Start a new entry of monthly tips
          </Text>
          <View style={styles.iconContainer}>
            <Icon
              size={52}
              name="add-to-photos"
              color={Colors.default.primaryNeutral}
            />
          </View>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    // paddingLeft: 40,
    // paddingRight: 40,
  },
  buttonContentWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  buttonText: {
    width: "100%",
  },
  iconContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
});
