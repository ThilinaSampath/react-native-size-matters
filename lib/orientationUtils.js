  //Check if style class has orientation styles
  const isResponsive = (style) => {
    return typeof style === 'object' && (
      'landscape' in style ||
      'portrait' in style
    );
  }
  

  //Return relevant styles for the passed orientation
  const getActiveStyle = (style, orientation) => {

    if (!style || typeof style === 'number' || !isResponsive(style)) {
      return style;
    }
  
    let orientationVal = orientation === 'LANDSCAPE' ? 'landscape' : 'portrait';
  
    const { landscape, portrait, ...rest } = style;
    const activeStyle = style[orientationVal];
  
    if (typeof activeStyle === 'object') {
      return { ...rest, ...activeStyle };
    } else {
      return rest;
    }
  }


  export { isResponsive, getActiveStyle };