import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DeleteAllUser from "./DeleteAllUser";

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))       
    }

  return (
    <>
        <button onClick={()=>addNewUser(fakeUserData())}>Add New User</button>
        <DeleteAllUser/>
    </>
  )
}

export default UserDetails