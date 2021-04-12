import React from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata';
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({title, description, image, location}) => {
  const { siteURL } = useSiteMetadata();
  return(
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title}/>
      <meta name="description" content={description}/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content={`${siteURL}${location.pathname}`}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={`${siteURL}${location.pathname}`}/>
      <meta property="twitter:title" content={title}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={image}/>

      <link rel="canonical" href={`${siteURL}${location.pathname}`} />

      <html lang="pl-PL" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

SEO.defaultProps = {
  image: "https://cssgenerator.pl/static/cssgenerator.png",
}

export default SEO
