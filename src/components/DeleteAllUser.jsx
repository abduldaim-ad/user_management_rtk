import { clearAllUsers } from "../store/slices/UserSlice"
import { useDispatch } from "react-redux"

const DeleteAllUser = () => {

    const dispatch = useDispatch();

    const deleteUsers = () => {
        dispatch(clearAllUsers());
    }

  return (
    <>
        <br />
        <button onClick={()=>deleteUsers()}>Delete All User</button>
    </>
  )
}

export default DeleteAllUser