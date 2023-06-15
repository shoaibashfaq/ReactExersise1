import React,{Component} from "react";
import PropTypes from "prop-types";


class Contact extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
            <h1>Contact Name: {this.props.name}</h1>
            <h2>Mobile Number:{this.props.mobileNumber}</h2>
            <h2>Work Phone: {this.props.workNumber}</h2>
            <h2>Email: {this.props.email}</h2>

        </div>
        )
    }
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    workNumber:PropTypes.string
    
}
        
export default Contact;