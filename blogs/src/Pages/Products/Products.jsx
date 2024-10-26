import { useState } from "react"
import data from "./data"
import './product.css'

const Products = () => {
  // const [visibleElements, setVisibleElements] = useState({});
  // const elementRef = useRef([]);
  const [open, setOpen] = useState(null);
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const id = entry.target.getAttribute('data-id');
  //       setVisibleElements((prev) => ({
  //         ...prev,
  //         [id]: entry.isIntersecting,
  //       }));
  //     });
  //   }, { threshold: 0.3 });
    
  //   elementRef.current.forEach((element) => {
  //     if (element) observer.observe(element);
  //   });
    
  //   return () => elementRef.current.forEach((element) => observer.unobserve(element));
  // }, []);

  const handleOpen = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };

  return (
    <main className="grow p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-extrabold text-3xl mb-8">Drive Smarter. Rent Smarter</h2>
        <ul className="ul grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((car) => (
            <li
              key={car.id}

            >
              <article className="h-full max-h-fit overflow-hidden shadow-xl hover:shadow-none border-gray-200 border rounded-xl car">
                <img src={car.image} alt={car.brand} />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-4">{car.brand}</h2>
                  <p>{open === car.id ? car.desc : `${car.desc.slice(0, 120)}...`}</p>
                  <button
                    onClick={() => handleOpen(car.id)}
                    className="btn mt-4"
                  >
                    {open === car.id ? 'Show Less' : 'Show More Details'}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Products;