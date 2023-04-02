// import { Page, Badge, LegacyCard } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import LegacyCard from "./components/LegayCard";
import SettingToggle from "./components/SettingToggle";

// legacy card example
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

// SettingToggle Example
function App() {
    const [enabled, setEnabled] = useState(false);

    const contentStatus = enabled ? "Turn off" : "Turn on";

    const handleToggle = useCallback(
        () => setEnabled((enabled) => !enabled),
        []
    );
    return (
        <SettingToggle
            enabled={enabled}
            action={{ content: contentStatus, onAction: handleToggle }}
        >
            <div>
                Simulate transactions to test your checkout and order flows.
                When test mode is on, checkout does not accept real credit
                cards.
            </div>
        </SettingToggle>
    );
}

export default App;
