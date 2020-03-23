import React, { Component } from 'react';
import axios from "axios";

class EmailSubscription extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            isLoading: false,
            isError: false,
            message: ''
        }
    }

    onEmailChange = (event)=> {
        this.setState({ email: event.target.value })
        console.log(this.state);
        
    }

    handleSubmit = async (event) => {
     
            
            event.preventDefault();
            console.log("handleSubmit ===> ", event);
            if (this.state.email) {
                this.setState({ isLoading: true });
                // TODO: use this as env variable
                const apiUrl = 'http://localhost:3000/api/users'
                let response = await axios.post(apiUrl, {
                    email: this.state.email
                }).catch(error=>{
                    this.setState({
                        isError: true,
                        isLoading: false,
                        
                        message: error?.response?.data?.error?.message || "Some error, Please try after some time"
                    });

                })
                
                if (response && response.data) {
                    let email = this.state.email;
                    this.setState({
                        isError: false,
                        isLoading: false,
                        email: '',
                        message: `Email ${email} subscribed.`
                    });
                    // console.log("API data ===> ", response);
                    setTimeout(() => {
                        this.setState({
                            message: ''
                        })
                        // config variable
                    }, 2000);
                }
            }
        
    }

    render() {
        const messageClass = this.state.isError ? 'alert alert-danger' : 'alert alert-success';
        return (
            <div className="card w-75 mx-auto mt-5 shadow-sm">
                <h5 className="card-title border-bottom p-2">Signup</h5>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                        <div className="form-group">
                            <label> Email </label>
                            <input className="form-control" value={this.state.email} type="email"
                                placeholder="example@example.com" onChange={this.onEmailChange} required />
                        </div>
                        <div className="form-group text-center">
                            <button
                                type="submit"
                                className="btn btn-primary shadow mb-2"
                                disabled={!this.state.email || this.state.isLoading}>
                                Subscribe
                            </button>
                            {
                                this.state.message &&
                                <div className={messageClass}>
                                    {this.state.message}
                                </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EmailSubscription;