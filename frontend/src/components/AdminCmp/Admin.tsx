import { Link, NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <div className="max-w-xs mx-auto mt-16 text-center">
        <span className="text-xl font-extrabold tracking-wider drop-shadow-md">
          Admin Dashboard
        </span>
      </div>

      <div className="adminDashboard">
        <Link
          className="btn-primary flex items-center justify-center"
          to={'/admin/addItem'}
        >
          Add Item
        </Link>
        <NavLink
          className="btn-primary flex items-center justify-center"
          to={'add-category'}
        >
          Add Category
        </NavLink>
        <NavLink
          className="btn-primary flex items-center justify-center"
          to={'add-sub-category'}
        >
          Add Sub-Category
        </NavLink>
      </div>
    </>
  );
};

export default Admin;
