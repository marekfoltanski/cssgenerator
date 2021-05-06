import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import BoxShadow from '../components/Generator/BoxShadow/BoxShadow'
import Seo from '../components/Seo/Seo'

const BoxShadowPage = ({location}) => (
<>
  <Seo
    title="CSS Box shadow generator | CSSGENERATOR.PL"
    description="CSS BOX SHADOW GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Box Shadow Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj box shadow i skopiuj gotowy kod." />
  <NavPages />
  <BoxShadow />
</>
)

export default BoxShadowPage
