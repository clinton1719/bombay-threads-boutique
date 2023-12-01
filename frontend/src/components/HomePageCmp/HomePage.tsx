import { useGetAllItemsQuery } from '../../api/items';
import { Item } from '../../utils/interfaces';
import Card from '../CardCmp/Card';
import Error from '../ErrorCmp/Error';

/* This Component is for 
showing home page with all categories */

const HomePage = () => {
  const { data, error, isLoading } = useGetAllItemsQuery('getAllItems');
  const getItemsByAllCategories = () => {
    if (isLoading) {
      return (
        <>
          <span>Loading</span>
        </>
      );
    } else if (error) {
      return (
        <>
          <Error />
        </>
      );
    } else if (data) {
      const categories: Array<string> = data.categories;

      const modifiedList: Array<Item> = data.list.filter((itemInArray: Item) =>
        categories.includes(itemInArray.category.name)
      );

      if (modifiedList.length > 0) {
        return modifiedList.map((itemInArray: Item, key: number) => {
          return <Card item={itemInArray} key={key} />;
        });
      } else {
        return (
          <>
            <Error />
          </>
        );
      }
    }
  };

  return (
    <>
      <section className="py-10 mt-6 md:mt-4">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getItemsByAllCategories()}
        </div>
      </section>
    </>
  );
};

export default HomePage;
