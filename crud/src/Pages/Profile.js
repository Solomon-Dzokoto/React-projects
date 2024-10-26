import { useToggle } from "../hooks/useToggle";


const Profile = () => {
  const [visible,toggle]=useToggle();

  return (
    <div>
     <button onClick={toggle}>
      {
        visible ? 'Hide' : 'Show'
      }
     </button>
     {
      visible && <h1>hidden text</h1>
     }
    </div>
  )
}

export default Profile
