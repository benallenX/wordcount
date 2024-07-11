import React from 'react'

const WordCountDisplay = ({count}) => {
  return (
      <p className='text-xl font-bold mt-4'>
          Word Count: {count}
    </p>
  )
}

export default WordCountDisplay