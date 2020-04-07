import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'
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

class ProductGrid extends React.Component {
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const items = data.allMarkdownRemark.edges
  
      return (
        <Layout location={this.props.location} title={siteTitle}>
            <SideBar /*sections={sections}*/>
            </SideBar>

    <div id="main">
        <div className="container">
          

        <ThumbnailsWrapper>
          {items.map(({ node }) => {
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
          
  </div>
  </div>
        </Layout>
      )
    }
  }
  
  export default ProductGrid
  
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
  