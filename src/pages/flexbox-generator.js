import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import FlexBox from '../components/Generator/Flexbox/Flexbox'
import Seo from '../components/Seo/Seo'

const FlexboxPage = ({location}) => (
<>
  <Seo
    title="CSS Flexbox generator | CSSGENERATOR.PL"
    description="CSS FLEXBOX GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Flexbox Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj flexbox i skopiuj gotowy kod." />
  <NavPages />
  <FlexBox />
</>
)

export default FlexboxPage
