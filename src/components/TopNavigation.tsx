import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import SvgFocusedTab from "../assets/icons/FocusedNavigation";

const HorizontalTabBar = ({
  tabs,
  focusedItem,
  setFocusedItem,
}: {
  tabs: string[];
  focusedItem: string;
  setFocusedItem: (item: string) => void;
}) => {
  const isTabFocused = (tab: string) => focusedItem === tab;

  const renderItem = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        onPress={() => setFocusedItem(item)}
        style={[
          styles.tabButton,
          { width: Dimensions.get("window").width / tabs.length },
        ]}
      >
        <Text
          style={[
            styles.tabText,
            { color: isTabFocused(item) ? "#6750A4" : "#49454F" },
          ]}
        >
          {item}
        </Text>
        {isTabFocused(item) && (
          <View style={styles.focusedIndicator}>
            <SvgFocusedTab />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.container}
      horizontal
      data={tabs}
      extraData={tabs}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tabButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  focusedIndicator: {
    position: "absolute",
    bottom: -9,
  },
});

export default HorizontalTabBar;
