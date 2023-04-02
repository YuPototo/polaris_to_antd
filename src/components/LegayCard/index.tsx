import { Button, Card } from "antd";

type SimpleAction = {
    content: string;
    onAction?: () => void;
};

export interface LegacyCardProps {
    /** Title content for the card */
    title?: string;
    /** Inner content of the card */
    children?: React.ReactNode;
    /** Card header actions */
    actions?: SimpleAction[];
    /** Primary action in the card footer */
    primaryFooterAction?: SimpleAction;
    /** Secondary actions in the card footer */
    secondaryFooterActions?: SimpleAction[];
}

export default function LegacyCard({
    title,
    children,
    actions,
    primaryFooterAction,
    secondaryFooterActions,
}: LegacyCardProps) {
    const headerBtns = actions?.map((action) => (
        <Button type="link" onClick={action.onAction}>
            {action.content}
        </Button>
    ));

    const headerActionsWrapper = headerBtns ? (
        <div style={{ display: "flex", gap: "10px" }}>{headerBtns}</div>
    ) : null;

    const secondaryFooterBtns = secondaryFooterActions?.map((action) => (
        <Button onClick={action.onAction}>{action.content}</Button>
    ));

    const primaryFooterBtn = primaryFooterAction ? (
        <Button type="primary" onClick={primaryFooterAction.onAction}>
            {primaryFooterAction.content}
        </Button>
    ) : null;

    let footerAction;

    if (secondaryFooterActions || primaryFooterBtn) {
        footerAction = (
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "flex-end",
                }}
            >
                {secondaryFooterBtns}
                {primaryFooterBtn}
            </div>
        );
    }

    return (
        <Card title={title} extra={headerActionsWrapper}>
            {children}
            {footerAction}
        </Card>
    );
}
