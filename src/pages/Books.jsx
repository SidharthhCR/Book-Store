import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { getAllBooks } from "../services/allApi";
import { toast } from "react-toastify";






const Books = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bookData, setBookData] = useState([])

  const [allCategory, setAllCategory] = useState([])

  const [duplicateBook, setDuplicateBook] = useState([])

  const [searchKey,setSearchKey]=useState('')

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setIsLoggedIn(true);
      getBookData();
    }
  }, [searchKey])

  const getBookData = async () => {
    try {
      let token = localStorage.getItem('token');
      let header = {
        Authorization: `Bearer ${token}`,
      };

      let apiResponse = await getAllBooks(header,searchKey)
      if (apiResponse.status == 200) {
        setBookData(apiResponse.data.allBook)
        let category = []
        apiResponse.data.allBook.forEach((eachBook) => {
          category.push(eachBook.category)
        })

        setAllCategory(category)
        setBookData(apiResponse.data.allBook)
        setDuplicateBook(apiResponse.data.allBook)
      } else {
        toast.error(apiResponse.response.data.message)
      }

    } catch (error) {
      console.log(error)

    }
  }
  

  const filterByCategory = async (category) => {
    let filteredBooks = bookData.filter(
      (eachBook) => eachBook.category == category
    );
    setBookData(filteredBooks);
    setDuplicateBook(filteredBooks);
  }
  return (
    <>
      <Header />

      {

        isLoggedIn ? <>
          <h1 className="text-center text-4xl">Collections</h1>

          <div className="flex justify-center p-6">

            <input
            onChange={(e)=>setSearchKey(e.target.value)}
              type="text"
              placeholder="Search By Title"
              className="border p-2 w-100"
            />
            <button className="text-amber-50 bg-blue-900 p-2 border-gray-950 border-2">
              search
            </button>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-5">
            <div className="col-span-1 ms-10">
              <h1 className="text-3xl mb-5">Filters </h1>

              <div className="flex flex-col gap-2">
                <label
                  className="">
                  <input
                  id='all'
                    className="me-3" type="radio" />
                  <label htmlFor='all'>All</label>
                </label>
                {
                  allCategory.map((eachCategory, index) => (
                    <label
                      key={index}
                      className="">
                      <input
                        id={index}
                        onClick={() => filterByCategory(category)}
                        className="me-3" type="radio" />

                     <label htmlFor={index}>
                       {eachCategory}
                     </label>

                    </label>
                  ))
                }
              </div>
            </div>
            {
              bookData?.length > 0 ? <div className="col-span-5 grid grid-cols-3 gap-5">
                {
                  bookData?.map((eachBook, index) => (
                    <div className="w-full" key={index}>
                      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                        <img
                          className="w-full"
                          src={eachBook.imageUrl}
                          alt="Book Cover"
                        />
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">
                            {eachBook.tittle}
                          </div>
                          <p className="text-gray-700 text-base">{eachBook.author}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {eachBook.price}
                          </span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {eachBook.publisher}
                          </span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #winter
                          </span>
                        </div>
                        <Link to={`/view/${eachBook._id}/book`} className="bg-blue-500 text-white font-extrabold p-1 rounded">View More</Link>
                      </div>
                    </div>
                  ))
                }
              </div> : <h1>No Books Available</h1>
            }
          </div>
        </> : <div className="flex items-center justify-center">
          <img className="w-50" src="https://media.tenor.com/6bLqzMcCDzEAAAAM/marmalady-loading-cat.gif" alt="" />
          <h1 className="text-4xl"> Please <Link className="text-red-600 font-bold" to="/login"> Login</Link> to accesc all book</h1>
        </div>

      }
      <Footer />
    </>
  );
};

export default Books;