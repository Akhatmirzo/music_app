import React from 'react'
import SearchInput from '../Inputs/SearchInput'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function HomeNav() {
  return (
    <div className='relative z-100 w-full flex justify-end pt-[50px] px-[100px] xl:px-[50px] lg:px-[25px] lg:pt-[25px] md:px-[10px]' >
      <div className='flex w-[100%] items-center'>
          <div className='flex grow justify-around ml-[150px] lg:ml-0 lg:justify-start'>
            <SearchInput label={"Find musics"} />
          </div>
    
          <PrimaryButton text={"Log in"} />
      </div>
    </div>
  )
}
