import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
import data from './MOCK_SNACKER_DATA'
import products from './products.json'
import Table from './components/Table'


class App extends Component {
  constructor() {
    super();
    this.state = {
      
      data_1: [],
      products: []
    };
  }
  componentDidMount() {
     this.setState({ 
       data_1: data,
       products: products.products
    
    })
    
  }






  render() {  

    var emails = [];
    var productTitle = this.state.products.map(e => (e.title))
    var total = 0;

     this.state.data_1.map(c => {
        this.state.products.map(p=> {
           if (c.fave_snack === p.title ) {
             emails.push({firstName: c.first_name, email:c.email, snak: c.fave_snack, price:p.variants[0].price  });
             console.log(p.variants[0].price);
             total+= Number.parseFloat(p.variants[0].price);
             
          }
        })

     })
     console.log(emails)


     console.log(total);


    return (
      <div>

         <h1>Contacts of clients with fave_snack in stock</h1>
       <Table data={emails}/>
     

       <h3>Total amount: $ {total} </h3> 
       
      <h1>Clients</h1>
      <ul>
        {this.state.data_1.map(el => (
          <li key={el.id}>
            {el.first_name}: {el.last_name} : {el.email} : {el.fave_snack}
          </li>
        ))}
      </ul>
      <h1>Products</h1>
      <ul> 

        {this.state.products.map(p => (
          <li>
            {p.title}
          </li>
        ))}

      </ul>
      <br/>
      
     
     
    </div>
    );
  }
}
export default App;
