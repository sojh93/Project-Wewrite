import React from "react";

import styles from "./App.module.css";
import useNavigation from "../hooks/useNavigation";
import navigationData from "../data/Navigation";

import Navbar from "./Navbar";
import Tabbar from "./Tabbar";

const NavigationBar = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();

    return (
        <div className={styles.container}>
            <Navbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
        </div>
    );
};

export default NavigationBar;
