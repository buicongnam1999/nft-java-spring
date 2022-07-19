import React from 'react'
import { renderRoutes } from 'ultis/helper'
import { routesAdmin } from 'constants/index';
import Header from 'layout/admin/HeaderAdmin';
import Footer from 'layout/admin/FooterAdmin';

export default function Admin() {
  return (
    <div>
      <Header />
      {renderRoutes(routesAdmin)}
      <Footer />
    </div>
  )
}

