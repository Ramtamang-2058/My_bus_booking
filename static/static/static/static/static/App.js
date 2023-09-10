import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './home';
import AddRoute from './AddRoute';

function App() {
return (
<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/route' element={<AddRoute />} />
        {/* <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} /> */}
    </Routes>
</Router>
);
}

export default App;