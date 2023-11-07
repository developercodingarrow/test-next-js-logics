import React, { useContext } from "react";
import SideBarFillterComponentns from "../../../Utiles/CustomeElements/filltersComponentns/SideBarFillterComponentns";
import styles from "../../../Utiles/CustomeElements/filltersComponentns/css/SideBarFillterComponentns.module.css";
import { SimpleDataFillterContext } from "../../../contextApi/logicContentAPI/SimpleEComerseFillterContextApi";

const sampleData = [
  {
    title: "brand",
    items: ["Godrej", "GLS", "DLF"],
  },
  {
    title: "size",
    items: ["2BHK", "3BHK"],
  },
  {
    title: "category",
    items: ["Commercial", "Residential"],
  },
];

export default function SideBarFillter() {
  const { filteredProjects, handleFilterChange, selectedFilters } = useContext(
    SimpleDataFillterContext
  );

  return (
    <>
      <div className={styles.Page_mainContainer}>
        <div className={styles.sideBar_container}>
          {sampleData.map((el, i) => {
            return (
              <div key={i}>
                <SideBarFillterComponentns title={el.title} items={el.items} />
              </div>
            );
          })}
        </div>

        <div className={styles.contnet_part}>
          {filteredProjects.map((project, i) => {
            return (
              <div className={styles.card} key={i}>
                <p className={styles.nameList}>{project.name} </p>
                <p className={styles.nameList}>{project.brand} </p>
                <p className={styles.nameList}>{project.size} </p>
                <p className={styles.nameList}>{project.category} </p>
                <p className={styles.nameList}>{project.subCategory} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
