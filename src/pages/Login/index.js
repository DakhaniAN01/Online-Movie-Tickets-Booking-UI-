import React from 'react'
import { Form } from 'antd';
import Button from '../../component/Button';
import Link from 'antd/es/typography/Link';

function Login() {

  const onFinish = (values) => {
    console.log("Success:", values);
  }
  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-3 w-400">
        <h1 className='text-xl mb-1' >BOOKMYTICKETS - LOGIN </h1>
        <hr />
        <Form
          layout='vertical'
          className='mt-1'
          onFinish={onFinish}
        >
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
            <button className='w-full bg-secondary border btn border-secondary text-primary bg-white' onClick={() => { console.log("Registered Successful") }} type='submit'>LOGIN</button>
            <Link to='/login' className='text-primary'>
              {" "}
              Don't have an account? Register
            </Link>
          </div>


        </Form>


      </div>

    </div>
  )
}


export default Login