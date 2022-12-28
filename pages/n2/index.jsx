import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import VocabularyCard from '../../components/VocabularyCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const N2Vocabularies = ({data}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <main className='max-w-[1440px] px-5 lg:px-10 mx-auto py-12 mt-16'>
      <h1 className='text-center w-full text-3xl md:text-4xl text-gray-200 font-semibold'>N2 Level Vocabularies</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12'>
      {currentItems?.map((item, index) => (
          <VocabularyCard key={index} item={item}/>
        ))}
      </div>
      <div className='flex items-center justify-center mt-6'>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<HiChevronRight size={21}/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={<HiChevronLeft size={21}/>}
          renderOnZeroPageCount={null}
          containerClassName={`pagination-container`}
          pageLinkClassName='pageItem'
          breakClassName='pageItem'
          previousLinkClassName='prev'
          nextLinkClassName='nxtBtn'
          activeLinkClassName='active'
        />
      </div>
    </main>
  );
  
}

export default N2Vocabularies

export const getStaticProps = async() => {

  const res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words/all?level=2`)
  const data = await res.json()

  return { props: { data: data } }
}