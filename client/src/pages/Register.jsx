import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(userRegister(values));
  };
  return (
    <div className='login d-flex align-items-center justify-content-center'>
      <Row gutter={16} className='d-flex align-items-center'>
        <Col lg={16} style={{ position: 'relative' }}>
          <img
          src="https://www.cnet.com/a/img/resize/767e0e1b4f056b0656d9e213b405e50e370b431d/2021/08/30/08a56f0e-aa2d-4870-8303-1cde5a25d842/2022-porsche-macan-001.jpg?auto=webp&fit=crop&height=488&width=868"
            // src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
            alt='car'
          />
        </Col>

        <Col lg={8} className='text-left p-5'>
          <Form
            layout='vertical'
            className='login-form p-5'
            onFinish={onFinish}
          >
            <h1>Register</h1>
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
              <Input type="password" />
            </Form.Item>

            <Form.Item
              name='cpassword'
              label='Confirm Password'
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>

            <button className='btn-orange mt-1 mb-2'>Register</button>
            <br />
            <Link to='/login'>Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
