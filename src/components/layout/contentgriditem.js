import React from "react"

import styles from "./contentgriditem.module.css"

const ContentGridItem = ({children, two, full, reverse, classes}) => {
    return (
        <div className={`${styles.content_grid_item} ${two ? styles.item_span_2 : ''} ${full ? styles.item_span_3 : ''} ${reverse ? styles.reverse : ''} ${classes}`}>
            {children}
        </div>
    )
}

export default ContentGridItem