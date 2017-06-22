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

export function getTranslation(status : InvoiceStatus){

  switch(status){
      case InvoiceStatus.payed : return {text : "Zaplatená", label:"label-success"};
      case InvoiceStatus.created : return {text : "Vystavená", label:"label-info"};
      case InvoiceStatus.expired : return {text : "Expirovaná", label:"label-danger"};
      case InvoiceStatus.canceled : return {text : "Stornovaná", label:"label-default"};
      case InvoiceStatus.latePay : return {text : "Zaplatená po splatnosti", label:"label-success"};
  }
}