// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import SideBar from '../components/Sidebar/index'




import Layout from "../components/Layout";

const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
`

const ImgStyled = styled(Img)`
  width: 100%;
  height: 400px;
`

const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
  background: white;
`
const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  background: whitesmoke;
  font-weight: 700;
  border: 2px;
  border-width: 2px 2px 2px solid;
  border-radius: 5px;
  outline: none;
  color: purple;
`
const DropdownOption = styled.option`
  padding: 10px;
  background: whitesmoke;
  font-weight: 700;
  border: none;
  outline: none;
  color: purple;
`

const BuyButton = styled.button`
  padding: 20px;
  background: purple;
  font-weight: 700;
  margin: 1rem 0 3rem;
`

class Product extends React.Component {
  state = {
    selected: this.props.data.markdownRemark.frontmatter.customField.values[0].name
  }

  setSelected = (value) => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = (values) => {
    return values.map(option => {
      const price = option.priceChange >= 0 ? `[+${option.priceChange}]` : `[${option.priceChange}]`
      return `${option.name}${price}`
    }).join('|')
  }

   // calculate price based on option selected for display on product page
  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(option => option.name === this.state.selected)
    return (basePrice + selectedOption.priceChange).toFixed(2)
    
  }

  render() {
    const product = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
 
    <SideBar /*sections={sections}*/>
    </SideBar>
    
    <div id="main">
    
      <div className="container">
        <Heading>{product.frontmatter.title}</Heading>

        <ImgStyled fluid={product.frontmatter.image.childImageSharp.fluid} />

        <Price>${this.updatePrice(product.frontmatter.price, product.frontmatter.customField.values)}</Price>
        <Description>{product.frontmatter.description}</Description>
        <Dropdown
          id={product.frontmatter.customField.name}
          onChange={(e) => this.setSelected(e.target.value)}
          value={this.state.selected}>
          {product.frontmatter.customField.values.map((option) => (<DropdownOption key={option.name}>{option.name}</DropdownOption>))}
          
        </Dropdown>

        <BuyButton
          className='snipcart-add-item'
          data-item-id={product.frontmatter.id}
          data-item-price={product.frontmatter.price}
          data-item-name={product.frontmatter.title}
          data-item-description={product.frontmatter.description}
          data-item-image={product.frontmatter.image.childImageSharp.fluid.src}
          data-item-url={"https:/yourwebsite.com" + product.fields.slug} //REPLACE WITH OWN URL
          data-item-custom1-name={product.frontmatter.customField ? product.frontmatter.customField.name : null}
          data-item-custom1-options={this.createString(product.frontmatter.customField.values)}
          data-item-custom1-value={this.state.selected}>
          
            <span className="icon fa-cart-plus" />
            Add to basket
        </BuyButton>
        </div>
        
        </div>
       

      </Layout>
    )
  }
}

export default Product;

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        customField {
          name
          values {
            name
            priceChange
          }   
        }
      }
    }
  }
`
