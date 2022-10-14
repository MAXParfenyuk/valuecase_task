import React, {useEffect, useState} from "react";
import axios from "axios";

// This is the way you import image src s
import logo from './assets/valuecase_logo.png'
import placeholder from './assets/placeholder.png'

// You can use plain CSS ...
import './App.css'
import styled from "styled-components";

// styled components ...
const StyledButton = styled.button`
  border-radius: 4px;
  background: #FFA500;
  color: black;
  outline: none;
  border: 1px solid black;
  padding: 4px 8px;

  &:hover {
    background: #ffbb4f;
    cursor: pointer;
  }
`

// or anything else :)


function App() {
  const [apiPing, setApiPing] = useState("")
  const fileInput = React.createRef<HTMLInputElement>()

  const pingApi = (e?: any) => {
    if ( e ) e.preventDefault()

    // the call /api is proxied to the server > see vite.config.ts
    axios.get("/api").then(res => {
        setApiPing(res.data)
    }).catch(err => {
        setApiPing("Error = " + err.toString())
    })
  }

  const uploadImage = (e: any) => {
      const file = fileInput.current?.files?.[0]
      if ( file ) {
          const formData = new FormData();
          formData.append("file", file, file.name);
          axios.post("/api/images/upload", formData).then(res => {
              window.open(`/api/images/${res.data.id}`)
          }).catch(err => {
              alert("Error = "+err.toString())
          })
      }
  }

  useEffect(() => {
      pingApi()
  }, [])

  return (
    <div className="App">
      <div className="w-full h-screen bg-white-800 flex">
  <div className="relative inline-flex flex-col w-[400px] h-full p-4 bg-gray-100 ">
    <div className="">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Block title
              </th>
              <th scope="col" className="py-3 px-6">
                Index
              </th>
              <th scope="col" className="py-3 px-6"></th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Title 1
              </th>
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Title 2
              </th>
              <td className="py-4 px-6">2</td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Title 3
              </th>
              <td className="py-4 px-6">3</td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
              <td className="py-4 px-6">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col pb-3">
        <label
          htmlFor="website"
          className="block mt-6 text-sm font-medium text-gray-900 lg:text-xl mx-auto"
        >
          Add new block
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="mx-auto flex-shrink-0 inline-flex items-center py-2.5 px-4 
          text-sm text-center text-gray-900 bg-gray-100 border border-gray-300 
          rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-gray-300 w-44"
          type="button"
        >
          Choose block type
          <svg
            aria-hidden="true"
            className="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 
          0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Text
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Image
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="relative inline-flex flex-col p-4 h-screen overflow-y-scroll w-full">
    <div className="w-[800px] mx-auto">
      <div>
        <h1 className="text-sm lg:text-2xl font-medium mb-6 mt-[60px]">
          [Text block]
        </h1>
        <div className="mb-6 flex flex-col">
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">Title 1</h1>
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">
            Your subtitle
          </h1>
          <p className="block mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aut voluptas consequatur aperiam, exercitationem tempore obcaecati
            voluptatum consequuntur sapiente distinctio fugit, veniam eligendi
            enim blanditiis, minus labore iure dolorem harum?
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-sm lg:text-2xl font-medium mb-6 mt-[60px]">
          [Image block]
        </h1>
        <div className="mb-6 flex flex-col">
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">Title 2</h1>
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">
            Your subtitle
          </h1>

          <img src={placeholder} className="App-placeholder" alt="placeholder" />
        </div>
      </div>
      <div>
        <h1 className="text-sm lg:text-2xl font-medium mb-6 mt-[60px]">
          [Text block]
        </h1>
        <div className="mb-6 flex flex-col">
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">Title 3</h1>
          <h1 className="block mt-4 text-sm lg:text-xl font-medium">
            Your subtitle
          </h1>
          <p className="block mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aut voluptas consequatur aperiam, exercitationem tempore obcaecati
            voluptatum consequuntur sapiente distinctio fugit, veniam eligendi
            enim blanditiis, minus labore iure dolorem harum?
          </p>
        </div>
      </div>
      <form className="">
        <div className="flex flex-col border-4 px-10 pb-10 pt-2">
          <div className="lg:flex-col lg:justify-between lg:mt-6 items-baseline">
            <h1 className="text-sm lg:text-2xl font-medium mb-6">
              Add new text block
            </h1>
            <label
              htmlFor="title"
              className="block mt-4 text-sm lg:text-xl font-medium"
            >
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="Enter title"
              required=""
            />
          </div>
          <div className="lg:flex-col lg:justify-between lg:mt-6 items-baseline">
            <label
              htmlFor="subtitle"
              className="block mt-4 text-sm lg:text-xl font-medium text-gray-900"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="Enter subtitle"
              required=""
            />
          </div>
          <div className="lg:flex-col lg:justify-between lg:mt-6 items-baseline">
            <label
              htmlFor="body"
              className="block mb-2 text-sm lg:text-xl font-medium text-gray-900 "
            >
              Content
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
              defaultValue={""}
            />
          </div>
        </div>
      </form>
      <form className="mt-10">
        <div className="mb-6 flex flex-col border-4 px-10 pb-10 pt-2">
          <div className="lg:flex-col lg:justify-between lg:mt-6 items-baseline">
            <h1 className="text-sm lg:text-2xl font-medium mb-6">
              Add new image block
            </h1>
            <label
              htmlFor="title"
              className="block mt-4 text-sm lg:text-xl font-medium"
            >
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="Enter title"
              required=""
            />
          </div>
          <div className="lg:flex-col lg:justify-between lg:mt-6 items-baseline">
            <label
              htmlFor="subtitle"
              className="block mt-4 text-sm lg:text-xl font-medium text-gray-900"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-3/4"
              placeholder="Enter subtitle"
              required=""
            />
          </div>
          <div className="flex items-center mt-8 border-2 px-4 py-12 rounded-lg">
            <div className="flex mx-auto items-center">
              <object className="" data="img/File.svg" height={40} width={30}>
                {" "}
              </object>
              <h1 className="ml-4">Select image</h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

        {/* <h1 className="">Slava Ukraine 🐿</h1> */}
        {/* <hr/>
        <br/>

        <img src={logo} className="App-logo" alt="logo" />
        <br/><br/>
        <hr/>
        <br/>

        <code>{(apiPing ?? "–")}</code>
        <br/><br/>
        <StyledButton onClick={pingApi}>ping API</StyledButton>
        <hr/>

        <input ref={fileInput} type={"file"} accept="image/png, image/jpeg"/>
        <StyledButton onClick={uploadImage}>upload</StyledButton> */}


    </div>
  )
}

export default App
