import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav2 from './Nav2';
import TopNav from './TopNav';
import config from '../../../config';
import { Link } from 'gatsby'

const pic = require('../../assets/img/color-circle-articles-2015356.png');


export default function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <Header
            avatar={pic}
            title={config.authorName}
            heading={config.heading}
          />
          <Nav2 sections={sections} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>

      {/* <section id="header">
        <Header
          avatar={pic}
          title={config.authorName}
          heading={config.heading}
        />
        <Nav sections={sections} />
        <Footer socialLinks={config.socialLinks} />
      </section> */}
    </div>
  );
}
