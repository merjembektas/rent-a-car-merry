import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userLogin } from '../redux/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(userLogin(values));
  };

  return (
    <div className='login d-flex align-items-center justify-content-center'>
      <Row gutter={16} className='d-flex align-items-center'>
        <Col lg={16} style={{ position: 'relative' }}>
          <img
            // style={{ height: '100vh', maxWidth: '100vw', width: '100%', objectFit: 'cover', position: 'relative' }}
            src='https://www.cnet.com/a/img/resize/767e0e1b4f056b0656d9e213b405e50e370b431d/2021/08/30/08a56f0e-aa2d-4870-8303-1cde5a25d842/2022-porsche-macan-001.jpg?auto=webp&fit=crop&height=488&width=868'
            alt='car'
          />
        </Col>

        <Col lg={8} className='text-left p-5'>
       
          <Form
            layout='vertical'
            className='login-form p-5'
            onFinish={onFinish}
          >
            <h1 style={{marginBottom: '-8px'}}>Rent a car </h1> 
            <h1>MERRY</h1> 
            <h1>Login</h1> 
            
            <hr />
            <Form.Item
              name='username'
              label='Username'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Password'
              rules={[{ required: true }]}
            >
              <Input type='password' />
            </Form.Item>

            <button className='btn-orange mt-1 mb-2'>Login</button>

            <br />

            <Link to='/register'>Click here to register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
