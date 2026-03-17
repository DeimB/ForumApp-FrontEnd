import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.wrapper}>
      <Header logo={"Forum"} />
      <div className={styles.content}>{children}</div>
      <Footer logo={"Forum"} />
    </div>
  );
};

export default PageTemplate;
