import React, { useState, useEffect } from 'react'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    number: z.string().regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number" })
})
const nextVariants = {
    hidden:{
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {type: 'spring', stiffness: 100}
    }  
}

export default function Step1() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [errors, setErrors] = useState({ name: '', email: '', number: '' })
    const validateForm = () => {
        const result = schema.safeParse({ name, email, number })
        if (result.success) {
            setErrors({ name: '', email: '', number: '' })
        } else {
            const formattedErrors = result.error.format()
            setErrors({
                name: formattedErrors.name?._errors[0] ?? '',
                email: formattedErrors.email?._errors[0] ?? '',
                number: formattedErrors.number?._errors[0] ?? ''
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validateForm()
        const result = schema.safeParse({ name, email, number })
        if (result.success) {
            console.log(name, email, number)
            reset()
        } else {
            console.log("Validation errors:", errors)
        }
    }
    useEffect(() => { 
        validateForm() 
    }, [name, email, number])
    
    const reset = () => {
        setName('')
        setEmail('')
        setNumber('')
        setErrors({ name: '', email: '', number: '' })
    }
    return (
        <div className='main'>
            <h1 className="h1">Personal info</h1>
            <p className='sub'>Please provide your name, email address, and phone number.</p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label className='mb-6'>
                    <span className='mb-2'>Name</span>
                    {errors.name && <span className='float-right text-red-500 text-sm'>{errors.name}</span>}
                    <input type="text"
                        onChange={(e) => setName(e.target.value)} value={name} required
                        placeholder='e.g. Stephen King' className='input w-full py-1 px-3 block ' />
                </label>
                <label className='mb-6'>
                    <span className=' mb-2'>Email Address</span>
                    {errors.email && <span className='float-right text-red-500 text-sm'>{errors.email}</span>}
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)} value={email} required
                        placeholder='e.g. stephenking@lorem.com' className='input w-full py-1 px-3 block' />
                </label>
                <label className='mb-6'>
                    <span className=''>Phone Number</span>
                    {errors.number && <span className='float-right text-red-500 text-sm'>{errors.number}</span>}
                    <input type="number"
                        onChange={(e) => setNumber(e.target.value)} value={number} required
                        placeholder='e.g. +1 234 567 890' className='input w-full py-1 px-3 block ' />
                </label>
                {errors.name || errors.email || errors.number ? ( <div className='text-red-500'>Please fix the errors above before proceeding</div> ) : 
                ( <motion.button
                    variants={nextVariants}
                    initial="hidden"
                    animate="visible"
                    className='btn float-end'
                ><Link to={'/step2'}>Next Step</Link></motion.button> )}
            </form>
        </div>
    )
}
