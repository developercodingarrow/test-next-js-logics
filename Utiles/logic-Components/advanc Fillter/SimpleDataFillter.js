import React, { useContext, useState } from "react";
import styles from "../css/simpleDataFillter.module.css";
import { SimpleDataFillterContext } from "../../../contextApi/logicContentAPI/SimpleEComerseFillterContextApi";

export default function SimpleDataFillter() {
  const { filteredProjects, handleFilterChange, selectedFilters } = useContext(
    SimpleDataFillterContext
  );

  return (
    <>
      <div className={styles.main_Container}>
        {/* Your filter component where users can select brands, sizes, categories, and sub-categories */}
        <div className={styles.fillter_Container}>
          <h3>Filters:</h3>
          <div className={styles.Brand_box}>
            <h4>Brand:</h4>
            {["Godrej", "GLS", "DLF", "Sun City"].map((brand) => (
              <label key={brand} className={styles.brand_checkBox}>
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedFilters.brand.includes(brand)}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                />
                {brand}
              </label>
            ))}
          </div>
          <div>
            <h4>Size:</h4>
            {["1BHK", "2BHK", "3BHK"].map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  value={size}
                  checked={selectedFilters.size.includes(size)}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                {size}
              </label>
            ))}
          </div>
          <div>
            <h4>Category:</h4>
            {["Residential", "Commercial"].map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedFilters.category.includes(category)}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                />
                {category}
              </label>
            ))}
          </div>
          <div>
            <h4>Sub-category:</h4>
            {["Luxury", "Affordable"].map((subCategory) => (
              <label key={subCategory}>
                <input
                  type="checkbox"
                  value={subCategory}
                  checked={selectedFilters.subCategory.includes(subCategory)}
                  onChange={(e) =>
                    handleFilterChange("subCategory", e.target.value)
                  }
                />
                {subCategory}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.Card_container}>
          {/* Render the filtered projects */}
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.project_Cards}>
              <p className={styles.nameList}>{project.name} </p>
              <p className={styles.nameList}>{project.brand} </p>
              <p className={styles.nameList}>{project.size} </p>
              <p className={styles.nameList}>{project.category} </p>
              <p className={styles.nameList}>{project.subCategory} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
