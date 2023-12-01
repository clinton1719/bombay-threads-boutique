import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';

/* This component is for displaying all main categories of dresses */

interface MainCategoriesProps {
  category: string;
  currentCategory: string | null;
  showSubCategories: boolean;
  setCurrentCategory: Dispatch<SetStateAction<string | null>>;
  setShowSubCategories: Dispatch<SetStateAction<boolean>>;
}

const MainCategories = ({
  category,
  currentCategory,
  showSubCategories,
  setCurrentCategory,
  setShowSubCategories,
}: MainCategoriesProps) => {
  return (
    <>
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
    </>
  );
};

export default MainCategories;
