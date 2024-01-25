import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import { BLOCKS, Block, INLINES, Inline } from '@contentful/rich-text-types';
import { HeroTitle, PageTitle, Text } from '../../components/src/lib/Typography/Typography';
import Image from '../../components/src/lib/Image/Image';
import NextLink from '../../components/src/lib/Link/Link';

const withRichText = (Component: React.FC) => {
return function WithRichText(props: unknown[]) {
    const options = {
      renderNode: {
        [BLOCKS.HEADING_1]: (_node: Block | Inline, children: React.ReactNode) => <HeroTitle>{children}</HeroTitle>,
        [BLOCKS.HEADING_2]: (_node: Block | Inline, children: React.ReactNode) => (
          <PageTitle as="h2">{children}</PageTitle>
        ),
        [BLOCKS.HEADING_3]: (_node: Block | Inline, children: React.ReactNode) => <PageTitle>{children}</PageTitle>,
        [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: React.ReactNode) => <Text size="small">{children}</Text>,
        [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
          // const isExternalLink = node.data.uri && node.data.uri.toLowerCase().indexOf('http') >= 0;
          // const targetLocation = isExternalLink ? '_blank' : '_self';
          return (
            <NextLink href={node.data.uri} rel="noopener noreferrer">{children}</NextLink>
          );
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
          return (
            <Image src={node.data.target.fields.file.url} alt={node.data.target.fields.file.description}/>
          ); 
        }
      },
      renderText: (text: string) => {
        return text.split('\n').reduce((children, textSegment, index) => {
          const transformedText = textSegment.replace(/ {2,}/g, (match) => match.replace(/ /g, '\u00A0'));
          return [...children, index > 0 && <br key={index} />, transformedText];
        }, []);
      },
    };

    const componentProps = {}; 

    Object.keys(props).forEach(prop => {
      if (props[prop]?.nodeType === 'document'){
        return componentProps[prop] = documentToReactComponents(props[prop], options);
      }
      return componentProps[prop] = props[prop]; 
    }); 

    return <Component {...componentProps} />;
  };
};

export default withRichText;