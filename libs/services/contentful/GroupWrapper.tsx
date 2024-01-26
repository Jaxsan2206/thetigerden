import React from 'react'
import Group from '../../components/src/lib/Group/Group';
import PriceCard from '../../components/src/lib/PriceCard/PriceCard';
import withRichText from '../helpers/withRichText';

const PriceCardWithRichText = withRichText(PriceCard)

const GroupWrapper = ({ content, title, componentsPerRow }) => {
  console.log('content', content)
  return (
    <Group title={title} componentsPerRow={componentsPerRow}>
      {content.map((child) => <PriceCardWithRichText {...child} />)}
    </Group>
  );
};

export default GroupWrapper;