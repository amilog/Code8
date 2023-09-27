import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const actualWidth = width > height ? height : width;
const actualHeight = width > height ? width : height;

const heightRem = actualHeight / 926;

const Metrics = {
  WIDTH: actualWidth,
  HEIGHT: actualHeight,
  rem: heightRem,
  heightRem,
};

export default Metrics;