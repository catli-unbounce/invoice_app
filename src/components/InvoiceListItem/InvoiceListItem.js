import React from 'react'

function InvoiceListItem({id, date, name, amount, status}) {
    return (
        <div className={styles["invoice"]}>
            <span className={styles["invoice__id"]}></span>
            <span className={styles["invoice__date"]}></span>
            <span className={styles["invoice__name"]}></span>
            <span className={styles["invoice__amount"]}></span>
            <img src="/images/icon-arrow-right.svg"></img>
        </div>
    )
}

export default InvoiceListItem
