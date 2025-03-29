import { useState } from "react";

const ToggleColor = () => {

    const toggleTheme = () => {
        console.log("Hello word");
    }



  return (
    <div className="bg-white p-8 rounded-md w-96 flex flex-col space-y-4 items-start dark:bg-black">
        <h1 className="text-black dark:text-white font-bold text-xl">Write Upside Down</h1>
        <p className="text-stone-500 dark:text-white ">
            The Zero Gravity Pen can be used to write in any orientation, including upside down, it even works in outer space.
        </p>
        <button 
            className="bg-blue-200 rounded-md px-4 py-2 cursor-pointer text-blue-900 font-semibold"
            onClick={toggleTheme}
        >
            Toggle dark mode
        </button>
    </div>
  )
}

export default ToggleColor