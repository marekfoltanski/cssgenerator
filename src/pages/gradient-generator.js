import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import Gradient from '../components/Generator/Gradient/Gradient.js'
import SEO from '../components/SEO/SEO'

const GradientPage = ({location}) => (
<>
  <SEO
    title="CSS Gradient generator | CSSGENERATOR.PL"
    description="CSS GRADIENT GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
  <PageHeader h1="Gradient Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj gradient i skopiuj gotowy kod." />
  <NavPages />
  <Gradient/>
</>
)

export default GradientPage
