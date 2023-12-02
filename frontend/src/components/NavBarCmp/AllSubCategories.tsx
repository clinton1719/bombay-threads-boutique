import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface AllSubCategoriesMobileProps {
  category: string;
  showSubCategories: boolean;
  currentCategory: string | null;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const AllSubCategoriesMobile = ({
  category,
  showSubCategories,
  currentCategory,
  setShowNav,
}: AllSubCategoriesMobileProps) => {
  return (
    <>
      {category === currentCategory && (
        <div
          className={`${
            showSubCategories ? 'allItemsSubCategoryForMobile' : 'hidden'
          }`}
        >
          <NavLink
            to={`/category/${category}`}
            className="a"
            onClick={() => {
              setShowNav(false);
            }}
          >
            ALL OF {category}
          </NavLink>
        </div>
      )}
    </>
  );
};

interface AllSubCategoriesDesktopProps {
  categories: Array<string>;
  currentCategory: string | null;
  showSubCategories: boolean;
  setCurrentCategory: Dispatch<SetStateAction<string | null>>;
  setShowSubCategories: Dispatch<SetStateAction<boolean>>;
}

const AllSubCategoriesDesktop = ({
  categories,
  currentCategory,
  showSubCategories,
  setCurrentCategory,
  setShowSubCategories,
}: AllSubCategoriesDesktopProps) => {
  return (
    <>
      {categories &&
        showSubCategories &&
        categories.map((category: string) => {
          return (
            category === currentCategory && (
              <div
                className={`${
                  showSubCategories ? 'allItemsSubCategoryForDesktop' : 'hidden'
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
                  ALL OF {category}
                </NavLink>
              </div>
            )
          );
        })}
    </>
  );
};

export { AllSubCategoriesDesktop, AllSubCategoriesMobile };
