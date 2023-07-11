import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state)=>{
    return state.users;
  })

//   console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id))
  }

  return (
    <>
        {
            data.map((user,id)=>{
                return(
                <>
                <li key={id}>
                    {user}
                </li>
                <button onClick={()=>deleteUser(id)}>Delete</button>
                </>
                )
            })
        }
    </>
  )
}

export default DisplayUsers