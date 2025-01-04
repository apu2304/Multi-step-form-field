import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Step1 from './pages/Step1'
import Step2 from './pages/step2'
import Step3 from './pages/Step3'
import Step4 from './pages/Step4'
import Step5 from './pages/Step5'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [total, setTotal] = useState({plan: '', addons: []});
  const [isYearly, setIsYearly] = useState(false);
  const addPlan = (plan) => {
    setTotal({...total,  plan});
  }
  const addAddon = (addon) => {
    let newAddons;
    if(!total.addons.includes(addon)){
      newAddons = [...total.addons, addon];
    }else{
      newAddons = total.addons.filter((item) => item !== addon);
    }
    setTotal({...total, addons: newAddons});
  }
  const toggleBilling = () => { setIsYearly(!isYearly); };

  return (
    <div className=' bg-aliceBlue h-screen flex items-start md:items-center justify-start md:justify-center '>
      <div className="bg-none md:bg-white flex flex-col md:flex-row w-fit gap-0 md:gap-3 p-0 md:p-6 rounded-xl">
        <div>
          <Sidebar />
        </div>
        <div className='flex items-start md:items-center justify-center md:justify-start'>
          <Routes>
            <Route path='/' element={<Step1 />} />
            <Route path='/step2' element={<Step2 total={total} addPlan={addPlan} isYearly={isYearly} toggleBilling={toggleBilling} />} />
            <Route path='/step3' element={<Step3 total={total} addAddon={addAddon} isYearly={isYearly} toggleBilling={toggleBilling} />} />
            <Route path='/step4' element={<Step4 total={total} addPlan={addPlan} addAddon={addAddon} isYearly={isYearly} toggleBilling={toggleBilling} />} />
            <Route path='/step5' element={<Step5 />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
