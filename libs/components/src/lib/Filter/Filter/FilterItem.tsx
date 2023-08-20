import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "../Search/Search";
import { PathFilterItem } from "./Filter";
import { SortFilterItem } from "./constants";
import { Flex } from "../../FlexBox/FlexBox";
import { Text } from "../../Typography/Typography";

const FilterItem: React.FC<any> = ({ item }: { item: any }) => {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
};

const PathFilterItem = ({ item }: { item: PathFilterItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? "p" : Link;
  newParams.delete("q");

  return (
    <Flex flexDirection={"column"}>
      <DynamicTag href={createUrl(item.path, newParams)}>
        {item.title}
      </DynamicTag>
    </Flex>
  );
};

const SortFilterItem = ({ item }: { item: SortFilterItem }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("sort") === item.slug;
  const q = searchParams.get("q");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? Text : Link;

  return (
    <Flex flexDirection={"column"}>
      <DynamicTag prefetch={!active ? false : undefined} href={href}>
        {item.title}
      </DynamicTag>
    </Flex>
  );
};

export default FilterItem;
