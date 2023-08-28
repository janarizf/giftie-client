import React, { useEffect, useState, useMemo } from "react";

import { ThemeItem, ThemeItemInfoContainer } from "./List.styled";

const Item = ({ data, ...props }) => {
  return (
    <ThemeItem
      $image={data && data.backgroundimage ? data.backgroundimage : ""}
      {...props}
    >
      <ThemeItemInfoContainer
        $backgroundColor={data.bodycolor || ""}
        $color={data.textcolor || ""}
      >
        {data.name}
      </ThemeItemInfoContainer>
    </ThemeItem>
  );
};

export default React.memo(Item);
