import React from "react";

import { ThemeItem } from "./List.styled";
import placeholderImage from "../../../../img/giftie_logo.png";

const Item = ({ data }) => {
  return (
    <ThemeItem
      style={{
        backgroundImage:
          data && data.backgroundImage ? data.backgroundImage : placeholderImage
      }}
    />
  );
};

export default React.memo(Item);
