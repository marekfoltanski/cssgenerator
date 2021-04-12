import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import NavPages from "../components/NavPages/NavPages"
import Transition from "../components/Generator/Transition/Transition"
import SEO from "../components/SEO/SEO"

const TransitionPage = ({ location }) => (
  <>
    <SEO
      title="CSS Transition generator | CSSGENERATOR.PL"
      description="CSS TRANSITION GENERATOR | Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj wartości i skopiuj gotowy kod."
      location={location}
    />
    <PageHeader
      h1="Transition Generator"
      desc="Wygodne narzędzie, dzięki któremu wygenerujesz gotowe reguły CSS. Dostosuj transition i skopiuj gotowy kod."
    />
    <NavPages />
    <Transition />
  </>
)

export default TransitionPage
