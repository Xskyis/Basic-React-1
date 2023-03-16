import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert';
import Media from './components/Media';

class App extends Component {
  render() {
    return (
      <div className="App container p-3">
        <div className="alert alert-info">
          <h3 className="text-danger">Ini Project Pertama React JS</h3>
          <p>Belajar React JS itu mudah</p>
          <button className="m-1 btn btn-success" onClick={() => alert('Afakah Iyah Dek ?')}>Setuju</button>
          <button className="btn btn-info" onClick={() => alert('Okeh Dek !!!')}>Iya Dong</button>
        </div>

        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="App container col-sm-6 mb-3">
          <Alert type="danger" header="Fatal Error">
            Ini adalah alert dengan tipe danger
          </Alert>
          <Alert type="success" header="Berhasil">
            Ini adalah alert dengan tipe success
          </Alert>
          <Alert type="warning" header="Warning">
            Ini adalah alert dengan tipe warning
          </Alert>
        </div>


        <div className='gambar container col-sm-5'>
          <Media image="logo_react.png" title="React Js" type="info">
            Framework untuk FrontEnd Development
          </Media>
          <Media image="logo_node.png" title="Node Js" type="success">
            Framework untuk BackEnd Development
          </Media>
        </div>

        <hr />

        <div className='container col-sm-6 mb-3 p-3'>
          <Alert type={this.state.type} header={this.state.header}>
            {this.state.content}
          </Alert>
          <hr />
          <h4>Alert Control</h4>
          <b className='text-left'>Tipe Alert</b>
          <select className='form-control' name="type" value={this.state.type}
            onChange={this.changeTypeAlert}>
            <option value="success">Succces</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
            <option value="info">Info</option>
          </select>
          <b className='text-left'>Header Alert</b>
          <input type="text" name="header" className='form-control' value={this.state.header}
            onChange={this.changeHeaderAlert} />
          <b className='text-left'>Content Alert</b>
          <input type="text" name="content" className='form-control' value={this.state.content}
            onChange={this.changeContentAlert} />
        </div>

      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      type: "danger",
      header: "Fatal Error",
      content: "ini content dari alert"
    }
  }

  // Fungsi utk mengubah tipe
  changeTypeAlert = (event) => {
    this.setState({ type: event.target.value });
  }
  // fungsi utk mengubah header
  changeHeaderAlert = (event) => {
    this.setState({ header: event.target.value });
  }
  // fungsi utk mengubah content
  changeContentAlert = (event) => {
    this.setState({ content: event.target.value });
  }

}
export default App;

