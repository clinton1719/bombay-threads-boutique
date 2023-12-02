import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface SubCategoriesDesktopProps {
  categories: Array<string>;
  currentCategory: string | null;
  categoryMap: { [key: string]: Array<string> };
  showSubCategories: boolean;
  setCurrentCategory: Dispatch<SetStateAction<string | null>>;
  setShowSubCategories: Dispatch<SetStateAction<boolean>>;
}

const SubCategoriesDesktop = ({
  categories,
  categoryMap,
  currentCategory,
  showSubCategories,
  setCurrentCategory,
  setShowSubCategories,
}: SubCategoriesDesktopProps) => {
  return (
    <>
      {categories &&
        showSubCategories &&
        categories.map((category: string) => {
          return (
            category === currentCategory &&
            categoryMap &&
            categoryMap![category]?.map((subCategory: string, key: number) => {
              return (
                <li
                  className={`${
                    showSubCategories ? 'subCategoryNavBarForDesktop' : 'hidden'
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
            })
          );
        })}
    </>
  );
};

export default SubCategoriesDesktop;
