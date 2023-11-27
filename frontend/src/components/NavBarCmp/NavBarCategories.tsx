import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

/* This component is for displaying all categories of dresses
It displays under the Navigation Bar */

interface NavBarCategoriesProps {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarCategories = ({ showNav, setShowNav }: NavBarCategoriesProps) => {
  const categories: Array<string> = useSelector(
    (state: RootState) => state.itemSlice.categories
  );
  return (
    <>
      <nav className="mt-8 md:mt-4">
        <ul className="flex flex-col items-center lg:flex-row gap-1 lg:gap-0">
          {categories.map((category, key) => {
            return (
              <li className="subCategoryNavBar" key={key}>
                <Link
                  to={`/category/${category}`}
                  className="a"
                  onClick={() => {
                    setShowNav(!showNav);
                  }}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarCategories;
