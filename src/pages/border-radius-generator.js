import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import BorderRadius from '../components/Generator/BorderRadius/BorderRadius'
import Seo from '../components/Seo/Seo'

const BorderRadiusPage = ({location}) => (
<>
  <Seo
    title="CSS Border radius generator | CSSGENERATOR.PL"
    description="CSS BORDER RADIUS GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Border Radius Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj border radius i skopiuj gotowy kod." />
  <NavPages />
  <BorderRadius />
</>
)

export default BorderRadiusPage
