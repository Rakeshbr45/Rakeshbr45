import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing, Error, Register, ProtectedRoute } from './pages';
import { ToastContainer } from 'react-toastify';

// Correct import statements
import  SharedLayout  from './pages/dashboard/SharedLayout';
import Stats  from './pages/dashboard/Stats';
import  AllJobs  from './pages/dashboard/AllJobs';
import  AddJob  from './pages/dashboard/AddJob';
import  Profile  from './pages/dashboard/Profile';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;






// Example of correct import and usage in App.js

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Landing, Error, Register}  from './pages';
// import { ToastContainer } from 'react-toastify';

// import Dashboard from './pages/Dashboard'; // Import the entire Dashboard module

// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     // <h1>hello</h1>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route
//     //       path='/'
//     //       element={
          
//     //           <Dashboard.SharedLayout />
//     //       }
//     //     >
//     //       <Route index element={<Dashboard.Stats />} />
//     //       <Route path='all-jobs' element={<Dashboard.AllJobs />} />
//     //       <Route path='add-job' element={<Dashboard.AddJob />} />
//     //       <Route path='profile' element={<Dashboard.Profile />} />
//     //     </Route>
//     //     <Route path='landing' element={<Landing />} />
//     //     <Route path='register' element={<Register />} />
//     //     <Route path='*' element={<Error />} />
//     //   </Routes>
    
//     //   <ToastContainer position='top-center'/>
//     // </BrowserRouter>
//   );
// }

// export default App;
