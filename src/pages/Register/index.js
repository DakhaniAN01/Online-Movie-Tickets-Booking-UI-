import React from 'react'
import { Button, Form } from 'antd';

function Register() {
  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-3">
        <h1 className='text-xl'>
          BOOKMYTICKETS - REGISTER
          <Form
            layout='vertical'
          
          >
            <Form.Item
              label="Name"
              name="name"
              rule={[{ required: true, message: "Please enter your name!" }]}
            >
              <input type="text" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rule={[{ required: true, message: "Please enter your email!" }]}
            >
              <input type="email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rule={[{ required: true, message: "Please enter your password!" }]}
            >
              <input type="password" />
            </Form.Item>


          </Form>

        </h1>
      </div>

    </div>
  )
}

export default Register