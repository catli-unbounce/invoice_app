import React from 'react'
import styles from "./InvoiceList.module.scss";
import InvoiceListItem from "../InvoiceListItem/InvoiceListItem";
function InvoiceList({invoiceList}) {

    const listOfInvoices = invoiceList.map((item) => {
        return (
            <InvoiceListItem invoiceItem={item}></InvoiceListItem>
        )
    })
    return (
        <main>
            <div className={styles.header}>
                <div>
                    <h1>Invoices</h1>
                    <p>There are 7 total invoices</p>
                </div>
                <div className={styles["header__filter"]}>
                    <div className={styles["header__filter"]}><span>Filter by Status<img src="/images/icon-arrow-down.svg"></img></span></div>
                    <div className={styles["header__filter-checkbox"]}>
                        <ul>
                            <li><label><input type="checkbox"/>Draft</label></li>
                            <li><label><input type="checkbox"/>Pending</label></li>
                            <li><label><input type="checkbox"/>Paid</label></li>
                        </ul>
                    </div>
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
