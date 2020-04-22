import React, { Component } from 'react';
import './Contact.css';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';



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
    
    render() {
        return (
            <div className="contact-main">
                <h1 className="contact-title">Let's Talk</h1>
                <div>
                    <Form layout="vertical">
                        <Form.Item
                            label="Full Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please insert your full name!',
                                }
                            ]}
                        >
                            <Input name="name" type="text" value={this.state.name} placeholder="Full Name"/>
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please insert your Email!',
                                }
                            ]}
                        >
                            <Input name="email" type="text" value={this.state.email} placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please insert Messages!',
                                }
                            ]}
                        >
                            <Input.TextArea 
                                name="message" 
                                value={this.state.message}
                                autoSize={{minRows: 4}}
                            />
                        
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary">Send</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact
