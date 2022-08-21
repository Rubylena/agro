import React from 'react'
import FocusLayer from '../../assets/images/focus-layer.jpg'
import chicks from '../../assets/images/chicks.jpg'
import eggs from '../../assets/images/eggs.jpg'
import layer from '../../assets/images/layer.jpg'
import native from '../../assets/images/native-chick.jpg'
import './home.css'

const Home = () => {
  return (
    <div>
    <header>
        <section className='hero flex flex-col justify-center items-start font-bold'>
            <div className='hero-content'>
            <h2 className='text-xl'>Soloku Farms</h2>
            <p>Where your expectations are met.</p>
            <p>Fresh products all day long.</p>
            </div>
        </section>
    </header>
    <main className='mx-10 md:mx-32 lg:mx-52'>
        <section className='my-10'>
            <h2 className='text-2xl font-semibold'>Services</h2>
            <p className='m-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum, id vel provident reiciendis a tenetur tempore officia itaque libero, hic qui cum suscipit quo inventore expedita quisquam consectetur exercitationem assumenda facere sapiente repudiandae ipsam quidem. Labore iste amet consequatur ad, dolorem quaerat aperiam blanditiis magnam quos quibusdam, porro, necessitatibus a ullam unde laborum vero facere officiis dolores ab facilis autem? Necessitatibus magni error ratione hic culpa ex sint exercitationem doloremque facilis delectus neque ad maiores blanditiis, dignissimos porro excepturi harum quibusdam deserunt pariatur molestias repellendus. Veniam, repudiandae reprehenderit dolorem, vitae officia obcaecati modi cum eos fugiat ipsa voluptatem necessitatibus?</p>
        </section>
        <section>
            <h2 className='text-2xl font-semibold'>Gallery</h2>
            <div className='flex gap-5 flex-wrap md:grid md:grid-rows-2 md:grid-flow-col md:gap-2 mx-5 md:mx-0 lg:mx-20 md:my-10'>
                <div className='h-full'><img className='w-full h-full' src={chicks} alt='About background'></img></div>
                <div className='h-full'><img className='w-full h-full' src={native} alt='native chick'></img></div>
                <div className='h-full md:col-span-2'><img className='w-full h-full' src={native} alt='native chick'></img></div>
                <div className='h-full'><img className='w-full h-full' src={eggs} alt='About background'></img> </div>
                <div className='h-full md:col-span-2'><img className='w-full h-full' src={layer} alt='native chick'></img></div>
                <div className='h-full'><img className='w-full h-full' src={FocusLayer} alt='native chick'></img></div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Home