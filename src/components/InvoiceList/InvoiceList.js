import React from 'react'
import styles from "./InvoiceList.module.scss";
function InvoiceList({invoiceList}) {

    const listOfInvoices = invoiceList.map((item) => {
        return (
            <p>{item.description}</p>
        )
    })
    return (
        <main>
            <div className={styles.header}>
                <div>
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                </div>
                <div className={[styles["header__filter"]]}>
                    <div className={[styles["header", styles["header__filter"]]].join()}><span>Filter by Status<img src="/images/icon-arrow-down.svg"></img></span></div>
                    <button className="primary">New Invoice</button>
                </div>
            </div>   

            <div>
                {listOfInvoices}
            </div> 
        </main>
    )
}

export default InvoiceList
