import { useState } from "react";

const ColorandSizeHook = (size, color) => {
  const defaultSize = size && size.length > 0 ? size[0] : null;
  const defaultColor = color && color.length > 0 ? color[0] : null;

  const [isColor, setColor] = useState(defaultColor);
  const [isSize, setSize] = useState(defaultSize);

  return {
    isColor,
    setColor,
    isSize,
    setSize,
  };
};

export default ColorandSizeHook;
