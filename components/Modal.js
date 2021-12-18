import React,{useState} from 'react';
import { useMoralis } from "react-moralis"

function Modal() {
  const {setUserData, isUserUpdating,userError,user}=useMoralis()
    const [isOpen, setIsOpen]=useState(false);
    
    const [username, setUsername]=useState()

    const toggleModal = ()=>{

            setIsOpen(!isOpen)
    }

    const HandlesetUsername =()=>{
      // const username =prompt(`Enter you New username (current: ${user.getUsername()})`)

      if(!username) return;
      
      setUserData({
          username
      }).then(()=>toggleModal())

      setUsername("")
    
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
<button
  className={`
  absolute top-5 right-5
    bg-[#EE4444]
    text-white
    active:bg-purple-600
    font-bold
    uppercase
    text-xs
    px-4
    py-2
    rounded
    shadow
    hover:shadow-md
    outline-none
    focus:outline-none
    mr-1
    mb-1
    ease-linear
    transition-all
    duration-150
    ${isOpen ? "hidden" : "flex"}
  `}
  type="button"
//   function
//   onclick="toggleModal('modal-example-small')"
  onClick={toggleModal}
>
  Change userName
</button>

{/* <!-- Modal --> */}
<div
  className={`
    ${isOpen ? "flex" : "hidden"}
    overflow-x-hidden overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    justify-center
    items-center
    flex
  `}
  id="modal-example-small"
>
  <div className="relative w-auto my-6 mx-auto max-w-sm">
    {/* <!--content--> */}
    <div
      class="
        border-0
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
      "
    >
      {/* <!--header--> */}
      <div
        className="
        items-center
          flex
          mx-auto
          justify-center
          p-5
          border-b border-solid border-gray-200
          rounded-t
        "
      >
        <h3 className="text-sm truncate font-semibold">{`Enter you New username (current: ${user?.getUsername()})`}</h3>
        <button
          className="
            p-1
            ml-auto
            bg-transparent
            border-0
            text-gray-300
            float-right
            text-3xl
            leading-none
            font-semibold
            outline-none
            focus:outline-none
          "
        //   function
          onclick="toggleModal('modal-example-small')"
        >
          <span
            className="
              bg-transparent
              h-6
              w-6
              text-2xl
              block
              outline-none
              focus:outline-none
            "
          >
            <i className="fas fa-times"></i>
          </span>
        </button>
      </div>
      {/* <!--body--> */}
      <div className="relative p-2 m-2 flex-auto rounded-full border-4 border-blue-400">
        

        <input className="outline-none" type="" focus={true} placeholder="New Name..."
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        maxLength={20}
        />
      </div>
      {/* <!--footer--> */}
      <div
        className="
          flex
          items-center
          justify-end
          p-6
          border-t border-solid border-gray-200
          rounded-b
        "
      >
        <button
          className="
            text-[#EE4444]
            background-transparent
            font-bold
            uppercase
            px-6
            py-2
            text-sm
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
          onClick={toggleModal}
        >
          Close
        </button>
        <button
          className="
            bg-[#EE4444]
            text-white
            active:bg-purple-600
            font-bold
            uppercase
            text-xs
            px-4
            py-2
            rounded
            shadow
            hover:shadow-md
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
          type="button"
          // onclick="toggleModal('modal-example-small')"
          onClick={HandlesetUsername}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>
<div
  className="hidden opacity-25 fixed inset-0 z-40 bg-black"
  id="modal-example-small-backdrop"
></div>
{/* <script type="text/javascript">
  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }
</script> */}
    </div>
  )
}

export default Modal
