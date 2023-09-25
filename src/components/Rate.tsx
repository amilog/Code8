import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import PointItem from "./PointItem";

type RateProps = {
  value: number; // Initial rating value
  onChange: (rating: number) => void;
};

const Rate: React.FC<RateProps> = ({ value, onChange }) => {
  const [starRating, setStarRating] = useState(value);

  useEffect(() => {
    setStarRating(value);
  }, [value]);

  const handleStarPress = (rating: number) => {
    setStarRating(rating);
    onChange(rating); // Call the onChange prop with the selected rating
  };

  return (
    <SafeAreaView>
      <View style={styles.stars}>
        <TouchableOpacity onPress={() => handleStarPress(1)}>
          <PointItem isSelect={starRating >= 1 ? true : false} index="1" />
          <Text style={styles.text}>Çox pis</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStarPress(2)}>
          <PointItem isSelect={starRating >= 2 ? true : false} index="2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStarPress(3)}>
          <PointItem isSelect={starRating >= 3 ? true : false} index="3" />
          <Text style={styles.text}>Orta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStarPress(4)}>
          <PointItem isSelect={starRating >= 4 ? true : false} index="4" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStarPress(5)}>
          <PointItem isSelect={starRating >= 5 ? true : false} index="5" />
          <Text
            style={[
              styles.text,
              { position: "absolute", right: -8, bottom: 0, width: 70 },
            ]}
          >
            Çox yaxşı
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starUnselected: {
    color: "#aaa",
  },
  starSelected: {
    color: "#ffb300",
  },
  text: {
    marginTop: 6,
    color: "#868686",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14,
    textAlign: "center",
  },
});
