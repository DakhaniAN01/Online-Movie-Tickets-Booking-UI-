import React from 'react'
import { Form } from 'antd';
import Button from '../../component/Button';

function Register() {
  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-3 w-400">
        <h1 className='text-xl mb-2' >BOOKMYTICKETS - REGISTER </h1>
        <hr />
        <Form
          layout='vertical'
          className='mt-2'
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
          <div className='.flex flex-column mt-1 gap'> <Button fullwidth title='REGISTER' type='submit'/> </div>
          

        </Form>


      </div>

    </div>
  )
}


export default Register