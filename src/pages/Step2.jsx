import React from 'react'

import { Link } from 'react-router-dom'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
import ToogleButton from '../components/ToogleButton'
import { motion } from 'framer-motion';
const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export default function Step2({ total, addPlan, isYearly, toggleBilling }) {
  const plans = [{ img: Arcade, title: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
  { img: Advanced, title: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
  { img: Pro, title: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }];
  return (
    <div className="main">
      <h1 className='h1'>Select your plan</h1>
      <p className="sub">You have the option of monthly or yearly billing.</p>
      <div className="container flex flex-col items-center md:flex-row gap-3 justify-between my-5">
        {plans.map(plan => {
          let spanClass = total.plan.title === plan.title ? 'eve' : '';
          const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
          return (

            <div className={`${spanClass} input w-full md:w-36 md:h-36 flex flex-row md:flex-col p-2  md:p-5`} key={plan.title} onClick={() => addPlan(plan)} >
              <div className='pb-0  md:pb-5 pr-5 md:pr-0'>
                <img src={plan.img} alt="" />
              </div>
              <div>
                <h3 className='h1 text-lg'>{plan.title}</h3>
                <p className='sub text-lg font-bold'>{`$${price}/${isYearly ? 'yr' : 'mo'}`}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='bg-aliceBlue p-3 md:p-4 w-full my-4 float-center rounded-lg'>
        <ToogleButton onToggle={toggleBilling} isYearly={isYearly} />
      </div>
      <motion.div className="button-wrapper flex justify-between mt-3 text-lg"
        variants={nextVariants}
        initial="hidden"
        animate="visible">
        <button className='text-coolGray hover:text-polynesianBlue'>
          <Link to={'/'}>Go back</Link> </button>
        {total.plan ? (<button className='btn'> <Link to={'/step3'}>Next Step</Link> </button>) : (<button className='btn' disabled>Next Step</button>)}
    </motion.div>
    </div >
  )
}
