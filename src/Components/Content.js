import React from 'react'
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import guideOne from '../assets/guideOne.webp'
import guideTwo from '../assets/guideTwo.webp'
import guideThree from '../assets/guideThree.webp'
import one from '../assets/one.webp'
import two from '../assets/two.webp'
import three from '../assets/three.webp'
import four from '../assets/four.webp'
import five from '../assets/five.webp'
import six from '../assets/six.webp'

function Content() {

  const [width, setWidth] = useState(0)
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <div className='content'>
      <hr/>
      <div className="section-one">
        <h1>New this week</h1>
        <div className="guide">
            <div className="guideOne">
                <img src={guideOne} alt="" />
                <div className="textOne">
                    <p>Collection</p>
                    <h3>Most popular around the world</h3>
                </div>
            </div>
            <div className="guideTwo">
                <img src={guideTwo} alt="" />
                <div className="textTwo">
                    <p>Collection</p>
                    <h3>Great for team building</h3>
                </div>
            </div>
            <div className="guideThree">
                <img src={guideThree} alt="" />
                <div className="textThree">
                    <p>Collection</p>
                    <h3>Fun for the family</h3>
                </div>
            </div>
        </div>
        <div className="options">
            <p className='normalOpt'>Dates</p>
            <p className='normalOpt'>Group size</p>
            <p className='normalOpt'>More filters</p>
            |
            <p className='bgGreyOpt'>Great for groups</p>
            <p className='bgGreyOpt'>Family-friendly</p>
            <p className='bgGreyOpt'>Animals</p>
            <p className='bgGreyOpt'>Arts & writing</p>
            <p className='bgGreyOpt'>Baking</p>
            <p className='bgGreyOpt'>Cooking</p>
            <p className='bgGreyOpt'>Dance</p>
            <p className='bgGreyOpt'>Drinks</p>
            <p className='bgGreyOpt'>Entertainment</p>
            <p className='bgGreyOpt'>Fitness</p>
            <p className='bgGreyOpt'>History & culture</p>
        </div>
      </div>
      <div className="section-two">
        <p className='section-head'>Plan a trip with help from local Hosts around the world</p>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                <motion.div className='item'>
                    <img src={one} alt="" />
                    <p>Plan The Perfect New York Vacation</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={two} alt="" />
                    <p>Design your trip to barcelona with Gemma</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={three} alt="" />
                    <p>Craft a custom trip to Korea with Jay</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={four} alt="" />
                    <p>Live Tulum like a local</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={five} alt="" />
                    <p>Plan a trip to amazing Austin</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={six} alt="" />
                    <p>Create your Rome itinerary with Debora</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={one} alt="" />
                    <p>Plan The Perfect New York Vacation</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={two} alt="" />
                    <p>Design your trip to barcelona with Gemma</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={three} alt="" />
                    <p>Craft a custom trip to Korea with Jay</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={four} alt="" />
                    <p>Live Tulum like a local</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={five} alt="" />
                    <p>Plan a trip to amazing Austin</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
                <motion.div className='item'>
                    <img src={six} alt="" />
                    <p>Create your Rome itinerary with Debora</p>
                    <p className='price'>From Rs.1500</p>
                </motion.div>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Content
