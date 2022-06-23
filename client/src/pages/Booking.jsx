import { Col, Row, Divider, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { getCar } from '../redux/actions/carActions';

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { car, loading, error } = useSelector((state) => state.cars);
  const [openForm, setOpenForm] = useState(false);
  const [message, setMessage] = useState(false);
  const [details, setDetails] = useState(true)

  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);



  return (
    <Layout>
      {loading && <Spinner />}
      {error && <p>Something went wrong...</p>}
      <Row
        justify='center'
        className='d-flex align-items-center'
        style={{ minHeight: '80vh' }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} alt='' className='car_image_2 box-shadow1' />
        </Col>

        <Col lg={10} sm={24} xs={24}>
          <Divider type='horizontal' dashed>
           <h1>Car info</h1> 
          </Divider>
        {details &&  <div>
            <p>Car: {car.name}</p>
            <p>Rent: {car.rentPerHour} per hour</p>
            <p>Fuel type: {car.fuelType}</p>
            <p>Max persons: {car.capacity}</p>
            <button className='btn-orange' onClick={() =>{ setOpenForm(true); setDetails(false);}}>
               Book now         
            </button>
          </div>} {openForm && <div>
          <Form
            layout='vertical'
            className='p-5'
            // onFinish={onFinish}
          >
            <h1>Book now </h1>
            <hr />
            <Row gutter={16} className='d-flex align-items-center'>
              <Col lg={12}>
              <Form.Item
              name='name'
              label='Name'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
              </Col>
              <Col lg={12}> 
               <Form.Item
              name='surname'
              label='Surname'
              rules={[{ required: true }]}
            >
              <Input  />
            </Form.Item>
            </Col>
            </Row>
           

          

            <Form.Item
              name='phone'
              label='Telephone'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16} className='d-flex align-items-center'>
              <Col lg={12}> 
              <Form.Item
              name='startDate'
              label='Start Date'
              rules={[{ required: true }]}
            >
              <Input type="date"/>
            </Form.Item></Col>
            <Col lg={12}> 
             <Form.Item
              name='endDate'
              label='End Date'
              rules={[{ required: true }]}
            >
              <Input type='date' />
            </Form.Item>
            </Col>
            </Row>
            <button className='btn-orange mt-1 mb-2' onClick={()=> {
              setOpenForm(false);
              setMessage(true);
              }}>
              Confirm
              </button>
          </Form></div>}
          {message && <div style={{border: '1px solid black', borderRadius: '10px'}} className="p-5">
            <h1 style={{color: 'red', textAlign: 'center'}}>You successfully booked your car!</h1>
            <h2 style={{color: 'orange', fontSize: '18px'}} >You can take your car from 08:00 o'clock to 20:00 o'clock every day!</h2>
            
            
          </div>}
          <div className='pt-3'>
             <Link to='/'>Back to all cars</Link>
          </div>
        
        </Col>
      </Row>
    </Layout>
  );
};

export default Booking;
