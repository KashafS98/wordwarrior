import React, { useState } from 'react'
import { FactsContainer } from './aboutme.style'
import Button from '../Button'

const RandomThingsAboutMe = [
    "I like my coffee milky and sweet. Love mocha and frapuccino",
    "I love cats, and I'm scared of dogs.",
    "I am a self contradicting person, which is very different from being a hypocrite. People call me <a href='https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat'>schrôdinger's cat</a>.",
    "I'm a friendly extrovert and an empath.",
    "Travelling to mountains, lakes and taking long drives without a particular goal is my favorite way of taking time off!",
    "I am not scared of public speaking",
    "I love HARRY POTTER",
    "I read and write and thus, have a dedicated website for all things <a href='https://art.wordwarrior.in'>art</a>",
    "I like cute little cafes with high aesthetic values, and great desserts (cakes, donuts, pastries)",
    "I hate ice cream. They make my brain freeze",
    "Literature and psychology and mental health awareness. <a href='/contact'>Start</a> a deep, meaningful conversation. No small talks.",
    "I love rains, the smell, the temperature, the breeze, and every time it rains, I feel special, like I'm in a movie about me."
]

export default function RandomFacts() {
    const [index, setindex] = useState(Math.floor((Math.random() * 10) + 1))

    function randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 1; i <= range; i++) {
          arr.push(i)
        }
      
        let result = [];
      
        for (let i = 1; i <= outputCount; i++) {
          const random = Math.floor(Math.random() * (range - i));
          result.push(arr[random]);
          arr[random] = arr[range - i];
        }
        return result[Math.floor(Math.random() * (9))];
      }
      

    return (
        <>
        <FactsContainer dangerouslySetInnerHTML={{__html: RandomThingsAboutMe[index]}}>
        </FactsContainer>
        <Button type="primary" onClick={()=>{setindex(randomUniqueNum(10,10))}}>Randomize</Button>
        </>
    )
}

// 
