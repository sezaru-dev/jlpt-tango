import React from 'react'

const VocabularyCard = ({item}) => {
  return (
    <div className='p-3 lg:p-4 bg-gray-800/80 rounded-sm'>
      <div className='mb-2'>
        <h3 className='text-xl md:text-2xl font-notoSansJP font-semibold text-rose-500'>{item.word}</h3>
      </div>
      <p className='text-gray-500 text-sm lg:text-base'>Meaning: <span className='text-gray-300 font-medium'>{item.meaning}</span></p>
      <p className='text-gray-500 text-sm lg:text-base'>Furigana: <span className='font-notoSansJP text-gray-300 font-semibold'>{item.furigana}</span></p>
      <p className='text-gray-500 text-sm lg:text-base'>Romaji: <span className='text-gray-300 font-medium'>{item.romaji}</span></p>
    </div>
  )
}

export default VocabularyCard