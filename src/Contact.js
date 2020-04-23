import React, { Component } from 'react';
import './Contact.css';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';




export class Contact extends Component {
    constructor (props) {
        super(props);
        this.state={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
        
    }

    handleChange = (event) => {
        // console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log(event.target);
        
        this.setState({
            emailSent: true,
            disabled: true,
            
        })

    }

    // onFinish = values => {
    //     this.setState({
    //         disabled: true,
            
    //     })
    // }
    
    render() {
        return (
            <div className="contact-main">
                <h1 className="contact-title">Let's Talk</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="label">Full Name</label>
                            <input 
                                name="name"
                                type="text" 
                                className="form-control" 
                                placeholder="Full Name" 
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            
                        </div>

                        <div className="form-group">
                            <label className="label">Email</label>
                            <input 
                                name="email"
                                type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            <div className="invalid-feedback">
                                Please insert your Full Name!
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="label">Message</label>
                            <textarea 
                                className="form-control"
                                name="message"
                                placeholder="Messages"
                                value={this.state.message}
                                onChange={this.handleChange}
                                rows="5"
                                required
                            />
                        
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={this.state.disabled}
                        >
                        Submit
                        </button>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
