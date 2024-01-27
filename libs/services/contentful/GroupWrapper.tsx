import React from "react";
import Group from "../../components/src/lib/Group/Group";
import { componentMapper } from "./ComponentGenerator";
import { IButtonProps } from "../../components/src/lib/Button/Button.interface";

interface IGroupWrapper {
  content: any[];
  title: string;
  componentsPerRow: 1 | 2 | 3 | 4 | 6;
  cta: IButtonProps
}

const GroupWrapper: React.FC<React.PropsWithChildren<IGroupWrapper>> = ({
  content,
  title,
  componentsPerRow,
  cta
}) => {
  return (
    <Group title={title} componentsPerRow={componentsPerRow} cta={cta}>
      {content.map((child: any) => {
        const contentType = child.contentType;
        const Component = componentMapper?.[contentType];
        return <Component {...child} />;
      })}
    </Group>
  );
};

export default GroupWrapper;