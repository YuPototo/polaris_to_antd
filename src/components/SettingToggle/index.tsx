import { Button } from "antd";
import { Children } from "react";
import LegacyCard from "../LegayCard";

type SimpleAction = {
    content: string;
    onAction?: () => void;
};

export interface Props {
    /** Inner content */
    children?: React.ReactNode;
    /** Card header actions */
    action?: SimpleAction;
    /** Sets toggle state to activated or deactivated */
    enabled?: boolean;
}

export function SettingToggle({ children, action, enabled }: Props) {
    return (
        <LegacyCard>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>{children}</div>
                {action && (
                    <Button onClick={action.onAction}>{action.content}</Button>
                )}
            </div>
        </LegacyCard>
    );
}
