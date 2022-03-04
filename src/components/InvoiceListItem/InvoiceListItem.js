import React from "react";
import styles from "./InvoiceListItem.module.scss";
function InvoiceListItem({ invoiceItem }) {
  return (
    <div className={styles["invoice"]}>
      <span className={styles["invoice__id"]}>#{invoiceItem.id}</span>
      <span className={styles["invoice__date"]}>
        Due {invoiceItem.paymentDue}
      </span>
      <span className={styles["invoice__name"]}>{invoiceItem.clientName}</span>
      <span className={styles["invoice__total"]}>${invoiceItem.total}</span>
      <div className="tag tag--paid">Paid</div>
      <div className={styles["invoice__arrow-icon"]}>
        <img src="/images/icon-arrow-right.svg"></img>
      </div>
    </div>
  );
}

export default InvoiceListItem;
