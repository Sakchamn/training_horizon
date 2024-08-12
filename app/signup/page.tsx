import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex-col">
      <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow ring-1 ring-yellow-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Create password
            </label>
            <input
              type="password"
              id="password"
              className="shadow ring-1 ring-yellow-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="shadow ring-1 ring-yellow-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-50 hover:shadow-2xl text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Signup
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <Link href={'/login'} className="text-yellow-50"> Login</Link></p>
        </div>
        <div className="flex items-center justify-between mt-10">
          <span className="border-b border-black w-1/5 lg:w-1/3"></span>
          <p className="text-center text-sm text-gray-500">Or</p>
          <span className="border-b border-black w-1/5 lg:w-1/3"></span>
        </div>
        <div className="mt-4">
          <button
            className="bg-yellow-50 text-white w-full py-2 px-4 rounded-md hover:shadow-2xl flex items-center justify-center"
          >
            
            Login with Facebook
          </button>

          <button
            className="bg-white text-yellow-50 ring-1 ring-yellow-50 hover:shadow-2xl w-full py-2 px-4 mt-4 rounded-md flex items-center justify-center"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default page