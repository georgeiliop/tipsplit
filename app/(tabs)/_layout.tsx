import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.default.secondary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.default.background,
          height: 65,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Entries",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "card-multiple" : "card-multiple-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
