/**
 * https://github.com/Shopify/polaris/blob/df0378cbcf926d901ee6dc4aab8a81535c873491/polaris-react/src/components/Page/components/Header/Header.tsx
 */
import clsx from "clsx";
import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";
import { SimpleAction } from "../LegayCard";
import styles from "./styles.module.css";

type NavInterface = {
    content: string;
    url: string;
};

interface ActionInterface extends SimpleAction {
    disabled?: boolean;
}

interface ActionGroup {
    title: string;
    actions: SimpleAction[];
}

export type HeaderProps = {
    /** The title of the page */
    title?: string;
    /** The subtitle of the page */
    subtitle?: string;
    /** Reduce space between title and subtitle  */
    compactTitle?: boolean;
    /** Important and non-interactive status information shown immediately after the title */
    titleMetadata?: React.ReactNode;
    /** To reduce complexity I assume that only 1 item is provided */
    breadcrumbs?: NavInterface[];
    primaryAction?: ActionInterface;
    secondaryActions?: SimpleAction[];
    actionGroups?: ActionGroup[];
};

export function Header({
    title,
    subtitle,
    titleMetadata,
    breadcrumbs,
    primaryAction,
    secondaryActions,
    compactTitle = false,
    actionGroups,
}: HeaderProps) {
    const titleMetadataMarkup = titleMetadata ? (
        <div>{titleMetadata}</div>
    ) : null;

    // A strong assumption to reduce complexity
    if (breadcrumbs && breadcrumbs.length > 1) {
        console.error("Breadcrumbs should not have more than one element");
    }

    const backButtonMarkup = breadcrumbs ? (
        <div className={styles.backButton}>
            {/* A strong assumption: get the first item */}
            <a href={breadcrumbs[0].url}>
                <ArrowLeftOutlined />
            </a>
        </div>
    ) : null;

    // primary actions
    const primaryActionMarkup = primaryAction ? (
        <div>
            <Button type="primary" disabled={primaryAction.disabled}>
                {primaryAction.content}
            </Button>
        </div>
    ) : null;

    // secondary actions
    const secondaryActionMarkup = secondaryActions ? (
        <div>
            {secondaryActions.map((action, index) => (
                <Button key={index} type="text" onClick={action.onAction}>
                    {action.content}
                </Button>
            ))}
        </div>
    ) : null;

    // action groups
    let actionGroupsMarkup = null;
    if (actionGroups && actionGroups.length > 0) {
        actionGroupsMarkup = actionGroups.map((actionGroup, index) => {
            // convert actions to menu items

            const items: MenuProps["items"] = actionGroup.actions.map(
                (action, actionIndex) => ({
                    key: index + actionIndex,
                    label: (
                        <Button type="text" onClick={action.onAction}>
                            {action.content}
                        </Button>
                    ),
                })
            );

            return (
                <Dropdown menu={{ items }} key={index}>
                    <Button type="text">
                        <Space>
                            {actionGroup.title}

                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            );
        });
    }

    return (
        <div className={styles.header}>
            {backButtonMarkup}

            <div>
                <div
                    className={clsx(
                        styles.titleBox,
                        compactTitle && styles.compactTitle
                    )}
                >
                    <h2 className={styles.title}>{title}</h2>
                    {titleMetadataMarkup}
                </div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>

            <div className={styles.actionsGroup}>
                {secondaryActionMarkup}
                {actionGroupsMarkup}
                {primaryActionMarkup}
            </div>
        </div>
    );
}
