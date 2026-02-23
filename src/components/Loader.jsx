import React from 'react'

function Loader() {
  return  (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center text-5xl ">
     
        <img 
          src="https://i.sstatic.net/7VozH.gif" 
          className="mx-auto w-50 h-50" 
        />
       
      </div>
    </div>
  )
}
export default Loader