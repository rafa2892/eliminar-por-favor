
import "./App.css";
import { Component } from "react";
import { PersonaService } from "./service/PersonaService";
import { DataTable } from 'primereact/datatable';
import {Column} from 'primereact/column';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.personaService = new PersonaService();
  }

  componentDidMount() {
    this.personaService.getAll().then(data => this.setState({personas : data}))
  
    }

  render() {
   
    return (<DataTable value={this.state.personas} >
      <Column field="id" header="ID"></Column>
      <Column field="nombre" header="Nombre"></Column>
      <Column field="apellido" header="Apellido"></Column>
      <Column field="direccion" header="Direccion"></Column>
      <Column field="telefono" header="Telefono"></Column>
    </DataTable>);
  }
}


