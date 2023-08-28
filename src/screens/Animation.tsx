import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';
import WhiteCodeIcon from '../assets/svgs/WhiteCodeIcon';
import GradientCodeIcon from '../assets/svgs/GradientCodeIcon';
import Code8Text from '../assets/svgs/Code8Text';
import FromCodeText from '../assets/svgs/FromCodeText';

const Animation = () => {
  const [fadeAnimation] = useState(new Animated.Value(0));
  const [iconOpacity] = useState(new Animated.Value(0));
  const [textTranslateX] = useState(new Animated.Value(-300));
  const [textOpacity] = useState(new Animated.Value(0));
  const [fromCodeTextTranslateY] = useState(new Animated.Value(-30)); // Initial position for FromCodeText
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

        // Icon animation
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: totalAnimationDuration,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();

        // Text animation
        setTimeout(() => {
          Animated.timing(textTranslateX, {
            toValue: 1,
            duration: totalAnimationDuration * 1.5,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();

          // Text opacity animation
          Animated.timing(textOpacity, {
            toValue: 1,
            duration: totalAnimationDuration * 5,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();

          // FromCodeText animation
          Animated.timing(fromCodeTextTranslateY, {
            toValue: 0,
            duration: totalAnimationDuration * 1.5,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }, 500);
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
      <Animated.View style={[styles.centeredIcon, { opacity: iconOpacity }]}>
        <WhiteCodeIcon />
      </Animated.View>
      <Animated.View
        style={[
          styles.centeredText,
          {
            transform: [{ translateX: textTranslateX }],
            opacity: textOpacity,
          },
        ]}
      >
        <Code8Text />
      </Animated.View>
      <Animated.View
        style={[
          styles.fromCodeTextContainer,
          {
            transform: [{ translateY: fromCodeTextTranslateY }],
          },
        ]}
      >
        <FromCodeText />
      </Animated.View>
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
    transform: [{ translateX: -12.5 }, { translateY: -5 }],
    width: 144,
    height: 36,
  },
  centeredIcon0: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -12.5 }, { translateY: -5 }],
    width: 144,
    height: 36,
  },
  centeredText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 117,
    height: 26.28,
  },
  fromCodeTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [ { translateY: 50 }],
    width: 136,
    height: 13,
  },
});

export default Animation;
