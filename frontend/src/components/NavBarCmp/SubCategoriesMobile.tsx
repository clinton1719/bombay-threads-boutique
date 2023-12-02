import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

interface SubCategoriesMobileProps {
  category: string;
  currentCategory: string | null;
  categoryMap: { [key: string]: Array<string> };
  showSubCategories: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

const SubCategoriesMobile = ({
  category,
  currentCategory,
  categoryMap,
  showSubCategories,
  setShowNav,
}: SubCategoriesMobileProps) => {
  return (
    <>
      {category === currentCategory &&
        categoryMap &&
        categoryMap![category]?.map((subCategory: string, key: number) => {
          return (
            <li
              className={`${
                showSubCategories ? 'subCategoryNavBarForMobile' : 'hidden'
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
        })}
    </>
  );
};

export default SubCategoriesMobile;
