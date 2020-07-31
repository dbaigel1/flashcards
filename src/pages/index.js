import React from "react"
import List from "../components/List"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> Japanese Flashcards </h1>
    <List title="Japanese Vocab" link="japanese"/>
    
  </Layout>
)

export default IndexPage

/* on page load:
    calculate today's date - each card's date. if time is a certain value (e.g. level 1 value is 1, level 2 value is 2 etc.) then add that card to "tostudy" group. Then after a card has been studied, move it to the appropriate level, either up one if right or down 1 if wrong
*/

// data = {

//   level1: [
//     {
//       front: "hi",
//       back: "こんにちは",
//       lastDate: "that date",
//       currentLevel: 1,
//       valueToStudy: 1 //value needed to add to study section

//     },
//   {

//   }],
//   level2: [],
//   level3: []



// }