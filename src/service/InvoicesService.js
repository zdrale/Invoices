import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/v1/faktura";

class InvoiceService {
  getAllInvoices() {
    return axios.get(REST_API_URL);
  }

  createInvoice(invoice) {
    return axios.post(REST_API_URL, invoice);
  }
}

export default new InvoiceService();
