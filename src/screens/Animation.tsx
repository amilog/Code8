import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';

const Animation = () => {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const totalAnimationDuration = 300;
  const initialImageDuration = 800;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: totalAnimationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        fadeAnimation.setValue(1);
      });
    }, initialImageDuration);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/AnimationScreen1.jpg')}
        style={styles.backgroundImage}
      />
      <Animated.Image
        source={require('../assets/images/AnimationScreen2.jpg')}
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
