import React, { Component } from 'react'
import '../style/_form.scss';

class Book extends Component {

    constructor(props) {
        super(props);

        //initillerat state
        this.state = {
            name: undefined,
            appointmentTime: undefined,
            mobile: undefined
        }

    }
    
    //spara state i localStorage
    // this and arrow function


    handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })

    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }



    //skapa en metod 
    handleOnSubmit(e) {
        e.preventDefault()


        //this.setState({})
    }
    

    render(){
    return (
        <div className={"form-dev"}>
    <form onSubmit={this.handleOnSubmit} >
        <input type={"text"} placeholder={"Course kode"}  onChange={this.handleOnChangeName}></input>
        <input type={"number"} placeholder={"number of hours"}  onChange={this.handleOnChangeName}></input>
        <input type={"text"} placeholder={"Name"}  onChange={this.handleOnChangeName}></input>
        <input type={"text"} placeholder={"Desired date"} onChange={this.handleOnChangeTime}></input>
        <input type={"number"} placeholder={"telephone number"} onChange={this.handleOnChangeMobile}></input>
        <input type={"email"} placeholder={"E-mail"} onChange={this.handleOnChangeMobile}></input>
        <div className={"btn-dev"}>
            <button type={"submit"} onSubmit={this.handleOnSubmit} className={"submit-btn"}>Book</button>
        </div>
    </form>
    </div>
    )
}
}


export default Book;