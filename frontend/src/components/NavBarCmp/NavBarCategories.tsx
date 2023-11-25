import { Link } from 'react-router-dom';

/* This component is for displaying all categories of dresses
It displays under the Navigation Bar */

const NavBarCategories = () => {
  return (
    <>
      <nav className="mt-8 lg:mt-2">
        <ul className="flex flex-col items-center lg:flex-row gap-1 lg:gap-0">
          <li className="subCategoryNavBar">
            <Link to={'men'} className="a">
              Men
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Women
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Kids
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Accessories
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Decor
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Linens
            </Link>
          </li>
          <li className="subCategoryNavBar">
            <Link to={'#'} className="a">
              Bestselling
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarCategories;
