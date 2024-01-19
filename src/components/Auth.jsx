import React from 'react'
import {FcGoogle} from "react-icons/fc"

export default function Auth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 px-7 py-3 uppercase text-sm font-medium hover:bg-red-500 active:bg-red-900 ">
    <FcGoogle className='text-2xl bg-white rounded-full mr-2' />Continue with Google
    </button>
  )
}
