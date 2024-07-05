import React from "react";

function Range() {
  const onVolumeChanged = (event) => {
    const value = Number.parseInt(event.target.value, 10);
    const displayVolumeValueElm = displayVolumeValue.current;

    displayVolumeValueElm.style.setProperty("opacity", 1);
    setTimeout(() => {
      displayVolumeValueElm.style.setProperty("opacity", 0);
    }, 1000);

    setVolumeValue(value);
  };
  return <div></div>;
}

export default Range;
