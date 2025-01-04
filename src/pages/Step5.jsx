import React from 'react'
import thank from '../assets/images/icon-thank-you.svg'
export default function Popup() {
    return (
            <div className='main'>
                <div className='flex flex-col max-w-96 text-center bg-white rounded-lg p-6'>
                    <img src={thank} alt="" className='w-28 mx-auto'/>
                    <h1 className="h1">Thank you!</h1>
                    <p className="sub">
                        Thanks for confirming your subscription! We hope you have fun
                        using our platform. If you ever need support, please feel free
                        to email us at support@loremgaming.com.
                    </p>
                </div>
            </div>
    )
}