

import { getActiveStyle }  from './orientationUtils';

module.exports = {

  getStyleByOrientation(style, orientation){

    const getStyle = (styleObj) => getActiveStyle(styleObj, orientation);

    const resolvedStyle = Array.isArray(style)? style.map(getStyle): getStyle(style);

    return resolvedStyle;
 } 
}
