import React from 'react'

export default function HeroSec() {
  return (
    <>
    
    <div class="h-full bg-violet-950	">
      {/* <!--Nav--> */}
     
      {/* <!--Main--> */}
      <div class="container   mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Main
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Lets Start
            </span>
            to sell yourself!
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-orange-100">
            Sub-hero message, not too long and not too short. Make it just right!
          </p>

          <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          

            <div class="flex items-center justify-center ">
              <button
                class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
              Click Here To Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* <!--Right Col--> */}
        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="https://th.bing.com/th/id/R.b5fd5552b4503ddb532935e2312e2815?rik=Nd07YtSd6Gn0Pw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcomputer-transparent-image%2fcomputer-transparent-image-21.png&ehk=L%2fIpNwIxcdXbFAmihG%2fS3a1d5fo7Or1VatOBIP1knWg%3d&risl=&pid=ImgRaw&r=0tps://img.freepik.com/premium-vector/software-code-lines-screen-laptop_251819-2398.jpg" />
        </div>

       </div>
    </div>
    
    </>
  )
}
