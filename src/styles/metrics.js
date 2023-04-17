import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  standardLength: width > height ? width : height,
  mediumScreenWidth: width < 359 && width > 325,
  smallScreenWidth: width < 325,
};

export default metrics;
