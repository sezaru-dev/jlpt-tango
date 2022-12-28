import React from 'react'
import Link from 'next/link'
import VocabularyCard from './VocabularyCard'

const VocabularySample = ({NLevelVocabs, level}) => {
  return (
    <div>
      <h3 className='text-2xl mb-4 text-gray-300'>{`N${level} Vocabularies`}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {NLevelVocabs?.map((item, index) => (
          <VocabularyCard key={index} item={item}/>
        ))}
      </div>
      <div className='mt-0 w-full  md:w-auto flex lg:justify-end'>
      <Link href={`/n${level}`} className='px-7 py-2 w-full lg:w-auto text-center bg-rose-500 border border-rose-500 text-white rounded-sm shadow-md hover:bg-transparent hover:text-rose-500 mt-4'>View All</Link>
      </div>
    </div>
  )
}

export default VocabularySample