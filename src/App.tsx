// import { Page, Badge, LegacyCard } from "@shopify/polaris";
import React from "react";
import { LegacyCard } from "./components/LegayCard";

function App() {
    return (
        <LegacyCard
            title="Credit card"
            actions={[{ content: "Action 1" }, { content: "Action 2" }]}
            secondaryFooterActions={[{ content: "Cancel" }]}
            primaryFooterAction={{
                content: "Save",
            }}
        >
            <p>Credit card information</p>
        </LegacyCard>
    );
}

export default App;
