import { Suspense } from "react";
import Filter from "../Filter/Filter";

export default function Collections() {
  return (
    <Suspense>
      <CollectionList />
    </Suspense>
  );
}

const CollectionList = () => {
  const collections = [
    {
      handle: '',
      title: "All",
      path: "store",
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      updatedAt: new Date().toISOString()
    },
    {
      title: "Classes",
      path: "store/classes",
    },
  ];
  return <Filter list={collections} title="Collections" />;
};
