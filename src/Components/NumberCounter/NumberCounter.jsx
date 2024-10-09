import React from 'react'
import Countup from 'react-countup'
const NumberCounter = () => {
  return (
    <div>
        <div className='bg-yellow-100 text-black py-12'>
            <div className='conatiner grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                <p className='text-3xl font-semibold'>
                    <Countup
                    start={0}
                    end={45}
                    separator=','
                    suffix='+'
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                    />
                </p> 
                <p className='text-xl'>Varieties</p>
                </div>
               <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                <Countup 
                start={0}
                end={14}
                enableScrollSpy={true}
                scrollSpyOnce={true}/>
                </p>
                <p>Outlets</p>
               </div>
               <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                 <Countup
                 start={0}
                 end={120}
                 enableScrollSpy={true}
                 scrollSpyOnce={true}
                />
                </p>
                <p className='text-xl'>Staff</p>

               </div>
               <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-semibold'>
                <Countup
                start={0}
                end={800}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                />
                </p>
                <p className='text-xl'>Reviews</p>
               </div>

            </div>

        </div>
    </div>
  )
}

export default NumberCounter