import React from "react";
// import User from "./user";
import { stockData } from "../../database/sampleData";
import { buildHtmlTable } from "./buildTable";
import { createTable } from "./createTable";
import createSampleTable from "./createSampleTable";
import axios from "axios";

export default class SomeComponent extends React.Component {

   state = {
      data: []
   }

   addData = () => {
      console.log(createSampleTable(stockData))

      this.setState({
         data: [...this.state.data, <div>{createSampleTable(stockData)}</div>]
      })
   }

   render() {
      return (
         <div>
            <button onClick={this.addData}>Add User</button>
            {this.state.data}
         </div>
      );
   }
}
