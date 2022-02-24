import React, {Component} from "react";
import {Table, Button} from "reactstrap";

class App extends Component {

   state = {
      isLoading: false,
      invoices: [
         {
            "id": "1000",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "1000",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "1000",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "1000",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         }
      ],
   }


   render() {
      const isLoading = this.state.isLoading;
      const allInvoices = this.state.invoices;
      const body = []

      if (isLoading) {
         return (<div> Is loading... </div>)
      }

      let invoices = allInvoices.map(invoice =>
          <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.Invoice}</td>
            <td>{invoice.Date}</td>
             <td><Button className="btn btn-lg btn-success" onClick={null}> OK </Button></td>
             <td><Button className="btn btn-lg btn-danger" onClick={null}> Nooo OK</Button></td>
             <td><Button className="btn btn-lg btn-info" onClick={null}> 50%</Button></td>
             <td><Button className="btn btn-lg btn-warning" onClick={null}> ?? </Button></td>
             <td><Button className="btn btn-lg btn-info" onClick={null}> Image</Button></td>
          </tr>
      )


      return (
          <div className="container border border-secondary rounded center">
             <div className="row">
                <div className="col-12">
                   <h2> Pending invoices</h2>
                </div>
             </div>
             <div className="row">
                <div className=".col-xs-12 center text-center">
                   <Table dark responsive striped bordered hover>
                      <thead>
                      <th>Vendor</th>
                      <th>Amount</th>
                      <th>Invoice #</th>
                      <th>Date</th>
                      <th colSpan="4">Actions</th>
                      <th> Image</th>
                      </thead>
                      <tbody>
                      {this.state.length === 0 ? <td colSpan="9"> All has been gone </td> : invoices}
                      </tbody>
                   </Table>

                </div>
             </div>

          </div>
      );
   }
}

export default App;
