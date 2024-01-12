import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs"

function cardSosmed() {
  return (
    <div className="w-[320px] h-[407px] min-w-80 bg-[#748CAB] flex items-center justify-center rounded-2xl font-mono">
      <div className="flex flex-col items-center gap-5 ">
        <span className="max-w-32">
          <img className="rounded-full" src="https://i.pinimg.com/564x/e4/09/12/e40912a31387a031040d16a7538ed568.jpg" alt="" />
        </span>
        <div className="flex flex-col items-center font-semibold text-2xl text-slate-100">
          <h2>Karlen Syaputra,</h2>
          <h2>21</h2>
        </div>
        <div className="bg-[#1D2D44] text-slate-100 rounded-md w-52 flex justify-center py-1">
          <p>FrontEnd Developer</p>
        </div>
        <div className="flex gap-4 text-2xl text-slate-100 ">
          <a href="https://youtu.be/LbQk3bVVMO8?si=-yBdQPbVM6-T_qYN"><BsYoutube className="cursor-pointer" /></a>
          <a href="https://www.instagram.com/wkwkarlen/"><BsInstagram className="cursor-pointer" /></a>
          <a href=""><BsFacebook className="cursor-pointer" /></a>
        </div>
      </div>

    </div>
  )
}

export default cardSosmed