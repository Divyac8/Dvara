import React, { Component } from 'react';
import Navbar from './navbar';
import axios from 'axios';

class UserDetails extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            userName:"",
            mobileNumber:"",
            file:null,
            displayData: false,
            record: '',
            count: ''
         }
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const { displayData } = this.state;
        axios.get('http://localhost:3000/getUsers/'+ this.state.mobileNumber)
        .then(res =>{
                const record = res.data
                this.setState({record})
                if(res){
                    this.setState({ displayData: !displayData })
                }
            })
    }
    handleChange=e=> {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentDidMount=()=>{ 
        axios.get('http://localhost:3000/getUsers')
        .then(res => {
                const count = res.data.length
                this.setState({count})
            })
        }
    
    render() { 
        const {displayData} = this.state;
        return ( 
            <React.Fragment>
                <Navbar></Navbar>
                <p>Total Users: {this.state.count}</p>
                <form className="col-md-3 center_div" onSubmit={this.onSubmit}>
                    <h5>FIND USER DETAILS</h5>
                    <div class="form-group ">
						<div class="input-group">
                            <input 
                            type="tel" 
                            className="form-control mobile form-input" 
                            name="mobileNumber" 
                            placeholder="Enter Mobile Number" 
                            value={this.state.mobileNumber}
                            onChange={this.handleChange}
                            >
                            </input>
						</div>
					</div>
                    <div class="form-group">
						<button type="submit" class="btn btn-primary btn-block btn-lg">Submit</button>
					</div>
                    {displayData 
                    ?  <div className="display_data">
                    <div>
                    <p>NAME: {this.state.record.userName}</p>
                    <p>MOBILE NUMBER: {this.state.record.mobileNumber}</p>
                    <p>DATE OF REGISTRATION:{this.state.record.time}</p>
                    </div>
                    <img className="img-responsive form_img"  src= {this.state.record.imagePreviewUrl}></img>
                                        
                </div>
                    : null
                    }
                </form>
                </React.Fragment>
         );
    }
}
 
export default UserDetails;