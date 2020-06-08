import React, { Component } from 'react';
import Navbar from './navbar';
import axios from 'axios';

class Form extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            mobileNumber: '',
            file: null,
            imagePreviewUrl:""
         }
        }
    handleChange=e=> {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit=(e) =>{
        e.preventDefault()
        const User ={
            userName : this.state.userName, 
            mobileNumber : this.state.mobileNumber,
            imagePreviewUrl : this.state.imagePreviewUrl
        }
        axios.post('http://localhost:3000/register',User)
        .then(res =>{
            console.log(res);
                if(res){
                    this.props.history.push('/userdetails');
             }
        })
    }

        imageChange=(e) =>{
            e.preventDefault(); 
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
              this.setState({
                file: file,
                imagePreviewUrl: reader.result
              });
            }
           reader.readAsDataURL(file)        
      }

    render() { 
        return ( 
            <React.Fragment>
                <Navbar></Navbar>
                <form className="col-md-3 center_div" onSubmit={this.onSubmit}>
                    <h5>ADD USER DETAILS</h5>
                    <div class="form-group ">
						<div class="input-group">
                            <input 
                            type="text" 
                            className="form-control form-input" 
                            name="userName" 
                            placeholder="Enter Name" 
                            value={this.state.userName}
                            onChange={this.handleChange}
                            >
                            </input>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
                            <input 
                            type="tel" 
                            className="form-control form-input" 
                            name="mobileNumber" 
                            placeholder="Enter Mobile Number" 
                            value={this.state.mobileNumber}
                            onChange={this.handleChange}
                            >
                            </input>
						</div>
					</div>
                    <div className="form-group">
                        <div>
                            <label className="upload_img">Upload Image
                                <input type="file" onChange={this.imageChange}/>
                            </label>
                        </div>
                            <img className="img-responsive form_img" src={this.state.imagePreviewUrl}/>
                    </div><br></br><br></br>
					<div class="form-group">
						<button type="submit" class="btn btn-primary btn-block btn-lg">Submit</button>
					</div>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Form;