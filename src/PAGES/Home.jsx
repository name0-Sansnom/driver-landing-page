import React from 'react';
import ContactForm from '../component/ContactForm';
import './home.css';
import { Card } from 'react-bootstrap';
import { AiOutlineDownCircle } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home_bg">
      <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <div className='card_txt'>
            <h1 className='card_title'>Make Money Driving with Bolt</h1>
            <p className='card_detail'>Become a bolt Driver, Set your schedule and earn extra money <br/> by driving!</p>

            <Card.Link href="#learn-more">
              Learn More <AiOutlineDownCircle />
            </Card.Link>
          </div>
        </div>
        <div className='col-md-4'>
          <ContactForm />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
