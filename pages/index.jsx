import Head from 'next/head';
import Link from 'next/link';
import VocabularySample from '../components/VocabularySample';

export default function Home({randomVocabulary, n5Sample, n4Sample, n3Sample, n2Sample, n1Sample}) {
  console.log(n5Sample);

	return (
		<>
			<Head>
				<title>JLPT Tango単語</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className='h-full pb-12'>

        <section className='h-[38rem] mt-16'>
          <div className='h-full max-w-[1440px] px-5 md:px-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-16'>
            
            <div className='w-full lg:w-3/5 flex flex-col items-center lg:items-start justify-center'>
              <h1 className='text-4xl lg:text-6xl text-gray-100'>JLPT Tango<span className='text-rose-500 font-notoSansJP font-medium'>単語</span></h1>
              <p className='text-base lg:text-xl mt-4 text-gray-300 max-w-xl'>Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level</p>
              <div className='mt-8 flex w-full max-w-screen-sm'>
                <Link href={`/n5`} className='px-7 py-2 w-full lg:w-auto bg-rose-500 border border-rose-500 text-white text-center lg:text-lg rounded-sm shadow-md hover:bg-transparent hover:text-rose-500'>N5 Vocabularies</Link>
              </div>
            </div>

            <div className='w-full lg:w-2/5 flex flex-col items-center justify-center p-4'>
              <h3 className='font-notoSansJP text-6xl lg:text-7xl font-semibold text-rose-500 mb-4'>{randomVocabulary?.word}</h3>
              <p className='font-light text-gray-500 text-sm lg:text-lg'>Meaning: <span className='text-base lg:text-lg text-gray-200 font-medium'>{randomVocabulary?.meaning}</span></p>
              <p className='font-light text-gray-500 text-sm lg:text-lg'>Furigana: <span className='font-notoSansJP text-base lg:text-lg text-gray-200 font-bold'>{randomVocabulary?.furigana}</span></p>
              <p className='font-light text-gray-500 text-sm lg:text-lg'>Romaji: <span className='text-base lg:text-lg text-gray-200 font-medium'>{randomVocabulary?.romaji}</span></p>
              <p className='font-light text-gray-500 text-sm lg:text-lg'>Level: <span className='text-base lg:text-lg text-gray-200 font-medium'>{randomVocabulary?.level}</span></p>
            </div>

          </div>
        </section>

        <div className='max-w-[1440px] px-5 md:px-10 mx-auto flex flex-col gap-16 mt-32'>

          <VocabularySample NLevelVocabs={n5Sample} level={5}/>
          <VocabularySample NLevelVocabs={n4Sample} level={4}/>
          <VocabularySample NLevelVocabs={n3Sample} level={3}/>
          <VocabularySample NLevelVocabs={n2Sample} level={2}/>
          <VocabularySample NLevelVocabs={n1Sample} level={1}/>

        </div>

      </main>
		</>
	);
}


export const getServerSideProps = async() => {
  const res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words/random`)
  const data = await res.json()

  const n5res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words?level=5&offset=20&limit=5`)
  const n5data = await n5res.json()

  const n4res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words?level=4&offset=20&limit=5`)
  const n4data = await n4res.json()

  const n3res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words?level=3&offset=20&limit=5`)
  const n3data = await n3res.json()

  const n2res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words?level=2&offset=20&limit=5`)
  const n2data = await n2res.json()

  const n1res = await fetch(`https://jlpt-vocab-api.vercel.app/api/words?level=1&offset=20&limit=5`)
  const n1data = await n1res.json()

  return { props: { 
    randomVocabulary: data,
    n5Sample: n5data.words,
    n4Sample: n4data.words,
    n3Sample: n3data.words,
    n2Sample: n2data.words,
    n1Sample: n1data.words,
   } }
}

