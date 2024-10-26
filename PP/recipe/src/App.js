import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import image1 from './images/sloppy-joes-vertical-64821c68ce68d.avif';
import image2 from './images/crispy-sheet-pan-black-bean-tacos.avif';
import image3 from './images/creamy-tuscan-white-bean-skillet.avif';
import image4 from './images/Sesame-tofu-Brocoli.avif';
import image5 from './images/summer-stuffed-shells-lead-6661c2fae99d7.avif';
import image6 from './images/Shrimp-tacos.avif';
import image7 from './images/chicken-tamale-pie-secondary-64da954b55019.avif';
import image8 from './images/chicken-stir-fry-lead-6513039282dd4.avif';
import image9 from './images/bbq-pulled-mushrooms-vertical-2-667dd00e6d0bc.avif';
import image11 from './images/sheet-pan-tikka-masala-lead-659c3bc4edd55.avif';
import image12 from './images/Indian-Butter-Chickpeas.avif';
import image13 from './images/egg-roll-bowls-secondary-651c37088bb12.avif';
import image14 from './images/tater-tot-chicken-pot-pie-vertical-3-66704806752d5.avif'
import { useState } from "react";


function App() {
  const [count,setCount]=useState(0);
  const [search,setSearch] = useState('');
  const [likedRecipes, setLikedRecipes] = useState({});
  const [recipes, setRecipes] = useState([
    {
      id: "1",
      name: " Corn Dog Bites",
      image: "https://tinyurl.com/2p82zzca/ce327a1e-0d55-4cb2-8f69-a2d977b79bc3.png"
    },
    {
      id: "2",
      name: " Creamy Pancake",
      image: "https://tinyurl.com/2p82zzca/2807982c-986a-4def-9e3a-153a3066af7a.png"
    },
    {
      id: "3",
      name: " Black Bean Tostadas",
      image: image1
    },
    {
      id: "4",
      name: " Crispy Sheet Pan Black Bean",
      image: image2
    }
    ,
    {
      id: "5",
      name: " Creamy Tuscan White Bean Skillet",
      image: image3
    },
    {
      id: "6",
      name: " Sesame Tofu Brocoli",
      image: image4
    },
    {
      id: "7",
      name: " Summer Stuffed Shells",
      image: image5
    },
    {
      id: "8",
      name: " Shrimp Tacos",
      image: image6
    },
    {
      id: "9",
      name: " Chicken Tamale Pie",
      image: image7
    },
    {
      id: "10",
      name: " Chicken Stir Fry",
      image: image8
    },
    {
      id: "11",
      name: " Pulled Mushrooms",
      image: image9
    },
    {
      id: "13",
      name: " Sheet Pan Tikka Masala",
      image: image11
    },
    {
      id: "14",
      name: " Indian Butter Chickpeas",
      image: image12
    },
    {
      id: "15",
      name: " Sheet Pan Tikka Masala",
      image: image14
    },
    {
      id: "16",
      name: " Indian Butter Chickpeas",
      image: image13
    },
    
  ]);
  
  const toggleLike = (id) => {
    setLikedRecipes((prevLikedRecipes) => {
      const isCurrentlyLiked = !!prevLikedRecipes[id]; 
      const updatedLikedRecipes = {
        ...prevLikedRecipes,
        [id]: !isCurrentlyLiked, 
      };

     
      if (isCurrentlyLiked) {
        setCount(count - 1); 
      } else {
        setCount(count + 1); 
      }

      return updatedLikedRecipes;
    });
  };

 const checkedRecipes = search
    ? recipes.filter(recipe => 
        (recipe.name).toLowerCase().includes(search.toLowerCase())
      )
    : recipes; 

  return (
    <div className="App">
    <Header
    search={search}
    setSearch={setSearch}
    count={count}
    />
    <Content 
     search={search}
     recipes={checkedRecipes}
     count={count}
     setCount={setCount}
     setRecipes={setRecipes}
     likedRecipes={likedRecipes}
     toggleLike={toggleLike}
    />
    <Footer />
    </div>
  );
}

export default App;
