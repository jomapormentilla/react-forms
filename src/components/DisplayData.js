import React from 'react'

class DisplayData extends React.Component {
    render(){
        return(
            <div>
                <h1>First: { this.props.formData.firstName }</h1>
                <h1>Last: { this.props.formData.lastName }</h1>
            </div>
        )
    }
}

export default DisplayData