import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "../../theme/theme";
import { BsBookmark } from "react-icons/bs";

export interface TabProps {
  icon: JSX.Element;
  tabs: Array<{
    title: string;
    content: JSX.Element;
  }>;
}

export const Tab: React.FC<TabProps> = ({ icon, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <TabsRoot defaultValue={String(activeTab)}>
      <TabsList>
        {tabs?.map(({ title }, index) => {
          return (
            <TabsTrigger
              key={title}
              value={String(index)}
              onClick={() => handleTabClick(index)}
              css={{
                borderBottomColor: activeTab === index ? "black" : "#0055ff",
              }}
            >
              {!!icon && <BsBookmark size="12" />}
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <TabsContent value={String(activeTab)}>
        {tabs[activeTab]?.content}
      </TabsContent>
    </TabsRoot>
  );
};

const TabsRoot = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
});

const TabsList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: "1px solid #F0F0F0",
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 12px",
  height: 45,
  //   flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: "$neutral_gray40",
  userSelect: "none",
  "&:first-child": { borderTopLeftRadius: 6 },
  "&:last-child": { borderTopRightRadius: 6 },
  "&:hover": { color: "$primary_blue50", cursor: "pointer" },
  '&[data-state="active"]': {
    color: "$primary_blue50",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },

  variants: {
    btnIcon: {
      true: {
        display: "flex",
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20,
        svg: {
          marginRight: 8,
        },
      },
    },
  },
});

const TabsContent = styled(Tabs.Content, {
  flexGrow: 1,
  padding: "1.25rem 0.25rem",
  backgroundColor: "white",
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  // "&:focus": { boxShadow: `0 0 0 2px black` },
});
