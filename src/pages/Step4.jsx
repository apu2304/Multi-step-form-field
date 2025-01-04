import React from 'react'
import { Link } from 'react-router-dom'
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



export default function Step4({ total, isYearly, toggleBilling }) {
  const planPrice = isYearly ? total.plan.yearlyPrice : total.plan.monthlyPrice;
  const addonsPrice = total.addons.reduce((sum, addon) => sum + (isYearly ? addon.yearlyPrice : addon.monthlyPrice), 0);
  const totalPrice = planPrice + addonsPrice;
  return (
    <div className='main'>
      <h1 className="h1"> Finishing up</h1>
      <p className="sub">Double-check everything looks OK before confirming.</p>
      <div className="bg-aliceBlue p-10 m-3 rounded-lg">
        <span className="h1">{total.plan.title}</span>
        <span className='float-right font-bold text-polynesianBlue mt-1'>{`$${planPrice}/${isYearly ? 'yr' : 'mo'}`}</span>
        <p onClick={toggleBilling} className='cursor-pointer text-blue-600 underline'>Change</p>
        <div className='w-full border-b-2 border-b-slate-200 rounded-md'></div>
        {total.addons.map((addon) => (
          <div key={addon.title}>
            <span className="text-coolGray mb-2">{addon.title}</span>
            <span className='float-right font-bold text-coolGray'>{`$${isYearly ? addon.yearlyPrice : addon.monthlyPrice}/${isYearly ? 'yr' : 'mo'}`}</span>
          </div>
        )
        )}
      </div>
      <div className="px-5  pb-12">
        <span className='text-coolGray font-medium text-lg mt-3'>Total Price</span>
        <span className='h1 float-right'>{`$${totalPrice}/${isYearly ? 'yr' : 'mo'}`}</span>
      </div>
      <motion.div className="button-wrapper flex justify-between mt-3 text-lg"
            variants={nextVariants}
            initial="hidden"
            animate="visible">
            <button className='text-coolGray hover:text-polynesianBlue'>
              <Link to={'/step3'}>Go back</Link> </button>
            {total.plan ? (<button className='btn'> <Link to={'/step5'}>Next Step</Link> </button>) : (<button className='btn' disabled>Next Step</button>)}
        </motion.div>
    </div>
  )
}
