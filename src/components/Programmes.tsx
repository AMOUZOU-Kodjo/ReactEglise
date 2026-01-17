
import Title from "./Title"

const Programmes = () => {
  
  return (
    <div className=" md:h-screen flex flex-col items-center justify-center" id="Programmes">
      <Title title="Programmes"  />
        <div className="bg-base-300 p-4 rounded-xl flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 ">

            <div className="grid grid-cols-3 gap-5 md:grid-cols-2  ">
                <a href="#" className="btn  bg-accent hover:bg-blue-700">MERCREDI</a>
                <a href="#" className="btn  bg-accent hover:bg-blue-700">VENDREDI</a>
                <a href="#" className="btn  bg-accent hover:bg-blue-700">SAMEDI</a>
                <a href="#" className="btn  bg-accent hover:bg-blue-700">DIMENCHE</a>
                <a href="#" className="btn  bg-accent hover:bg-blue-700">MAI</a>
                <a href="#" className="btn  bg-accent hover:bg-blue-700">AOUT</a>
            </div>
            <div className="md:w-1/2 bg-base-100 p-5 rounded-xl   ">
                <h1 className="font-bold text-accent text-center text-2xl">INTERSECTION</h1>
                <h4 className="text-center after:container">De <span className="font-bold text-blue-400">18H</span> à <span className="font-bold text-blue-400">19H</span></h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde optio nulla dolor officia sit assumenda, minima perspiciatis delectus tempore repudiandae aut voluptates dignissimos ullam ipsum itaque voluptatem, fuga natus quis!</p>
            </div>
        </div>


    </div>
  )
}

export default Programmes
