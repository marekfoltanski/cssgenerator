import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import Background from '../components/Generator/Background/Background'
import SEO from '../components/SEO/SEO'

const BackgroundPage = ({location}) => (
<>
  <SEO
    title="CSS Background generator | CSSGENERATOR.PL"
    description="CSS BACKGROUND GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Background Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości background i skopiuj gotowy kod." />
  <NavPages />
  <Background/>
</>
)

export default BackgroundPage
