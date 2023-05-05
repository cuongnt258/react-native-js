import * as IMAGES from '@assets/images';

export default function ({}) {
  return {
    logo: IMAGES.GORILLA,
    sparkles: {
      topLeft: IMAGES.SPARKLES_TOP_LEFT,
      top: IMAGES.SPARKLES_TOP,
      topRight: IMAGES.SPARKLES_TOP_RIGHT,
      right: IMAGES.SPARKLES_RIGHT,
      bottomRight: IMAGES.SPARKLES_BOTTOM_RIGHT,
      bottom: IMAGES.SPARKLES_BOTTOM,
      bottomLeft: IMAGES.SPARKLES_BOTTOM_LEFT,
    },
    icons: {
      colors: IMAGES.COLORS_WATCH,
      send: IMAGES.SEND,
      translate: IMAGES.TRANSLATE,
    },
  };
}
