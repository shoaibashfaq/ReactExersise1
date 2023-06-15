import React,{Component} from "react";

class Contact extends Component{
    constructor(props){
        super(props)
    }
    
    name=this.props;

    render(){
        return <h1>{this.props.name} {this.props.address}</h1>
    }
}

export default Contact