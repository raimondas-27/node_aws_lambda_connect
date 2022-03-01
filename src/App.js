import React, {Component} from "react";
import {Table, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp, faImage, faMoneyCheckAlt, faSearchDollar} from "@fortawesome/free-solid-svg-icons";


class App extends Component {

   state = {
      isLoading: false,
      invoices: [
         {
            "id": "100",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "200",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "300",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         },
         {
            "id": "400",
            "Vendor": "Hankok",
            "Amount": "18.900",
            "Invoice": "1123",
            "Date": "08/09/2019",

         }
      ],
   }

   remove(id) {
      console.log(id)
      let updated = [...this.state.invoices].filter(element => element.id !== id);
      this.setState({invoices: updated})
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
             <td>
                <Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)}>
                   <FontAwesomeIcon icon={faThumbsUp}/> OK
                </Button>
             </td>
             <td>
                <Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)}>
                   <FontAwesomeIcon icon={faThumbsDown}/> Not OK </Button>
             </td>
             <td>
                <Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}>
                   <FontAwesomeIcon icon={faMoneyCheckAlt}/> 50%
                </Button></td>
             <td>
                <Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)}>
                   <FontAwesomeIcon icon={faSearchDollar}/> ??
                </Button></td>
             <td>
                <Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}>
                   <FontAwesomeIcon icon={faImage}/> Image
                </Button></td>
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
                      <tr>
                         <th scope="row">Vendor</th>
                         <th>Amount</th>
                         <th>Invoice #</th>
                         <th>Date</th>
                         <th colSpan="4">Actions</th>
                         <th> Image</th>
                      </tr>
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
