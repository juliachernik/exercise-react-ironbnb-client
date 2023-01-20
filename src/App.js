import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import CreateApartment from "./components/CreateApartment";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";
import HomePage from "./components/HomePage";
import { Link, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Header numberOfMovies={moviesArr.length} /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<ApartmentsList />} />
        <Route path='/apartments/create' element={<CreateApartment  />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route
          path="*"
          element={<h2>404 - sorry, that route does not exist</h2>}
        />
      </Routes>

      <p>this is the footer</p>
    </div>
  );
}

export default App;
