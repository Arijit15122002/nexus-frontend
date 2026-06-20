import axios from "axios";
import { setUser } from "../redux/slices/authSlice";

const FetchUserDetails = async (token, dispatch) => {
  console.log("It's being triggered");
  const response = await axios.get(
    "https://nexus-backend-7v2b.onrender.com/user/get-username",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const user = response.data;

  dispatch(
    setUser({
      username: user.username,
      email: user.email,
    }),
  );
};

export default FetchUserDetails;
