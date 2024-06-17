import sateliteImg from "../../assets/satelite2.jpg"
const Banner2 = () => {
  return (
    <div
     className="bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
         <div data-aos="fade-up" data-aos-delay="500" className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-b-sky-800">
            <p  data-aos="fade-up" data-aos-delay="300" className="text-sky-800 font-medium uppercase">Our Mission</p>
            <h1 className="text-5xl uppercase">RapidCast</h1>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus corrupti magni alias nisi quas iure libero labore facere quia laudantium molestias odio excepturi, non, omnis rerum veniam nihil at eum, porro atque officia dicta pariatur tempore reprehenderit. Architecto ducimus, maiores odio voluptatem odit, dolore assumenda sint itaque, modi rerum dolorum?</p>
            <button className="primary-button">Learn More</button>
         </div>
         <div>
            <img data-aos="zoom-in" src={sateliteImg} 
              className="w-[90%] sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2;
