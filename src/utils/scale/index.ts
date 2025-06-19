import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const BASE_WIDTH = 375;

export function scaleSize(size: number) {
  return (SCREEN_WIDTH / BASE_WIDTH) * size;
}
