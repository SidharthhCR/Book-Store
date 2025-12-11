import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import e from "cors";



const Profile = () => {

    const [sellBookFlag, setSellBookFlag] = useState(true)
    const [bookStatusFlag, setBookStatusFlag] = useState(false)
    const [purchaseHistoryFlag, setPurchaseHistoryFlag] = useState(false)
    
    const [preview,setPreview]=useState("https://cdn-icons-png.freepik.com/512/8136/8136031.png")

    const onImageClick=(e)=>{
        console.log(e.target.files[0])

        let imgURl=URL.createObjectURL(e.target.files[0])
        console.log(imgURl)
        setPreview(imgURl)
    }
    return (
        <div>
            <Header />
            <div className="relative">
                <div className="h-40 bg-indigo-950"></div>
                <div className="absolute left-20 top-15 border-white border-15 rounded-full w-50 h-50">
                    <img className="rounded-full" src="https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_1280.png" alt="" />
                </div>
                <div className="p-20">
                    <div className="pt-20 pb-10 flex justify-between">
                        <h1 className="text-3xl flex">Jam <FaCheckCircle className="m-1 text-xl my-3 text-blue-500" /></h1>
                        <button className="text-blue-500 border rounded-xl border-blue-500 p-3 flex text-lg"> <FaEdit className="m-1" /> Edit</button>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis nesciunt nostrum temporibus vero ex repudiandae officiis
                        inventore a. Itaque expedita placeat delectus esse quisquam
                        repellendus ut et illo nisi consequuntur?Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Odit sapiente repellat sunt odio
                        accusamus maiores veniam necessitatibus, eaque tenetur omnis. Cum,
                        praesentium recusandae? Officiis odit, laboriosam eligendi placeat
                        ad enim.
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => {
                        setSellBookFlag(true)
                        setBookStatusFlag(false)
                        setPurchaseHistoryFlag(false)
                    }}
                    className="border p-2 m-1 rounded-2xl cursor-pointer">Sell Book</button>
                <button
                    onClick={() => {
                        setSellBookFlag(false)
                        setBookStatusFlag(true)
                        setPurchaseHistoryFlag(false)
                    }}
                    className="border p-2 m-1 rounded-2xl cursor-pointer">Book Status</button>
                <button
                    onClick={() => {
                        setSellBookFlag(false)
                        setBookStatusFlag(false)
                        setPurchaseHistoryFlag(true)
                    }}
                    className="border p-2 m-1 rounded-2xl cursor-pointer">Purchase History</button>
            </div>
            {
                sellBookFlag && <div className="mx-45 bg-gray-400 px-10 mt-10">
                    <h1 className="text-4xl text-center py-10">Book Details</h1>
                    <div className="flex justify-around gap-2" >
                        <div className="flex flex-col gap-4 ">
                            <input 
                            placeholder="Title" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                              <input 
                            placeholder="Author" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                              <input 
                            placeholder="Number of pages" 
                            type="number" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                               <input 
                            placeholder="Image URL" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                               <input 
                            placeholder="Price" 
                            type="number" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                               <input 
                            placeholder="Discpount Price" 
                            type="number" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                            <textarea placeholder="Abstract" name="" id=""
                            className="bg-white text-black rounded-xl p-5"
                            ></textarea>

                             
                        </div>
                        <div  className="flex flex-col gap-4">
                             <input 
                            placeholder="Publisher" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                              <input 
                            placeholder="Language" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                              <input 
                            placeholder="ISBN" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                              <input 
                            placeholder="Category" 
                            type="text" 
                            className="w-100 p-2 rounded-xl
                             text-black bg-white" />

                             <label htmlFor="imgupload">
                                <input 
                                onChange={(e)=>onImageClick(e)}
                                className="hidden"
                                type="file" id="imgupload" />
                             <img
                             className="w-75"
                             src={preview} alt="" />
                             </label>
                        </div>
                    </div>

                </div>
            }
            {
                bookStatusFlag && <div>Book Status</div>
            }
            {
                purchaseHistoryFlag && <div>Purchase History</div>
            }
            <Footer />
        </div>
    );
};

export default Profile;