import { Params, useParams } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../api/items';
import { Item } from '../../utils/interfaces';
import Card from '../CardCmp/Card';
import Error from '../ErrorCmp/Error';

/* This Component is for 
showing individual categories */

const CategoryPage = () => {
  const { data, error, isLoading } = useGetAllItemsQuery('getAllItems');
  const { category }: Readonly<Params<string>> = useParams();
  const getItemsByCategories = () => {
    if (isLoading) {
      return undefined;
    } else if (error) {
      return undefined;
    } else if (data) {
      const categories = data.categories;

      const modifiedList = data.list.filter(
        (itemInArray: Item) =>
          categories.includes(itemInArray.category) &&
          itemInArray.category === category
      );

      if (modifiedList.length > 0) {
        return modifiedList;
      } else {
        return null;
      }
    }
  };

  return (
    <>
      {getItemsByCategories() === null ? (
        <Error />
      ) : (
        <section className="py-10 bg-bgGray mt-20 md:mt-12">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {getItemsByCategories()!.map((itemInArray: Item, key: number) => {
              return <Card item={itemInArray} key={key} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryPage;
