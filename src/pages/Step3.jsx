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


export default function Step3({ addAddon, total, isYearly, toggleBilling }) {
  const addons = [{ title: "Online service", para: "Access to multiplayer games", yearlyPrice: 10, monthlyPrice: 1 },
    { title: "Larger storage", para: "Extra 1TB of cloud save", yearlyPrice: 20, monthlyPrice: 2 },
    { title: "Customizable Profile", para: "Custom theme on your profile", yearlyPrice: 20, monthlyPrice: 2}]
  return (
    <div className='main'>
      <h1 className="h1"> Pick add-ons</h1>
      <p className='sub'> Add-ons help enhance your gaming experience.</p>
      <div className="flex flex-col gap-4 p-4">
        {addons.map((addon, index) => {
          console.log(total.addons);
          let spanClass = total.addons.includes(addon) ? 'eve' : '';
          const price = isYearly ? addon.yearlyPrice : addon.monthlyPrice;
          return (
            <div key={index} className={`input p-3 ${spanClass}`}>
              <input type="checkbox" className={`inline checked:bg-palatinateBlue`} onClick={() => addAddon(addon)}/>
              <span className='h2 ml-4'>{addon.title}</span>
                <span className='block text-sm ml-3 md:ml-0 mr-24'>{addon.para}</span>
              <span className="float-right text-polynesianBlue font-bold">{`$${price}/${isYearly ? 'yr' : 'mo'}`}</span>
            </div>
          )
        })}
      </div>
      <motion.div
        variants={nextVariants}
        initial="hidden"
        animate="visible"
       >
      <button className='float-start mt-3 text-coolGray text-lg hover:text-polynesianBlue '><Link to={'/step2'}>Go back</Link></button>
      <button className="btn  float-end"><Link to={'/step4'}>Next Step</Link></button>
      </motion.div>
    </div>
  )
}
