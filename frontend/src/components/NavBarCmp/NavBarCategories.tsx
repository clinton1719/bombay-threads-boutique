import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../api/items';
import Error from '../ErrorCmp/Error';
import {
  AllSubCategoriesDesktop,
  AllSubCategoriesMobile,
} from './AllSubCategories';
import MainCategories from './MainCategories';
import SubCategoriesDesktop from './SubCategoriesDesktop';
import SubCategoriesMobile from './SubCategoriesMobile';

/* This component is for displaying all categories of dresses
It displays under the Navigation Bar */

interface NavBarCategoriesProps {
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const NavBarCategories = ({ setShowNav }: NavBarCategoriesProps) => {
  const { category }: Readonly<Params<string>> = useParams();
  const [showSubCategories, setShowSubCategories] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>('');
  const { data, error, isLoading } = useGetAllItemsQuery('getAllItems');

  let categories: Array<string> = [];
  let categoryMap: { [key: string]: Array<string> } = {};

  useEffect(() => {
    if (!category && showSubCategories) {
      setShowNav(false);
      setShowSubCategories(false);
      setCurrentCategory(null);
    }
  }, [showSubCategories, setShowNav, category]);

  if (isLoading) {
    <>
      <span>Loading</span>
    </>;
  } else if (error) {
    return (
      <>
        <Error />
      </>
    );
  } else if (data) {
    categories = data.categories;
    categoryMap = data.categoryMap;
  }
  return (
    <>
      <nav className="mt-8 md:mt-4">
        <ul className="flex flex-col items-center md:flex-row gap-1 md:gap-0">
          {categories &&
            categories.map((category: string, key: number) => {
              return (
                <>
                  <li
                    className={`${
                      !currentCategory
                        ? 'categoryNavBar'
                        : category === currentCategory
                        ? 'categoryNavBarActive'
                        : 'categoryNavBar'
                    }`}
                    key={key}
                  >
                    <MainCategories
                      category={category}
                      currentCategory={currentCategory}
                      showSubCategories={showSubCategories}
                      setCurrentCategory={setCurrentCategory}
                      setShowSubCategories={setShowSubCategories}
                    />
                  </li>

                  <SubCategoriesMobile
                    category={category}
                    currentCategory={currentCategory}
                    categoryMap={categoryMap}
                    showSubCategories={showSubCategories}
                    setShowNav={setShowNav}
                  />
                  <AllSubCategoriesMobile
                    category={category}
                    showSubCategories={showSubCategories}
                    currentCategory={currentCategory}
                    setShowNav={setShowNav}
                  />
                </>
              );
            })}
        </ul>
        <ul className="flex flex-col items-center">
          <SubCategoriesDesktop
            categories={categories}
            categoryMap={categoryMap}
            currentCategory={currentCategory}
            showSubCategories={showSubCategories}
            setCurrentCategory={setCurrentCategory}
            setShowSubCategories={setShowSubCategories}
          />

          <AllSubCategoriesDesktop
            categories={categories}
            currentCategory={currentCategory}
            showSubCategories={showSubCategories}
            setCurrentCategory={setCurrentCategory}
            setShowSubCategories={setShowSubCategories}
          />
        </ul>
      </nav>
    </>
  );
};

export default NavBarCategories;
