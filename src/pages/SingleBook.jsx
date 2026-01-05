import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSingleBook } from '../services/allApi';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { baseURL } from '../services/baseURL';





const SingleBook = () => {
const[bookData,setBookData]=useState({})
 const [openModal, setOpenModal] = useState(false);

 useEffect(() => {
    getData();
  }, []);
    let {id}=useParams();
    console.log(id)


    const getData = async()=>{
      try {
        let token = localStorage.getItem("token")
        let header = {
          Authorization:`Bearer ${token}`,
        }

        let apiResponse=await getSingleBook(id,header);
        if(apiResponse.status==200){
          console.log(apiResponse.data.singleBookData)
          setBookData(apiResponse.data.singleBookData)
        }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <Header/>
    {
      bookData&& <div className='border-3 h-[450px] mx-[100px] my-6 rounded-2xl '>


       
         <div className='text-center grid grid-cols-2 ms-50'>
          <div className='flex justify-around '>
            <div>
            <h1 className='text-center m-5 mt-15 text-5xl text-blue-500 font-extrabold'>{bookData.tittle}</h1>
            <h2 className='text-center mt-2 text-2xl font-sans'>Author :{bookData.author}</h2>
           
               <h2 className='mt-2 font-bold'>Price :{bookData.price}</h2>
             <h2 className='mt-2 font-bold'>Discount Price :{bookData.discountPrice}</h2>
            
           
               <h2 className='mt-2 font-bold'>Number of pages :{bookData.noOfPages}</h2>
             <h2 className='mt-2 font-bold'>ISBN :{bookData.ISBN}</h2>
            
           
               <h2 className='mt-2 font-bold'>Language :{bookData.language}</h2>
             <h2 className='mt-2 font-bold'>Category :{bookData.category}</h2>
            
          </div>

            <div className='grid grid-cols-1 mt-10'>
                <img className='h-[300px] mx-[300px]  rounded-2xl p-2 mt-5' src={bookData.imageURL} alt="" />
            </div>
            </div>
            <div>
              <button  onClick={() => setOpenModal(true)} className='bg-green-500 text-white rounded-lg px-4 py-2 mt-4'>More Images</button>
            </div>
        
          </div>
          <div className='flex justify-center'>
            <Link className='bg-blue-500 text-white rounded-lg px-4 py-2' to="/books">Go Back</Link>
             <button className='bg-green-500 text-white rounded-lg px-4 py-1 ml-4' type="button">Buy Now</button>
          </div>
          
       
       
            
        

        </div>
      
    }
<Modal className='mx-60' show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader className='bg-gray-600 text-3xl' >Uploaded Images</ModalHeader>
        <ModalBody className='bg-gray-600  '>
          <div className="space-y-6 flex justify-around">
           {
            bookData?.uploadedImages?.map((eachImage)=>(
              <img src={`${baseURL}/uploads/${eachImage}`} alt="" />
            ))
           }
          </div>
        </ModalBody>
        <ModalFooter className='bg-gray-500'>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    



    
    <Footer/>
    </>

    
  )
}

export default SingleBook