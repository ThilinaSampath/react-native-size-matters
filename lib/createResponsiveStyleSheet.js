
import { StyleSheet } from 'react-native';
import { isResponsive }  from './orientationUtils';

module.exports = {
  //return responsive and standard styles
   createResponsiveStyleSheet(styles){
    const standard = {};
    const responsive = {};
  
    for (const styleName in styles) {
      if (styles.hasOwnProperty(styleName)) {
        const style = styles[styleName];
        if (isResponsive(style)) {
          responsive[styleName] = style;
        } else {
          standard[styleName] = style;
        }
      }
    }
  
    return {
      ...StyleSheet.create(standard),
      ...responsive
    };
  }
}
