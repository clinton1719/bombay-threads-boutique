import { useSelector } from 'react-redux';
import { Params, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { Item } from '../../utils/interfaces';
import Card from '../CardCmp/Card';
import Error from '../ErrorCmp/Error';

/* This Component is for 
showing individual categories */

const CategoryPage = () => {
  const list: Array<Item> = useSelector(
    (state: RootState) => state.itemSlice.list
  );
  const categories: Array<string> = useSelector(
    (state: RootState) => state.itemSlice.categories
  );
  const { category }: Readonly<Params<string>> = useParams();
  const getItemsByCategories = () => {
    const modifiedList = list.filter(
      (itemInArray: Item) =>
        categories.includes(itemInArray.category) &&
        itemInArray.category === category
    );

    if (modifiedList.length > 0) {
      return modifiedList;
    } else {
      return null;
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
