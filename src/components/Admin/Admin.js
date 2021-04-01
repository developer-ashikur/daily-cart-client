import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import './Admin.css';
const routes = [
  {
    path: "/manageProduct",
    sidebar: () => <div></div>,
    main: () => <ManageProducts />
  },
  {
    path: "/addProduct",
    sidebar: () => <div></div>,
    main: () => <AddProduct />
  },
  {
    path: "/editProduct",
    sidebar: () => <div></div>,
    main: () => <h2 className='text-success'>Editing Page Coming Soon...</h2>
  },
  {
    path: "/admin",
    sidebar: () => <div></div>,
    main: () => <h2 className='text-success'>Welcome to DAILY CART admin Panel.</h2>
  }
];

export default function Admin() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className='sidebar'
          style={{
            padding: "10px",
            width: "20%",
            background: "#203d37",
            height: '100vh',
            color: '#ddd'
          }}
        >
           <h2>DAILY CART</h2>
          <ul style={{ listStyleType: "none", padding: 0, textDecoration: 'none', fontSize: '18px' }}>
            <li>
              <Link to="/manageProduct"> <img src="https://i.ibb.co/3m4PQBb/grid-1.png" alt=""/> Manage Product</Link>
            </li>
            <li>
              <Link to="/addProduct"><img src="https://i.ibb.co/tLP9hZR/plus-1.png" alt=""/>Add Product</Link>
            </li>
            <li>
              <Link to="/editProduct"><img src="https://i.ibb.co/Yy6tHZn/edit-1.png" alt=""/>Edit Product</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
