import React from 'react'

export default function MenuItem({drink}) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-3 items-center'>
        <div className="w-full mr-1" key={drink.name}>
            <h3 className='font-alt text-secondary text-xl capitalize mb-2 '>{drink.name}</h3>
           
        </div>
        <div className='w-[80%] h-[1px] justify-self-end bg-light-gray'/>
        <p className='text-white text-lg justify-self-end'>
            $ {drink.price}
        </p>
        {drink?.origin ? (
                <p className='text-light-gray text-sm'>{drink?.origin} | {drink.type}</p>
            )
            :
            (
                <div class="col-span-3 flex gap-x-1">
                    {drink.type.map(item => (
                        <p key={item} className='text-light-gray text-sm '>       
                            {item}<span className='last:none'>|</span>  
                        </p>
                    ))}
                </div>
            )
            }
    </div>
  )
}
