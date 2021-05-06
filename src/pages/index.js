import React from "react"
import Seo from '../components/Seo/Seo'
import HeaderHome from '../components/HeaderHome/HeaderHome'

const IndexPage = ({location}) => (
  <>
  <Seo
    title="CSS GENERATOR | Kaskadowe Arkusze Stylów"
    description="CSS GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
    location={location}
  />
  <HeaderHome />
  </>
)

export default IndexPage
