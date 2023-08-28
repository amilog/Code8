import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';
import WhiteCodeIcon from '../assets/svgs/WhiteCodeIcon';
import GradientCodeIcon from '../assets/svgs/GradientCodeIcon';

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
      <View style={styles.background} />
      <GradientCodeIcon style={styles.centeredIcon0} />
      <Animated.Image
        source={require('../assets/images/Gradient.jpg')}
        style={[styles.backgroundImage, { opacity: fadeAnimation }]}
      />
      <View style={styles.centeredIcon}>
        <WhiteCodeIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  centeredIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -12.5 }, { translateY: -18 }],
    width: 144,
    height: 36,
  },
  centeredIcon0: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -12.5 }, { translateY: -18 }],
    width: 144,
    height: 36,
  },
});

export default Animation;