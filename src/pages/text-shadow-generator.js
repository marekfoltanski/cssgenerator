import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import TextShadow from '../components/Generator/TextShadow/TextShadow'
import SEO from '../components/SEO/SEO'

const TextShadowPage = ({location}) => (
<>
  <SEO
    title="CSS Text shadow generator | CSSGENERATOR.PL"
    description="CSS TEXT SHADOW GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Text Shadow Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj text shadow i skopiuj gotowy kod." />
  <NavPages />
  <TextShadow />
</>
)

export default TextShadowPage
