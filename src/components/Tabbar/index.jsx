import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";

import styles from "./Tabbar.module.css";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case "내 참여작":
                return <AiFillHome />;
            case "북마크한 작품":
                return <AiFillCompass />;
            case "좋아요한 작품":
                return <BsFillBagFill />;
        }
    }, []);

    return (
        <nav className={styles.tabbar}>
            {navigationData.map((item, index) => (
                <span
                    key={index}
                    className={classNames([
                        styles.tabItem,
                        currentRoute === item && styles.tabItemActive,
                    ])}
                    onClick={() => setCurrentRoute(item)}
                ></span>
            ))}
        </nav>
    );
};

export default Tabbar;
