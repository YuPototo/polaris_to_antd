import { Page } from "./components/Page";
import React, { useCallback, useState } from "react";
import { LegacyCard } from "./components/LegayCard";
import { SettingToggle } from "./components/SettingToggle";
import { Badge, Tag } from "antd";

/* legacy card example */
// function App() {
//     return (
//         <LegacyCard
//             title="Credit card"
//             actions={[{ content: "Action 1" }, { content: "Action 2" }]}
//             secondaryFooterActions={[{ content: "Cancel" }]}
//             primaryFooterAction={{
//                 content: "Save",
//             }}
//         >
//             <p>Credit card information</p>
//         </LegacyCard>
//     );
// }

/* SettingToggle Example */
// function App() {
//     const [enabled, setEnabled] = useState(false);

//     const contentStatus = enabled ? "Turn off" : "Turn on";

//     const handleToggle = useCallback(
//         () => setEnabled((enabled) => !enabled),
//         []
//     );
//     return (
//         <SettingToggle
//             enabled={enabled}
//             action={{ content: contentStatus, onAction: handleToggle }}
//         >
//             <div>
//                 Simulate transactions to test your checkout and order flows.
//                 When test mode is on, checkout does not accept real credit
//                 cards.
//             </div>
//         </SettingToggle>
//     );
// }

/* page example */
function App() {
    return (
        <Page
            breadcrumbs={[{ content: "Products", url: "#" }]}
            title="3/4 inch Leather pet collar"
            subtitle="Perfect for any pet"
            titleMetadata={
                // ! Should use Tag instead of Badge in AntD
                // * https://ant.design/components/tag
                <Tag color="success">Paid</Tag>
            }
            // compactTitle
            primaryAction={{ content: "Save", disabled: true }}
            secondaryActions={[
                {
                    content: "Duplicate",
                    onAction: () => alert("Duplicate action"),
                },
                {
                    content: "View on your store",
                    onAction: () => alert("View on your store action"),
                },
            ]}
            actionGroups={[
                {
                    title: "Promote",
                    actions: [
                        {
                            content: "Share on Facebook",
                            onAction: () => alert("Share on Facebook action"),
                        },
                    ],
                },
            ]}
        >
            <LegacyCard title="Credit card">
                <p>Credit card information</p>
            </LegacyCard>
        </Page>
    );
}
export default App;
