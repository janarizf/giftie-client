import React, { useState } from "react";
import { CustomTab, CustomTabs } from "../../../../shared";
import { TabContainer, FullHeightWrap } from "./Lists.styled";
import ItemLinkList from "./ItemLinkList/ItemLinkList";
import ListLinkList from "./ListLinkList/ListLinkList";

const LinkTabs = [
  {
    name: "item",
    label: "Manage Item Link",
    component: <ItemLinkList />
  },
  {
    name: "list",
    label: "Manage List Link",
    component: <ListLinkList />
  }
];

const Lists = () => {
  const [tab, setTab] = useState("item");
  return (
    <FullHeightWrap>
      <CustomTabs
        id='controlled-tab-example'
        
        activeKey={tab}
        onSelect={(k) => setTab(k)}
      >
        {LinkTabs.map((item) => (
          <CustomTab eventKey={item.name} title={item.label}>
            <TabContainer>{item.component}</TabContainer>
          </CustomTab>
        ))}
      </CustomTabs>
    </FullHeightWrap>
  );
};

export default Lists;
