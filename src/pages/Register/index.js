import React from 'react'
import { Form } from 'antd';

import Link from 'antd/es/typography/Link';

function Register() {

  const onFinish = (values) => {
    console.log("Success:", values);
  }
  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-3 w-400">
        <h1 className='text-xl mb-1' >BOOKMYTICKETS - REGISTER </h1>
        <hr />
        <Form
          layout='vertical'
          className='mt-1'
          onFinish={onFinish}
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
          <div className='.flex flex-column mt-1 gap container '>
            <button className='w-full bg-secondary border btn border-secondary text-primary bg-white' onClick={ ()=>{console.log("Registered Successful")}} type='submit'>REGISTER</button>
            <Link to='/login' className='text-primary'>
              {" "}
              Already have an account? Login
            </Link>
          </div>


        </Form>


      </div>

    </div>
  )
}


export default Register