import React, { Component } from 'react'
import axios from 'axios'
import { Removes } from './Removes';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      title: "",
      number: "",
      time:"",
      cash:""
    }

  }



  handleFormSubmit(e) {
    e.preventDefault();


    const registerData = JSON.stringify(this.state);

    axios({
      method: 'POST',
      url: 'http://localhost:5000/api/todo/create',
      headers: {
        'Content-Type': 'application/json',
      },
      data: registerData,
    })
        .then(result => {
          console.log(registerData)
        })
        .catch(error => console.log(error))
  }
  render() {
    return (
        <React.Fragment>
            <div className="container-xxl" style={{marginTop:"100px"}}>
              <div className="row" style={{marginTop:"30px"}}>
                    <div className="col">
                      <input
                          type='text'
                          id='name'
                          name='name'
                          value={this.props.name}
                          className={'form-control'}
                          placeholder={"исми "}
                          onChange={e => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="col">
                      <input
                          type='text'
                          id='title'
                          name='title'
                          value={this.props.title}
                          className={'form-control'}
                          placeholder={"Буюм номи "}
                          onChange={e => this.setState({ title: e.target.value })} />
                    </div>


                    <div className="col">
                      <input
                          type='text'
                          id='number'
                          name='number'
                          value={this.props.number}
                          className={'form-control'}
                          placeholder={"Телефон раками "}
                          onChange={e => this.setState({ number: e.target.value })} />
                    </div>

                    <div className="col">
                      <input
                          type='datetime-local'
                          id='time'
                          name='time'
                          value={this.props.time}
                          className={'form-control'}
                          placeholder={"тайёр болишь вакти "}
                          onChange={e => this.setState({ time: e.target.value })} />
                    </div>



                    <div className="col">
                      <input
                          type='text'
                          id='cash'
                          name='cash'
                          value={this.props.cash}
                          placeholder={"нархи "}
                          className={"form-control"}
                          onChange={e => this.setState({ cash: e.target.value })} />
                    </div>


                    <div className="col">
                      <input
                          className={'btn btn-success'}
                          type='submit'
                          value={"саклаш "}
                          onClick={e => this.handleFormSubmit(e)} />
                    </div>
                    <div className="col">
                        <button className={'btn btn-primary'}>
                          <a href="/"><i className="bi bi-arrow-clockwise" style={{color:"#fff"}}></i></a>
                        </button>
                    </div>

                <Removes />

                </div>
              </div>
        </React.Fragment>
    )
  }
}

export default Header