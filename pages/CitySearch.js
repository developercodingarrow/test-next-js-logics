// CitySearch.js
import React, { useState } from "react";
import SearchBar from "../Utiles/SearchBar";
import Link from "next/link";

const CitySearch = () => {
  const [cityResults, setCityResults] = useState([]);

  const allCities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
    "Boston",
    "Seattle",
    // Add more cities to the list
  ];

  const handleCitySearch = (searchValue) => {
    // Convert the searchValue and city names to lowercase for case-insensitive search
    const searchTerm = searchValue.toLowerCase();
    const filteredCities = allCities.filter((city) =>
      city.toLowerCase().includes(searchTerm)
    );

    setCityResults(filteredCities);
  };

  return (
    <div>
      <Link href="/login"> Login Page</Link>
      <Link href="/register"> Register page</Link>
      <Link href="/CitySearch"> City search page</Link>
      <Link href="/state"> State search page</Link>
      <h2>City Search</h2>

      <SearchBar placeholder="Search for cities" onSearch={handleCitySearch} />
      {/* Render city results here */}
      <h2>Search Result :</h2>
      {cityResults.map((cityName) => {
        return (
          <>
            <p>{cityName}</p>
          </>
        );
      })}
    </div>
  );
};

export default CitySearch;
