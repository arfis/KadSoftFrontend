/**
 * Created by a619678 on 23. 5. 2017.
 */
export enum InvoiceStatus {
    created = 0,
    payed = 1,
    expired = 2,
    canceled = 3,
    latePay = 4,
    wrongPay = 5
}

export class InvoiceStats {

    public static paid = "zaplatena";
    public static created = "vytvorena";
    public static expired = "po splatnosti";
    public static canceled = "zrusena";
    public static latePay = "zaplatena po splatnosti";
    public static wrongPay = "zla suma uhradena";
}

export const invoiceTypes = ["Proforma","Evidenčná","Zálohová faktúra"];
export const invoiceStatuses = ["created","paid","expired","canceled","latePay","wrong_paid"];
export const invoiceStatesConst = [{label:InvoiceStats.created, value:InvoiceStatus.created},
                                    {label:InvoiceStats.paid, value:InvoiceStatus.payed},
                                    {label:InvoiceStats.expired, value:InvoiceStatus.expired},
                                    {label:InvoiceStats.canceled, value:InvoiceStatus.canceled},
                                    {label:InvoiceStats.latePay, value:InvoiceStatus.latePay},
                                    {label:InvoiceStats.wrongPay, value:InvoiceStatus.wrongPay}];

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

export function getInvoiceStatusFromEnum(status: InvoiceStatus): String{
    switch(status) {
        case InvoiceStatus.created : return "Vystavená";
        case InvoiceStatus.expired : return "Po splatnosti";
        case InvoiceStatus.canceled : return "Stornovaná";
        case InvoiceStatus.latePay : return "Zaplatená po splatnosti";
        case InvoiceStatus.wrongPay : return "Zlá suma uhradená";
        case InvoiceStatus.payed : return "Zaplatená";
    }
}