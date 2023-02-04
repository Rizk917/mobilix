import React from "react";
import NewsCards from "./NewsCards";

function News(props) {
    return <div className="main-hero" onClick={() => props.setOpen(true)}>
        <NewsCards />
    </div>
}

export default News;