import Title from "./Title"

const Galleries = () => {
  return (
    <div className="md:h-screen mt-10">
      <Title title="Galleries"/>
      <div className="flex flex-col justify-center items-center gap-y-10 "> 
        <div >
            <h1>Photos</h1>
            <div className="flex gap-2 flex-row " >
            <img src="/ToonTap_20250413_1444388414902052407.jpg" alt="" className="h-20 "  />
            <img src="/ToonTap_20250413_1444388414902052407.jpg" alt="" className="h-20 "  />
            <img src="/ToonTap_20250413_1444388414902052407.jpg" alt="" className="h-20 "  />
            <img src="/ToonTap_20250413_1444388414902052407.jpg" alt="" className="h-20 "  />
            <img src="/ToonTap_20250413_1444388414902052407.jpg" alt="" className="h-20 "  />
            </div>
            
        
        </div>
        <div>
            <h1>Videos</h1>
        </div>
        <div>
            <h1>Audios</h1>
        </div>
      </div>
    </div>
  )
}

export default Galleries
