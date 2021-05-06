import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import NavPages from '../components/NavPages/NavPages'
import Transform from "../components/Generator/Transform/Transform"
import Seo from '../components/Seo/Seo'

const TransformPage = ({location}) => (
<>
  <Seo
    title="CSS Transform generator | CSSGENERATOR.PL"
    description="CSS TRANSFORM GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
<PageHeader h1="Transform Generator" desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj transform i skopiuj gotowy kod." />
  <NavPages />
  <Transform/>
</>
)

export default TransformPage
