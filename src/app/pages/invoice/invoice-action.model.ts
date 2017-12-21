export class InvoiceAction {
    showFile: HttpMethod;
    downloadFile: HttpMethod;
    sendEmail: HttpMethod;
    generatePdf: HttpMethod;
    cancelInvoice: HttpMethod;
    payInvoice: HttpMethod;
    base64File: HttpMethod;
}

export class HttpMethod {
    href: string;
    methods: string[];
}