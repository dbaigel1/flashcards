import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import cardsData from "../data/cards.json"
import moment from 'moment'


const Study = () => {
  const [allCards, setAllCards] = useState("")
  const [todaysCards, setTodaysCards] = useState("")

  useEffect(()=> {
    /* get cards from json */
    setAllCards(Object.entries(cardsData).reduce((acc, currLevel) => {
      const cardsInLevel = currLevel[1]
      acc = acc.concat(cardsInLevel)
      return acc

    }, []))

  }, [])

  useEffect(() => {
    if(allCards){
      /* determine only the cards that we need by subtracting dates and comparing with valueToStudy done w moment library*/
      /* if valueToStudy and subtracted dates are equal or higher, push to todaysCards
        once we're done checking all the cards, we can use todaysCards as our database
      */
      
      const today = moment()

      setTodaysCards(allCards.filter(card => today.diff(moment(card.lastDate, "MM-DD-YYYY"),'days') >= card.valueToStudy))
      
  }

  }, [allCards])


  console.log(allCards)
  return (
  <Layout>
    {todaysCards ? todaysCards.map(card => {
      return <p key={card.id}>{card.front} {card.back}</p>
    }): null }
    <p>a list of cards pulled from data</p>
    

  </Layout>
)}

export default Study