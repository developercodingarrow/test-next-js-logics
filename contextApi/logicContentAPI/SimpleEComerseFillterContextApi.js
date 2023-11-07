import React, { createContext, useState, useContext } from "react";
import projectsData from "../../jsonData/advanceFillterData/advanceFillterData";
export const SimpleDataFillterContext = createContext();

export default function SimpleDataFilterContextApiProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    size: [],
    category: [],
    subCategory: [],
  });

  // This Function for CheckBox Check-UnCheck
  const handleFilterChange = (filterType, value) => {
    console.log(filterType, value);
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: selectedFilters[filterType].includes(value)
        ? selectedFilters[filterType].filter((filter) => filter !== value)
        : [...selectedFilters[filterType], value],
    });
  };

  // Fiilter data function
  const filteredProjects = projectsData.filter((project) => {
    return (
      (selectedFilters.brand.length === 0 ||
        selectedFilters.brand.includes(project.brand)) &&
      (selectedFilters.size.length === 0 ||
        selectedFilters.size.includes(project.size)) &&
      (selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(project.category)) &&
      (selectedFilters.subCategory.length === 0 ||
        selectedFilters.subCategory.includes(project.subCategory))
    );
  });

  return (
    <SimpleDataFillterContext.Provider
      value={{ handleFilterChange, filteredProjects, selectedFilters }}
    >
      {children}
    </SimpleDataFillterContext.Provider>
  );
}
