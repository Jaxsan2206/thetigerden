import { Box } from '../../../FlexBox/FlexBox';
import { Text } from '../../../Typography/Typography';
import FilterItem from './FilterItem';
import { SortFilterItem } from './constants';
// import FilterItemDropdown from './dropdown';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };


const Filter = ({ list, title }: { list: ListItem[]; title?: string }) => {

  return (
    <Box>
        {title && <Text>{title}</Text>}
        <FilterItemList list={list} />
    </Box>
  );
}

const FilterItemList = ({ list }: { list: ListItem[] }) => {
    return (
      <>
        {list.map((item: ListItem, i) => <FilterItem key={i} item={item} />)}
      </>
    );
  }
  
  
export default Filter; 
