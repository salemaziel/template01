import React from 'react';
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index';

import Pic8 from '../assets/images/pic08.jpg';
import InstagramEmbed from 'react-instagram-embed';

import { Container, Row, Col } from 'reactstrap';

const About = () => (
  <Layout>
    <SideBar />

    <div id="main">
      <section id="about" className="three">
        <div className="container">
          <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
            <Col>
              <header>
                <h2>About Me</h2>
              </header>
            </Col>
          </Row>

          <a href="#" className="image featured">
            <img src={Pic8} alt="" />
          </a>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <hr />
          <br />
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/B58p_UBjd19/"
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <div style={{margin: '0 2rem 8rem'}}>
                <h4 style={{color: 'gray!important', fontSize: '1.5rem'}}>More About Me</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default About;
