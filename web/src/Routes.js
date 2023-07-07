// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Neighborhoods" titleTo="adminNeighborhoods" buttonLabel="New Neighborhood" buttonTo="adminNewNeighborhood">
        <Route path="/admin/neighborhoods/new" page={AdminNeighborhoodNewNeighborhoodPage} name="adminNewNeighborhood" />
        <Route path="/admin/neighborhoods/{id}/edit" page={AdminNeighborhoodEditNeighborhoodPage} name="adminEditNeighborhood" />
        <Route path="/admin/neighborhoods/{id}" page={AdminNeighborhoodNeighborhoodPage} name="adminNeighborhood" />
        <Route path="/admin/neighborhoods" page={AdminNeighborhoodNeighborhoodsPage} name="adminNeighborhoods" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
