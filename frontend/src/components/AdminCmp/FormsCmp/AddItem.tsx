import { Link } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../../api/items';
import Loader from '../../LoaderCmp/Loader';
import Error from '../../ErrorCmp/Error';
import { ItemsList } from '../../../utils/interfaces';

const AddItem = () => {
  const { data, error, isLoading } = useGetAllItemsQuery('getAllItems');
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
  } else {
    if (data && data.categories && data.subCategories) {
      return <AddItemComponent data={data} />;
    } else {
      return (
        <>
          <Error />
        </>
      );
    }
  }
};

const AddItemComponent = ({ data }: { data: ItemsList }) => {
  return (
    <>
      <div className="max-w-xs mx-auto mt-20 text-center">
        <Link to={'/admin'} className="btn-primary">
          Admin Dashboard
        </Link>
      </div>

      <form className="addItemDashBoard">
        <span className="block text-lg font-bold mb-6 text-center uppercase">
          Add Item
        </span>
        <div className="flex flex-wrap -mx-3 mb-2">
          {/* INPUT FIELD */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block mb-2">Name</label>
            <input
              className="block"
              type="text"
              placeholder="Add name of the item"
            />
          </div>
          {/* INPUT FIELD */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block mb-2">Rating</label>
            <input
              className="block"
              type="number"
              placeholder="Add rating of the item"
            />
          </div>
          {/* INPUT FIELD */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block mb-2">Price</label>
            <input
              className="block"
              type="text"
              placeholder="Add price of the item"
            />
          </div>
          {/* SELECT FIELD */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                {data.categories.map((category: string) => {
                  return <option>{category}</option>;
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {/* SELECT FIELD */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                {data.subCategories.map((subCategory: string) => {
                  return <option>{subCategory}</option>;
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItem;
