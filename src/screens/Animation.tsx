import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';

const Animation = () => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 2000); // İlk resmin 3 saniye gösterilmesi
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/AnimationScreen2.jpg')}
        style={styles.backgroundImage}
      />
      <Animated.Image
        source={require('../assets/images/AnimationScreen1.jpg')}
        style={[styles.backgroundImage, { opacity: fadeAnimation }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Animation;
