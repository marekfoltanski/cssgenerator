import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import SEO from '../components/SEO/SEO'

const ButtonPage = ({location}) => (
<>
  <SEO
    title="CSS Button generator | CSSGENERATOR.PL"
    description="CSS BUTTON GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Button Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj button i skopiuj gotowy kod." />
  <NavPages />
  <p style={{textAlign: "center",}}>soon...</p>
</>
)

export default ButtonPage
