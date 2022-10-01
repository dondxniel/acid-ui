const baseClass = ' animate__animated animate__';
const classes = {
  delay: {
    0: '',
    2: 'animate__delay-2s',
    3: 'animate__delay-3s',
    4: 'animate__delay-4s',
    5: 'animate__delay-5s',
  },
  speed: {
    normal: '',
    slow: 'animate__slow',
    slower: 'animate__slower',
    fast: 'animate__fast',
    faster: 'animate__faster',
  },
  repeat: {
    0: '',
    1: 'animate__repeat-1',
    2: 'animate__repeat-2',
    3: 'animate__repeat-3',
    infinite: 'animate__infinite',
  },
  attentionSeekers: {
    bounceIn: `${baseClass}bounceIn`,
    flash: `${baseClass}flash`,
    pulse: `${baseClass}pulse`,
    rubberBand: `${baseClass}rubberBand`,
    shakeX: `${baseClass}shakeX`,
    shakeY: `${baseClass}shakeY`,
    headShake: `${baseClass}headShake`,
    swing: `${baseClass}swing`,
    tada: `${baseClass}tada`,
    wobble: `${baseClass}wobble`,
    jello: `${baseClass}jello`,
    heartBeat: `${baseClass}heartBeat`,
    flip: `${baseClass}flip`,
  },
  entrances: {
    // specials
    specialsJackInTheBox: `${baseClass}jackInTheBox`,
    specialsRollIn: `${baseClass}rollIn`,
    // back
    backInDown: `${baseClass}backInDown`,
    backInLeft: `${baseClass}backInLeft`,
    backInRight: `${baseClass}backInRight`,
    backInUp: `${baseClass}backInUp`,
    // bounce
    bounceIn: `${baseClass}bounceIn`,
    bounceInDown: `${baseClass}bounceInDown`,
    bounceInLeft: `${baseClass}bounceInLeft`,
    bounceInRight: `${baseClass}bounceInRight`,
    bounceInUp: `${baseClass}bounceInUp`,
    // fade
    fadeIn: `${baseClass}fadeIn`,
    fadeInDown: `${baseClass}fadeInDown`,
    fadeInDownBig: `${baseClass}fadeInDownBig`,
    fadeInLeft: `${baseClass}fadeInLeft`,
    fadeInLeftBig: `${baseClass}fadeInLeftBig`,
    fadeInRight: `${baseClass}fadeInRight`,
    fadeInRightBig: `${baseClass}fadeInRightBig`,
    fadeInUp: `${baseClass}fadeInUp`,
    fadeInUpBig: `${baseClass}fadeInUpBig`,
    fadeInTopLeft: `${baseClass}fadeInTopLeft`,
    fadeInTopRight: `${baseClass}fadeInTopRight`,
    fadeInBottomLeft: `${baseClass}fadeInBottomLeft`,
    fadeInBottomRight: `${baseClass}fadeInBottomRight`,
    // flip
    flipInX: `${baseClass}flipInX`,
    flipInY: `${baseClass}flipInY`,
    // lightSpeed
    lightSpeedInRight: `${baseClass}lightSpeedInRight`,
    lightSpeedInLeft: `${baseClass}lightSpeedInLeft`,
    // rotate
    rotateIn: `${baseClass}rotateIn`,
    rotateInDownLeft: `${baseClass}rotateInDownLeft`,
    rotateInDownRight: `${baseClass}rotateInDownRight`,
    rotateInUpLeft: `${baseClass}rotateInUpLeft`,
    rotateInUpRight: `${baseClass}rotateInUpRight`,
    // zoom
    zoomIn: `${baseClass}zoomIn`,
    zoomInUp: `${baseClass}zoomInUp`,
    zoomInDown: `${baseClass}zoomInDown`,
    zoomInLeft: `${baseClass}zoomInLeft`,
    zoomInRight: `${baseClass}zoomInRight`,
    // slide
    slideInDown: `${baseClass}slideInDown`,
    slideInLeft: `${baseClass}slideInLeft`,
    slideInRight: `${baseClass}slideInRight`,
    slideInUp: `${baseClass}slideInUp`,
  },
  exits: {
    // specials
    specialsHinge: `${baseClass}hinge`,
    specialsRollOut: `${baseClass}rollOut`,
    // back
    backOutDown: `${baseClass}backOutDown`,
    backOutLeft: `${baseClass}backOutLeft`,
    backOutRight: `${baseClass}backOutRight`,
    backOutUp: `${baseClass}backOutUp`,
    // bounce
    bounceOut: `${baseClass}bounceOut`,
    bounceOutDown: `${baseClass}bounceOutDown`,
    bounceOutLeft: `${baseClass}bounceOutLeft`,
    bounceOutRight: `${baseClass}bounceOutRight`,
    bounceOutUp: `${baseClass}bounceOutUp`,
    // fade
    fadeOut: `${baseClass}fadeOut`,
    fadeOutDown: `${baseClass}fadeOutDown`,
    fadeOutDownBig: `${baseClass}fadeOutDownBig`,
    fadeOutLeft: `${baseClass}fadeOutLeft`,
    fadeOutLeftBig: `${baseClass}fadeOutLeftBig`,
    fadeOutRight: `${baseClass}fadeOutRight`,
    fadeOutRightBig: `${baseClass}fadeOutRightBig`,
    fadeOutUp: `${baseClass}fadeOutUp`,
    fadeOutUpBig: `${baseClass}fadeOutUpBig`,
    fadeOutTopLeft: `${baseClass}fadeOutTopLeft`,
    fadeOutTopRight: `${baseClass}fadeOutTopRight`,
    fadeOutBottomLeft: `${baseClass}fadeOutBottomLeft`,
    fadeOutBottomRight: `${baseClass}fadeOutBottomRight`,
    // flip
    flipOutX: `${baseClass}flipOutX`,
    flipOutY: `${baseClass}flipOutY`,
    // lightSpeed
    lightSpeedOutRight: `${baseClass}lightSpeedOutRight`,
    lightSpeedOutLeft: `${baseClass}lightSpeedOutLeft`,
    // rotate
    rotateOut: `${baseClass}rotateOut`,
    rotateOutDownLeft: `${baseClass}rotateOutDownLeft`,
    rotateOutDownRight: `${baseClass}rotateOutDownRight`,
    rotateOutUpLeft: `${baseClass}rotateOutUpLeft`,
    rotateOutUpRight: `${baseClass}rotateOutUpRight`,
    // zoom
    zoomOut: `${baseClass}zoomOut`,
    zoomOutUp: `${baseClass}zoomOutUp`,
    zoomOutDown: `${baseClass}zoomOutDown`,
    zoomOutLeft: `${baseClass}zoomOutLeft`,
    zoomOutRight: `${baseClass}zoomOutRight`,
    // slide
    slideOutDown: `${baseClass}slideOutDown`,
    slideOutLeft: `${baseClass}slideOutLeft`,
    slideOutRight: `${baseClass}slideOutRight`,
    slideOutUp: `${baseClass}slideOutUp`,
  },
};
export default classes;
