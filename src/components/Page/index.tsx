/**
 * https://polaris.shopify.com/components/layout-and-structure/page
 * https://github.com/Shopify/polaris/blob/df0378cbcf926d901ee6dc4aab8a81535c873491/polaris-react/src/components/Page/Page.tsx
 */

import { Button } from "antd";
import { Children } from "react";
import { Header, HeaderProps } from "../Header";
import { LegacyCard } from "../LegayCard";
import styles from "./styles.module.css";

type SimpleAction = {
    content: string;
    onAction?: () => void;
};

export interface PageProps extends HeaderProps {
    /** The contents of the page */
    children?: React.ReactNode;
}

export function Page({ children, ...rest }: PageProps) {
    const headerMarkup = <Header {...rest} />;

    return (
        <div className={styles.page}>
            {headerMarkup}

            {children}
        </div>
    );
}
