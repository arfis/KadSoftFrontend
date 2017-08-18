/**
 * Created by a619678 on 23. 5. 2017.
 */
export enum InvoiceStatus {
    created = 0,
    payed = 1,
    expired = 2,
    latePay = 3,
    canceled = 4
}

export const invoiceTypes = ["Proforma","Evidenčná","Zálohová faktúra"];

export function getTranslation(status : string){

  switch(status) {
      case "payed":
      case "paid" : return {text : "Zaplatená", label:"label-success"};
      case "created" : return {text : "Vystavená", label:"label-info"};
      case "expired" : return {text : "Po splatnosti", label:"label-danger"};
      case "canceled" : return {text : "Stornovaná", label:"label-default"};
      case "latePay" : return {text : "Zaplatená po splatnosti", label:"label-success"};
      case "wrong_paid" : return {text : "Zlá suma uhradená", label:"label-danger"};
      default: return {text:"Undefined: " + status, label:"label-danger"};
  }

}