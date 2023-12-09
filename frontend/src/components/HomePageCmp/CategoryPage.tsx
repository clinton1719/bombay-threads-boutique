import { Params, useParams } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../api/items';
import { Item } from '../../utils/interfaces';
import BreadCrumb from '../BreadCrumbCmp/BreadCrumb';
import Card from '../CardCmp/Card';
import Error from '../ErrorCmp/Error';
import Loader from '../LoaderCmp/Loader';

/* This Component is for 
showing individual categories */

const CategoryPage = () => {
  const { data, error, isLoading } = useGetAllItemsQuery('getAllItems');
  const { category, subCategory }: Readonly<Params<string>> = useParams();

  const getItemsByCategories = () => {
    if (isLoading) {
      return (
        <>
          <Loader />
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

      const modifiedList: Array<Item> = data.list.filter(
        (itemInArray: Item) =>
          categories.includes(itemInArray.category.name) &&
          itemInArray.category.name === category &&
          (!subCategory
            ? true
            : subCategory.includes('ALL OF')
            ? true
            : subCategory === itemInArray.subCategory.name)
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
      <BreadCrumb />
      <section className="py-6">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {getItemsByCategories()}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
