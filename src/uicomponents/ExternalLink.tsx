import React, {FunctionComponent} from "react";

// Warum weiß ich nicht...
// @ts-ignore
export function ExternalLink({url, title, text}: { url: string, title: string, text: string }) {
    return (
        <a href={url} rel={"external"}
           referrerPolicy={"no-referrer"}
           title={title}
           target={"_blank"}
        > {text} </a>
    )
}