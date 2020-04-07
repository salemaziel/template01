import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'
import Rgallery from '../components/Rgallery'
import Shoptop from '../assets/images/hills10.jpg'

import { Link } from 'gatsby'
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

  class Shop extends React.Component {
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const products = data.allMarkdownRemark.edges
  
      return (
        <Layout location={this.props.location} title={siteTitle}>

        <SideBar /*sections={sections}*/ />
        <div id="main">
            
            <section id="shoptop">
                <div className="container">
                <ThumbnailsWrapper>
                    {products.map(({ node }) => {
                        const { title, image, price } = node.frontmatter
                            return (
                                <ItemThumbnail
                                    key={node.fields.slug}
                                    link={node.fields.slug}
                                    heading={title}
                                    image={image.childImageSharp.fluid}
                                    price={price}
                                />
                            )
                        })}
                </ThumbnailsWrapper>
                    <div>
                       {/*} <img src={Shoptop} />*/}
                    </div>
                </div>

</section>
            {/*<section id="mygallery" className="mygallery">
                <div className="container">
                    <Rgallery id="rgallery"/>
                </div>
                    </section>*/}
        </div>


    </Layout>
)
}
}

export default Shop

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          price
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`