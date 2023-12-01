import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavLink, Params, useParams } from 'react-router-dom';
import { useGetAllItemsQuery } from '../../api/items';
import Error from '../ErrorCmp/Error';

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
  let categoryMap: { [key: string]: Array<string> };

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
                    <NavLink
                      to={`/category/${category}`}
                      className="a"
                      onClick={() => {
                        if (!currentCategory) {
                          setCurrentCategory(category);
                          setShowSubCategories(true);
                        } else if (category === currentCategory) {
                          setShowSubCategories(!showSubCategories);
                          setCurrentCategory(null);
                        } else {
                          setCurrentCategory(category);
                          setShowSubCategories(true);
                        }
                      }}
                    >
                      {category}
                    </NavLink>
                  </li>
                  {category === currentCategory &&
                    categoryMap &&
                    categoryMap![category]?.map(
                      (subCategory: string, key: number) => {
                        return (
                          <li
                            className={`${
                              showSubCategories
                                ? 'subCategoryNavBarForMobile'
                                : 'hidden'
                            }`}
                            key={key}
                          >
                            <NavLink
                              to={`/category/${category}/${subCategory}`}
                              className="a"
                              onClick={() => {
                                setShowNav(false);
                              }}
                            >
                              {subCategory}
                            </NavLink>
                          </li>
                        );
                      }
                    )}
                  {category === currentCategory && (
                    <div
                      className={`${
                        showSubCategories
                          ? 'allItemsSubCategoryForMobile'
                          : 'hidden'
                      }`}
                    >
                      <NavLink
                        to={`/category/${category}`}
                        className="a"
                        onClick={() => {
                          setShowNav(false);
                        }}
                      >
                        All of {category}
                      </NavLink>
                    </div>
                  )}
                </>
              );
            })}
        </ul>
        <ul className="flex flex-col items-center">
          {categories &&
            showSubCategories &&
            categories.map((category: string) => {
              return (
                category === currentCategory &&
                categoryMap &&
                categoryMap![category]?.map(
                  (subCategory: string, key: number) => {
                    return (
                      <li
                        className={`${
                          showSubCategories
                            ? 'subCategoryNavBarForDesktop'
                            : 'hidden'
                        }`}
                        key={key}
                      >
                        <NavLink
                          to={`/category/${category}/${subCategory}`}
                          className="a"
                          onClick={() => {
                            setShowSubCategories(false);
                            setCurrentCategory(null);
                          }}
                        >
                          {subCategory}
                        </NavLink>
                      </li>
                    );
                  }
                )
              );
            })}
          {categories &&
            showSubCategories &&
            categories.map((category: string) => {
              return (
                category === currentCategory && (
                  <div
                    className={`${
                      showSubCategories
                        ? 'allItemsSubCategoryForDesktop'
                        : 'hidden'
                    }`}
                  >
                    <NavLink
                      to={`/category/${category}`}
                      className="a"
                      onClick={() => {
                        setShowSubCategories(false);
                        setCurrentCategory(null);
                      }}
                    >
                      All of {category}
                    </NavLink>
                  </div>
                )
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarCategories;
