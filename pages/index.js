import Head from "next/head";
import Link from "next/link";
import styles from "../styles/homePage.module.css";

export default function Home() {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  // single-checkbox

  const tableRow = [
    {
      sNO: "1",
      title: "Custome Radio Button",
      descreption:
        "This is custome Radio Button when user click on radion color radio circle and color dots",
      pageLink: "/html-custome-elements/elements/custome-radio",
    },
    {
      sNO: "2",
      title: "Custome Single Chek Box",
      descreption: "we can use this chek box whear we want need true false ",
      pageLink: "/html-custome-elements/elements/single-checkbox",
    },

    {
      sNO: "3",
      title: "Multiple Check Box with value",
      descreption: "we can use these chek box whear we want Arrays of value ",
      pageLink: "/html-custome-elements/elements/multi-chek-box",
    },

    {
      sNO: "4",
      title: "custom Form select option",
      descreption: "we can use these chek box whear we want Arrays of value ",
      pageLink: "/html-custome-elements/elements/form-select",
    },
    {
      sNO: "5",
      title: "dynimce Buttons ",
      descreption: "craeteed dynimic button we can set size or extra things",
      pageLink: "/html-custome-elements/elements/Buttons",
    },
    {
      sNO: "6",
      title: "loading style",
      descreption: "these loading style is use when we click on button ",
      pageLink: "/html-custome-elements/elements/loading",
    },
    {
      sNO: "7",
      title: "Advance Fiiter Search",
      descreption: "Advance Fillter Like E-commerse ",
      pageLink: "/logic-Components/E-commerse-fillter",
    },
    {
      sNO: "8",
      title: "React Accordion ",
      descreption: "Accordion Element",
      pageLink: "/html-custome-elements/elements/accordion",
    },
    {
      sNO: "9",
      title: "E Commerce Accordion ",
      descreption: "E commerce Accordion",
      pageLink: "/html-custome-elements/elements/e-comerce-accordion",
    },

    {
      sNO: "10",
      title: "E Commerce Side Bar Accordion Type fillter",
      descreption: "This fillter like E-commerse websites ",
      pageLink: "/html-custome-elements/fillters/SideBarFillter",
    },
  ];

  return (
    <>
      <div className={styles.main_Container}>
        <div className={styles.testLists_innerContainer}>
          <div className={styles.table_Container}>
            <div className={styles.table_header}>
              <div className={`${styles.table_headerBox} ${styles.sn}`}>
                S No
              </div>
              <div className={`${styles.table_headerBox} ${styles.title}`}>
                Title
              </div>
              <div
                className={`${styles.table_headerBox} ${styles.descreption}`}
              >
                Descreption
              </div>
              <div className={`${styles.table_headerBox} ${styles.Link}`}>
                Link
              </div>
            </div>
            <div className={styles.table_body}>
              {tableRow.map((el, i) => {
                return (
                  <div className={styles.table_bodyRow}>
                    <div className={`${styles.table_headerBox} ${styles.sn}`}>
                      {i + 1}
                    </div>
                    <div
                      className={`${styles.table_headerBox} ${styles.title}`}
                    >
                      {el.title}
                    </div>
                    <div
                      className={`${styles.table_headerBox} ${styles.descreption}`}
                    >
                      {el.descreption}
                    </div>
                    <div className={`${styles.table_headerBox} ${styles.Link}`}>
                      <Link href={el.pageLink}>Page</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
