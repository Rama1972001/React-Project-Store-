import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./Styles/mixins.scss"
import React from 'react';

import Products from "./Pages/Products/Products"

import NavBar from "./Components/NavBar/NavBar";
import CustomModal from "./Components/CustomModal/CustomModal";
import { GlobalContext } from './Utils/Contexts';
import { Modal } from 'bootstrap';
import Category from "./Pages/Category/Category";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Components/Layout/Layout";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { mappCategory } from "./Pages/Category/utils";
import { FetchData } from "./Utils/ApiUtils";

class App extends React.Component {


  render() {
    // return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Category />} />
          <Route path={'/product'} element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter >
    // );

    // const router = createBrowserRouter([
    //   {
    //     element: <Layout />,
    //     children: [
    //       {
    //         path: '/',
    //         element: <Category />
    //       },
    //       {
    //         path: '/product',
    //         element: <Products />
    //       }
    //     ]
    //   },

    // ])

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route element={<Layout />} errorElement={<PageNotFound />}>
          <Route path={'/'} element={< Category />}
            loader={async () => {
              const resp = await FetchData('https://fakestoreapi.com/products/categories', 'GET');
              const mappedCategories = mappCategory(resp.data);
              return mappedCategories;
            }}
          />
          <Route path={'/product'} element={< Products />} />
          {/* <Route path={'*'} element={<PageNotFound />} /> */}
        </Route >

      )
    )

    return <RouterProvider router={router} />
  }


}

export default App;
