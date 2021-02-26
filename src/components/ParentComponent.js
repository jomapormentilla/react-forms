import React from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

class ParentComponent extends React.Component {
    state = {
        firstName: "John",
        lastName: "Henry",
        submittedData: []
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        }, ()=>{console.log(this.state)})
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        }, ()=>{console.log(this.state)})
    }

    handleGeneric = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        let formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        let dataArray = this.state.submittedData.concat(formData)
        this.setState({ submittedData: dataArray }, ()=>{console.log(this.state)})
    }
    
    render(){
        return(
            <div>
                <Form 
                    formData={ this.state }
                    handleGeneric={ this.handleGeneric }
                    handleSubmit={ this.handleSubmit }
                />
                <DisplayData formData={ this.state } />
            </div>
        )
    }
}

export default ParentComponent