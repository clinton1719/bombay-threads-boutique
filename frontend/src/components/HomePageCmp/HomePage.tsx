import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Item } from '../../utils/interfaces';
import Card from '../CardCmp/Card';
import Error from '../ErrorCmp/Error';

/* This Component is for 
showing home page with all categories */

const HomePage = () => {
  const list: Array<Item> = useSelector(
    (state: RootState) => state.itemSlice.list
  );
  const categories: Array<string> = useSelector(
    (state: RootState) => state.itemSlice.categories
  );
  console.log(categories);
  const getItemsByAllCategories = () => {
    const modifiedList = list.filter((itemInArray: Item) =>
      categories.includes(itemInArray.category)
    );

    if (modifiedList.length > 0) {
      return modifiedList.map((itemInArray: Item, key) => {
        return <Card item={itemInArray} key={key} />;
      });
    } else {
      return (
        <>
          <Error />
        </>
      );
    }
  };

  return (
    <>
      <section className="py-10 bg-bgGray mt-20 md:mt-12">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getItemsByAllCategories()}
        </div>
      </section>
    </>
  );
};

export default HomePage;
