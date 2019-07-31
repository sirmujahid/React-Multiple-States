import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SignUp extends Component {

    state = {
        name: "",
        fname: "",
        address: "",
        postalcode: ""
    }

    whileChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }
        render(){
            return(
                <div>
                    <h1>Online Admission Form :</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label >Name:</label> 
                                <input type="text" 
                                name="name" 
                                placeholder="Enter Name:" 
                                onChange={this.whileChange} 
                                className="form-control"/> <br/>
                            </div>
                            <div className="col"><br/><
                                p>{this.state.name}</p></div>
                        </div>    


                        <div className="row">
                            <div className="col">
                                <label >Father's Name:</label> 
                                <input type="text" 
                                name="fname" 
                                placeholder="Enter Father's Name" 
                                onChange={this.whileChange} 
                                className="form-control"/>
                            </div>
                            <div className="col"><br/>
                            <p>{this.state.fname}</p></div>
                        </div>   

                        <div className="row">
                            <div className="col">
                                <label >Addrss:</label> 
                                <textarea type="text" 
                                name="address" 
                                placeholder="Address" 
                                onChange={this.whileChange} 
                                className="form-control"/>
                            </div>
                            <div className="col"><br/>
                            <p>{this.state.address}</p></div>
                        </div>    

                        <div className="row">
                            <div className="col">
                                <label >Zip Name:</label> 
                                <input type="text" 
                                name="postalcode" 
                                placeholder="ZIP Code" 
                                onChange={this.whileChange} 
                                className="form-control"/>
                            </div>
                            <div className="col"><br/>
                            <p>{this.state.postalcode}</p></div>
                        </div>     


                        <div className="row">
                            <div className="col">
                                <br/>
                                <button 
                                className="btn btn-success"> 
                                Submit </button>
                            </div>

                        </div>   
                    </div>   

                </div>

                
            );
        }
}

export default SignUp;
