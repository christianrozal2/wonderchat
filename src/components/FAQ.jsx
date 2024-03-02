import React from 'react'
import { questions } from '../constants/constants'
import { plus } from '../assets/assets'

const FAQ = () => {
  return (
    <section className='container px-0'>
        <h1 className='h-gradient font-bold text-xl lg:text-5xl text-center'>FAQ's</h1>

        <table className='mt-6 sm:mt-10 md:mt-16 lg:mt-24 w-full'>
          {questions.map((question) => (
            <tr key={question.number} className='text-sm lg:text-2xl h-gradient border-2 border-outline1'>
              <td className='p-2 sm:p-3 md:p-4 lg:p-6 border-2 border-outline1 text-center'>{question.number}</td>
              <td className='p-2 sm:p-3 md:p-4 lg:p-6'>{question.title}</td>
              <td className='p-2 sm:p-3 md:p-4 lg:p-6 border-2 border-outline1 text-center'>+</td>
            </tr>
          ))}
        </table>
    </section>
  )
}

export default FAQ