import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons/faSearchengin'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Header />
      
  <div  className='home-section flex  items-center  text-center justify-center'>
    <div className=' text-gray-100 text-bold  text-center '>
       <h1 className=' text-7xl'>Wonderful Gifts</h1>
 <h1>Give your family and friends a book</h1>

 <div className='flex '>
   <input className='w-100 my-5 p-3 rounded-2xl bg-gray-100 text-black' type="text" placeholder='search Your Book'  />
    <FontAwesomeIcon icon={faSearchengin} className='my-10 mx-[-30px] text-blue-500'  />
 </div>

    </div>


  </div>

  <div className="section-2">
    <div className='text-center my-10'>
      <h1 className='text-4xl'>NEW ARRIVALS</h1>
      <h1 className='text-2xl'>EXPLORE OUR LATEST COLLLECTIONS</h1>
    </div>

<div className='flex justify-evenly'>
   <div className='card  h-[450px] w-[220px] border-0 border-gray-100 rounded-2xl  shadow-2xl shadow-gray-500 '>
      <img className='h-[250px] w-100 p-2' src="https://harpercollins.co.in/book-cover/PowerPoint_jpg/9789369897292.jpg" alt="" />
      <h1 className='text-center pt-7'>fsgghdh</h1>
      <h1 className='text-center pt-7'>fsgghdh</h1>
      <h1 className='text-center pt-7'>$222</h1>
    </div>
    
  
</div>
<div className='flex justify-center my-10'>
   <button className='border-0 p-2  bg-blue-900 text-white hover:bg-white hover:text-blue-900 '>Explore More</button>

</div>

  </div>
  {/* section-3 */}
  <div className="section-3 grid">
    <div class="grid grid-cols-2 ">
  <div class=" mx-20">
  <h1 className='text-2xl text-center'>FEATURED  AUTHORS</h1>
  <h1 className='text-xl text-center'>Captivates with every word</h1>
  <p className='my-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error. <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nulla similique dolor, repellendus suscipit aut, velit nesciunt odit cum voluptas maxime ab autem voluptatum, eligendi quas dolorum. Suscipit, sit iusto!</p>
  </div>
  <div className="mx-10">
    <img className='h-[400px] ' src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcScd4KbQbrRlYFXgzyOeNl_n_4T0zeGHyGBpglz_l2pnjHkhqWce3wTqwvPWWwi9aDR12Gye8Pco68ehhs" alt="" />
  </div>
 
</div>

<div className='text-center mt-[150px] '>
  <h1>TESTIMONIALS</h1>
  <h2>See What Others Are Saying</h2>
  <div className='flex justify-center'>
    <img className='items-center h-[200px] w-[200px] rounded-full' src="https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-during-the-uefa-nations-news-photo-1748359673.pjpeg?crop=0.610xw:0.917xh;0.317xw,0.0829xh&resize=640:*" alt="" />
  </div>
  
  <h3>Treesa Joseph</h3>
  <p className='mx-40'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore perspiciatis porro eveniet. Optio necessitatibus provident autem, quam qui, dicta molestiae quis quia deleniti aliquam magnam temporibus mollitia ex repellendus! Dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deserunt optio eum dolorum iure consectetur quia facilis porro modi placeat ea quis explicabo maxime voluptatum unde animi nemo aperiam quos!</p>
</div>
  </div>
<Footer />

    </>
  )
}

export default Home