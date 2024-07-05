import React from 'react'

export default function PrimaryButton({text, btnFn = () => ""}) {
  return (
    <button onClick={btnFn} className='z-[100] bg-gradient-to-t from-[#00FFA3] to-[#00A3FF] font-mono font-normal text-[20px] py-[12px] px-[32px] rounded-lg whitespace-nowrap' >
      {text}
    </button>
  )
}
