import React from 'react'
import chicks from '../../assets/images/chicks.jpg'
import eggs from '../../assets/images/eggs.jpg'
import native from '../../assets/images/native-chick.jpg'

const About = () => {
  return (
    <div>
      <section>
        <article>
          <div className='flex flex-col m-40'>
          <h2 className='text-2xl font-semibold'>WHO WE ARE</h2>
          <p className='text-justify leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quas excepturi at illum unde rerum consequatur dolorem quibusdam maiores illo maxime nulla hic sed provident deserunt, ratione quod repudiandae numquam. Ipsum totam dolorem alias laudantium veritatis consectetur iste placeat velit quidem a nisi cumque aut obcaecati, nulla dolor rem tempore perspiciatis ducimus cupiditate. Nesciunt, explicabo? Accusamus eos quis nostrum laudantium delectus. Animi sit inventore fugit ea ipsa. Quibusdam a soluta voluptate quia esse impedit dignissimos aut neque fugiat! Cum, veritatis recusandae assumenda fugit inventore in sapiente ducimus asperiores eius unde quod repellat porro ullam dolorum ad nostrum consectetur repudiandae modi.</p>
          </div>
        </article>
        <div className='mx-32 px-20 md:flex hidden'>
          <div className='md:p-5 w-full' > <img className='w-full md:h-3/4' src={chicks} alt='chick'></img></div>
          <div className='md:p-5 w-full'> <img className='w-full md:h-3/4' src={eggs} alt='eggs'></img> </div>
          <div className='md:p-5 w-full'> <img className='w-full md:h-3/4' src={native} alt='native chick'></img></div>
        </div>
      </section>
    </div>
  )
}

export default About