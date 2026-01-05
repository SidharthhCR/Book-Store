import React, { useEffect, useState } from "react";


import { addBook, getUserDetails } from "../services/allApi";

import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { toast } from "react-toastify";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const [sellBookFlag, setSellBookFlaf] = useState(true);
  const [bookstatusFlag, setbookStausFlag] = useState(false);
  const [purchaseHistoryFlag, setPurchaseHistoryFlag] = useState(false);
  const [preview, setPreview] = useState("https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg"
  );

  const [previewArray, setPreviewArray] = useState([])
  const [userDetails, setUserDetails] = useState({})
  const [bookData, setBookData] = useState({
    tittle: "",
    author: "",
    noOfPages: 0,
    imageURL: "",
    price: 0,
    discountPrice: 0,
    abstract: "",
    publisher: "",
    language: "",
    ISBN: "",
    category: "",
    uploadedImages: []
  })

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      let token = localStorage.getItem("token")
      let header = {
        Authorization: `Bearer ${token}`,
      }
      let apiResponse = await getUserDetails(header)

      if (apiResponse.status == 200) {
        setUserDetails(apiResponse.data)
      } else {
        toast.error(apiResponse.response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong while fetching user details")
    }
  }

  const onImgClick = (e) => {
    console.log(e.target.files[0]);
    setBookData({ ...bookData, uploadedImages: [...bookData.uploadedImages, e.target.files[0]] })
    let imgUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imgUrl);
    setPreview(imgUrl);
    setPreviewArray([...previewArray, imgUrl])
  };

  const onAddClick = async () => {
    try {
      let token = localStorage.getItem('token')

      let headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }

      //FormData is used to encode the file uploading,if the request has file uploading we must 

      let reqBody = new FormData()

      for (let keys in bookData) {
        if (keys != 'uploadedImages') {
          reqBody.append(keys, bookData[keys])
        } else {
          bookData.uploadedImages.forEach((eachFiles) => {
            reqBody.append('uploadedImages', eachFiles)
          })
        }
      }

      let apiResponse = await addBook(reqBody, headers)
      console.log(apiResponse)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="h-40 bg-[#101828]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png"
            alt="img"
            className="rounded-full w-40 h-40 relative top-20 left-20"
          />
        </div>
        <div className="mt-30 ms-30 me-20">
          <div className="flex justify-between">
            <h1 className="text-3xl">Username</h1>
            <div>
              <EditProfile userDetails={userDetails} />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolor esse incidunt quod consectetur deleniti commodi pariatur
            cupiditate voluptatibus, voluptates in nulla ut fuga architecto,
            quasi aperiam perferendis, eveniet quibusdam.
          </p>
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button
            className="border p-2 m-1 rounded-2xl cursor-pointer"
            onClick={() => {
              setSellBookFlaf(true);
              setPurchaseHistoryFlag(false);
              setbookStausFlag(false);
            }}
          >
            Sell Book
          </button>
          <button
            className="border p-2 m-1 rounded-2xl cursor-pointer"
            onClick={() => {
              setSellBookFlaf(false);
              setPurchaseHistoryFlag(true);
              setbookStausFlag(false);
            }}
          >
            Book Status
          </button>
          <button
            className="border p-2 m-1 rounded-2xl cursor-pointer"
            onClick={() => {
              setSellBookFlaf(false);
              setPurchaseHistoryFlag(false);
              setbookStausFlag(true);
            }}
          >
            Purchase History
          </button>
        </div>
        <div className="flex justify-center">
          {sellBookFlag && (
            <div className="flex justify-center mt-5 mb-10 w-280 flex-col items-center rounded-2xl bg-gray-400">
              <h1 className="text-3xl mt-3">Book Details</h1>
              <div className="flex justify-center gap-10 mt-5 mb-5">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    placeholder="tittle"
                    onChange={(e) => setBookData({ ...bookData, tittle: e.target.value })}
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    placeholder="Author"
                    onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, noOfPages: e.target.value })}
                    placeholder="No of Pages"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, imageURL: e.target.value })}
                    placeholder="Image Url"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
                    placeholder="Price"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, discountPrice: e.target.value })}
                    placeholder="Discount Price"
                  />
                  <textarea
                    type="text"
                    className="w-100 text-black bg-white rounded-xl "
                    onChange={(e) => setBookData({ ...bookData, abstract: e.target.value })}
                    placeholder="Abstract"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, publisher: e.target.value })}
                    placeholder="Publisher"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, language: e.target.value })}
                    placeholder="Language"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, ISBN: e.target.value })}
                    placeholder="ISBN"
                  />
                  <input
                    type="text"
                    className="w-100 text-black bg-white rounded-xl p-2"
                    onChange={(e) => setBookData({ ...bookData, category: e.target.value })}
                    placeholder="Category"
                  />
                  <label htmlFor="imgUpl">
                    <input
                      type="file"
                      onChange={(e) => onImgClick(e)}
                      id="imgUpl"
                      className="hidden"
                    />
                    <img src={preview} className="w-50 rounded-3xl" alt="" />
                  </label>
                  {
                    previewArray.length > 0 && <div className="flex gap-4">
                      {
                        previewArray.map((each) => (
                          <img className="w-10" src={each} alt="" />
                        ))
                      }
                      {
                        previewArray.length < 3 && <label htmlFor="addImg" >
                          <input type="file" className="hidden" id="addImg" onChange={(e) => onImgClick(e)} />
                          <img src="https://img.freepik.com/premium-vector/illustration-upload_498740-5719.jpg" className="w-10" alt="" />
                        </label>

                      }
                      <button className="bg-amber-300 border rounded-xl border-black-500 p-3 flex text-lg" onClick={onAddClick}>Submit</button>
                    </div>

                  }

                </div>
              </div>
            </div>
          )}
          {
            purchaseHistoryFlag && <div>Purchase History</div>
          }
          {
            bookstatusFlag && <div>Book status</div>
          }

         
        </div>
      </div>
    </>
  );
};

export default Profile;