
function cardMe() {
  async function generateIdea() {
    const activity = document.getElementById("activity")
    const type = document.getElementById("type")
    const title = document.getElementById("title")
    const url = 'https://www.boredapi.com/api/activity'
    const responses = await fetch(url)
    const api = await responses.json()

    activity.textContent = api.activity
    type.textContent = api.type
    // type.style.display = "block"
    title.style.display = "hidden"
  }

  return (
    <div className="w-[320px] h-[407px] md:w-[624px] flex flex-col items-center justify-center  rounded-2xl font-mono border border-slate-200">
      <div className="text-slate-200 text-xl text-center">
        <div className="" id="title">
          {/* <h3>Dont know what u wanna do?</h3> */}
        </div>
        <div className="mx-4" id="result">
          <h3 className="text-3xl font-bold" id="activity"></h3>
          <p className="inline-block px-2 rounded-lg bg-slate-200 text-blue-900 mt-2" id="type"></p>
        </div>
        <button className="px-3 py-2 bg-[#3E5C76] border border-[#1D2D44] hover:bg-transparent hover:border-slate-200 duration-300  rounded-xl bottom mt-6" onClick={generateIdea}>Get an Idea</button>
      </div>
    </div>
  )
}

export default cardMe