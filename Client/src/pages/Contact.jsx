import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Contact() {
    const [animateButton, setAnimateButton] = useState(false);
    const controls = useAnimation();
  
    const handleAnimationEnd = () => {
      setAnimateButton(true);
      controls.start({ scale: 1.2, transition: { duration: 0.3, yoyo: Infinity } });
    };
  return (
    <>
  <div
      name='Contact'
      className='w-full h-screen flex justify-center items-center pt-30 sm:pt-0 p-35  '
      style={{
        backgroundImage: 'linear-gradient(135deg, #62dade, #116467)',
        backgroundRepeat: 'no-repeat',
        }}
        >
        {/* White box container */}
        <div className="bg-white shadow-lg rounded-md p-6 max-w-[600px] w-full">
        <form method='POST' action="https://getform.io/f/07c4747d-9e0c-4efa-8cf7-dfc955885eaa" className='flex flex-col'>
        <div className='pb-900'>
        <motion.p
        className='text-4xl font-bold inline border-b-4 border-[#116467] text-gray-700 shadow-xl'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        Contact
        </motion.p>
        <motion.p
        className='text-gray-00 py-4'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        >
        Submit the form below or shoot me an email - info@gmail.com
        </motion.p>
        </div>
        <motion.input
        className='bg-[#bfcdc85a] p-2 border border-[#11646737] '
        type="text"
        placeholder='Name'
        name='name'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.input
        className='my-4 p-2 bg-[#bfcdc85a] border border-[#11646737] '
        type="email"
        placeholder='Email'
        name='email'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        />
        <motion.textarea
        className='bg-[#bfcdc85a] border border-[#11646737] p-2'
        name="message"
        rows="10"
        placeholder='Message'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onAnimationComplete={handleAnimationEnd}
        ></motion.textarea>
        {animateButton ? (
        <motion.button
        className='bg-[#038697] text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-4 py-3 my-8 mx-auto flex items-center'
        animate={controls}
        >
        Contact Me
        </motion.button>
        ) : (
          <button className='bg-[#038697] text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
        )}
        </form>
        </div>
        </div>

    
    
    
    </>
  )
}

export default Contact