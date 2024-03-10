import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="en">
        <head>
            <title>projectGDT admin</title>
        </head>
        <body>{children}</body>
    </html>
}