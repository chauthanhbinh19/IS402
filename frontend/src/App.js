import React, { Fragment } from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {routes} from './routes/index'
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import AdminComponent from './components/AdminComponent/AdminComponent';

function App() {
  return <div>
    <Router>
      <Routes>
        {routes.map((route)=>{
          const Page=route.page;
          const Layout = route.isAdminPage 
            ? AdminComponent
            : route.isShowHeader 
              ? DefaultComponent 
              : Fragment;
            return (
              <Route path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              }/>
            )
          })}
      </Routes>
    </Router>
  </div>;
}

export default App;
