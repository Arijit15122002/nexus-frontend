import axios from "axios";
import { Eye, EyeOff, KeyIcon, Mail } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginSuccess } from "../redux/slices/authSlice";
import FetchUserDetails from "../utils/FetchUserDetails";

export default function Login() {
  const theme = useSelector((state) => state.theme.theme);
  const deviceType = useSelector((state) => state.device.deviceType);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = { email, password };

  const [showPassword, setShowPassword] = useState(false);

  const submit = async () => {
    
    try{
      const response = await axios.post("https://nexus-backend-7v2b.onrender.com/auth/login", form);
      const token = response.data.token;
      console.log("this is triggered")
      dispatch(loginSuccess(token));
      await FetchUserDetails(token, dispatch);

      if( token != null ) {
        window.location.href = "/chat";
      }
      
    } catch (error) {
      console.log(error);
    console.log(error.response);
    console.log(error.response?.data);
    }
    
  }

  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <div className={`${deviceType == "mobile" ? "hidden" : "flex"}`}></div>

      <div className={`${deviceType == "mobile" ? "" : "w-[1/2]"} relative`}>
        <div className="w-[100px] h-[100px] absolute top-[40%] left-[40%] bg-blue-300 dark:bg-blue-500 rounded"/>
        {
          deviceType != "mobile" ? 
          <div className="rounded-3xl w-40 h-20 top-0 left-0 bg-[#dedede] dark:bg-[#565656] absolute"/> : <></>
        }
        <div
        className={`${deviceType == "mobile" ? "" : "w-full"} flex flex-col justify-center items-center gap-2 exo text-[#232323] dark:text-[#fefefe] px-4 py-14 backdrop-blur-3xl rounded-3xl`}
      >
        {/* icon */}
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="80"
          height="80"
          viewBox="0 0 1024 1024"
        >
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M507.143 237.711C513.811 237.352 522.037 237.725 528.738 238.348C574.811 242.791 617.248 265.302 646.765 300.956C676.297 336.744 690.36 382.82 685.845 428.999C680.96 475.202 657.947 517.58 621.856 546.837C586.785 576.204 541.365 590.209 495.845 585.693C496.235 564.505 500.147 550.784 507.447 531.443C555.362 532.288 596.204 510.642 619.972 468.621C626.965 455.187 631.416 440.577 633.1 425.526C636.643 394.014 627.431 362.395 607.518 337.717C586.731 311.954 558.742 295.283 525.591 291.812C493.627 288.619 461.71 298.3 436.905 318.709C412.159 339.099 396.458 368.429 393.212 400.328C370.212 403.948 359.147 407.72 338.484 418.485C336.064 377.903 353.347 330.511 379.868 299.924C414.037 260.517 455.825 241.738 507.143 237.711Z"
          />
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M694.15 435.655C714.644 447.967 732.588 462.358 747.195 481.451C773.868 516.086 785.668 559.909 779.991 603.255C773.502 649.506 749.009 691.323 711.842 719.605C675.53 747.44 629.544 759.489 584.249 753.036C537.754 746.552 495.713 721.939 467.302 684.568C438.757 647.078 428.345 605.41 434.619 558.884C440.017 526.257 449.732 509.265 466.744 482.131C484.766 490.653 494.998 498.768 508.79 512.651C495.282 536.309 487.444 554.08 487.827 582.584C488.19 614.966 501.569 645.84 524.95 668.248C549.341 691.758 579.304 701.123 612.641 700.523C643.826 699.958 673.508 687.023 695.152 664.566C737.073 620.751 738.393 552.618 699.379 506.268C693.211 498.939 686.973 492.855 680.016 486.267C688.247 466.784 691.057 456.848 694.15 435.655Z"
          />
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M407.953 408.293C427.032 406.441 453.505 410.924 471.601 417.105C517.927 432.926 553.037 460.361 575.238 504.301C554.589 516.457 548.447 518.52 525.154 522.762C524.009 520.739 522.816 518.743 521.576 516.777C503.627 488.848 472.961 472.368 441.203 464.963C376.495 449.877 311.602 494.604 298.664 559.386C292.55 590.126 298.96 622.034 316.47 648.028C334.461 674.541 362.239 692.831 393.704 698.881C419.739 702.635 437.088 701.186 461.797 692.365C473.776 708.325 487.055 719.996 502.912 731.83C481.32 743.96 457.446 751.476 432.799 753.904C387.001 758.192 341.365 744.187 305.857 714.945C270.349 685.575 248.019 643.258 243.813 597.37C237.716 533.562 272.699 468.852 326.347 434.946C352.23 418.587 377.705 411.037 407.953 408.293Z"
          />
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M590.049 576.936L590.633 577.048C592.379 579.271 590.734 591.492 590.521 594.825C588.438 627.349 574.501 653.589 556.954 680.131C547.966 675.653 543.18 672.227 535.703 665.887C528.572 659.48 524.375 654.643 518.196 647.436C531.131 626.958 536.001 617.944 539.885 593.233C559.527 589.591 571.95 585.809 590.049 576.936Z"
          />
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M610.507 408.236C615.042 408.062 620.303 408.374 624.891 408.536C624.235 430.814 623.643 441.458 614.211 462.081C591.682 463.064 585.615 464.304 564.46 471.421C560.735 466.638 556.896 461.944 552.947 457.343C543.741 447.325 535.857 440.806 524.727 433.247C529.44 429.982 535.493 427.168 540.709 424.677C563.735 413.681 585.243 409.373 610.507 408.236Z"
          />
          <path
            fill={theme === "dark" ? "#fefefe" : "#232323"}
            d="M405.279 470.643C408.884 470.973 411.065 477.525 412.973 480.699C415.835 485.544 419.047 490.174 422.585 494.55C428.734 502.173 433.158 506.135 440.473 512.229C431.415 530.242 428.669 542.318 424.746 561.529C417.503 557.11 411.985 553.373 405.159 548.397C384.626 532.248 368.083 511.591 356.811 488.025C372.52 478.237 387.354 473.957 405.279 470.643Z"
          />
        </svg>

        <div className=" tracking-wider text-xl">Sign in to your account</div>
        <div>
          Or{" "}
          <NavLink to={"/register"} className="underline ">
            sign up
          </NavLink>{" "}
          if you're a new member
        </div>

        <div className="mt-4 px-6 py-8 flex flex-col items-center gap-5 rounded-xl">
          <div className="flex flex-col gap-1 sm:w-80 min-w-[300px]">
            <div className=" pl-4 pb-0.5 flex flex-row items-center gap-2 w-full text-sm md:text-md">
              <Mail size={16} /> Email
            </div>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text" 
              className="px-3 py-2 rounded-lg bg-white outline-none border-[1px] border-[#ababab] dark:bg-[#111111] dark:border-none text-sm md:text-md" />
          </div>
          <div className="flex flex-col gap-1 sm:w-80 min-w-[300px]">
            <div className=" pl-4 pb-0.5 flex flex-row items-center gap-2 text-sm md:text-md">
              <KeyIcon size={16} />
              Password
            </div>
            <div className="w-full relative">
              <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"} 
              className="w-full px-3 py-2 rounded-lg bg-white outline-none border-[1px] border-[#ababab] dark:bg-[#111111] dark:border-none text-sm md:text-md" />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[10px] top-0 translate-y-[60%] cursor-pointer"
              >
                {
                  showPassword ? <Eye size={16} /> : <EyeOff size={16} />
                }
              </div>
            </div>
            <div className="text-xs">Forgot your password?</div>
          </div>

          <button
            onClick={() => {
              submit();
            }} 
            className="bg-[#232323] text-[#eeeeee] mt-8 pt-2.5 pb-3 px-20 sm:px-30 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 dark:bg-[#efefef] dark:text-black cursor-pointer min-w-[220px]">Sign in</button>
        </div>
      </div>
      </div>
    </div>
  );
}
