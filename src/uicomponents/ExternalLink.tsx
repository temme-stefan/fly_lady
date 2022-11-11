import React from "react";

// Warum weiß ich nicht...
// @ts-ignore
export function ExternalLink({url, title, text}: { url: string, title: string, text: string }) {
    return (
        <a href={url} rel={"external noreferrer"}
           referrerPolicy={"no-referrer"}
           title={title}
           target={"_blank"}
        > {text} </a>
    )
}