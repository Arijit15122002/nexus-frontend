import { Bell, Home, Info, Library, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import { useState } from "react";
import { FetchConversationMessages } from "../../utils/FetchUserData";

export default function SideNavigation() {
  const token = useSelector((state) => state.auth.token);
  const theme = useSelector((state) => state.theme.theme);
  const loading = useSelector((state) => state.conversation.loading);
  const conversations = useSelector(
    (state) => state.conversation.conversations,
  );
  const currentConversationId = useSelector((state) => state.message.conversationId)
  const dispatch = useDispatch();

  const [conversationPanelOpen, setConversationPanelOpen] = useState(false);

  const handleClickConversation = (id) => {
    setConversationPanelOpen(false)
    FetchConversationMessages(token, id, dispatch);
  };

  return (
    <div
      className={`relative h-full flex flex-col w-[70px] pt-2 pb-6 rounded-2xl items-center justify-between transition-all duration-300 ${
        theme === "dark" ? "bg-[#171717]" : "bg-[#efefef]"
      } `}
    >
      {/* logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="60"
        height="60"
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

      {/* navigations */}
      <div className="py-6 flex flex-col gap-4">
        {/* new chat */}
        <NavLink
          to="/new-chat"
          className={({ isActive }) =>
            `relative h-10 w-10 flex justify-center items-center rounded-xl transition-all duration-300 bg-orange-400
    ${isActive ? "bg-orange-500 shadow-2xl shadow-orange-600" : "hover:bg-orange-500"}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-3 h-6 w-1 rounded-full bg-orange-500" />
              )}

              <Plus className={`h-4 w-4 text-white`} />
            </>
          )}
        </NavLink>

        {/* home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative h-10 w-10 flex justify-center items-center rounded-xl transition-all duration-300
    ${
      isActive
        ? theme === "dark"
          ? `
      bg-[#232323]
      border border-[#303030]
      shadow-lg shadow-black/50
    `
          : `
      bg-white
      shadow-2xl shadow-blue-600
    `
        : theme === "dark"
          ? "hover:bg-[#232323]"
          : "hover:bg-white/50"
    }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-3 h-6 w-1 rounded-full bg-blue-500 " />
              )}

              <Home
                className={`h-4 w-4 transition-all duration-300 ${
                  isActive
                    ? theme === "dark"
                      ? "text-white"
                      : "text-blue-500"
                    : theme === "dark"
                      ? "text-zinc-400"
                      : "text-zinc-500"
                }`}
              />
            </>
          )}
        </NavLink>

        {/* libary */}
        <div
          onClick={() => setConversationPanelOpen(!conversationPanelOpen)}
          className={`relative h-10 w-10 flex justify-center items-center rounded-xl transition-all duration-300 cursor-pointer
    ${
      conversationPanelOpen
        ? theme === "dark"
          ? `
            bg-[#232323]
            border border-[#303030]
            shadow-lg shadow-black/50
          `
          : `
            bg-white
            shadow-2xl shadow-blue-600
          `
        : theme === "dark"
          ? "hover:bg-[#232323]"
          : "hover:bg-white/50"
    }`}
        >
          {conversationPanelOpen && (
            <div className="absolute -left-3 h-6 w-1 rounded-full bg-blue-500" />
          )}

          <Library
            className={`h-4 w-4 transition-all duration-300 ${
              conversationPanelOpen
                ? theme === "dark"
                  ? "text-white"
                  : "text-blue-500"
                : theme === "dark"
                  ? "text-zinc-400"
                  : "text-zinc-500"
            }`}
          />
        </div>

        {/* about us */}
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `relative h-10 w-10 flex justify-center items-center rounded-xl transition-all duration-300
    ${
      isActive
        ? theme === "dark"
          ? `
      bg-[#232323]
      border border-[#303030]
      shadow-lg shadow-black/50
    `
          : `
      bg-white
      shadow-2xl shadow-blue-600
    `
        : theme === "dark"
          ? "hover:bg-[#232323]"
          : "hover:bg-white/50"
    }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-3 h-6 w-1 rounded-full bg-blue-500 " />
              )}

              <Info
                className={`h-4 w-4 transition-all duration-300 ${
                  isActive
                    ? theme === "dark"
                      ? "text-white"
                      : "text-blue-500"
                    : theme === "dark"
                      ? "text-zinc-400"
                      : "text-zinc-500"
                }`}
              />
            </>
          )}
        </NavLink>
      </div>

      <div className="flex flex-col justify-end items-center gap-4">
        {/* notifications */}
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `relative h-10 w-10 flex justify-center items-center rounded-xl transition-all duration-300
    ${isActive ? "bg-white shadow-md shadow-blue-800" : "hover:bg-white/50"}`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-3 h-6 w-1 rounded-full bg-blue-500" />
              )}

              <Bell
                className={`h-4 w-4 ${
                  isActive ? "text-blue-500" : "text-zinc-500"
                }`}
              />
            </>
          )}
        </NavLink>

        {/* theme toggle */}
        <div>
          <ThemeToggleButton />
        </div>
        {/* ConversationPanel */}
        <div
          className={`${
            conversationPanelOpen
              ? "-translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0 pointer-events-none"
          } absolute h-full w-[200px] -right-[240px] top-0 transition-all duration-300 p-1 bg-[#efefef] dark:bg-[#343434] border border-[1px] border-[#cdcdcd] dark:border-[#454545] rounded-2xl p-2 shadow shadow-2xl shadow-[rgba(0,0,0,0.1)]`}
        >
          <div className="h-full w-full">
            {loading ? (
              <>
                {Array.from({ length: 17 }).map((_, index) => (
                  <div key={index} className="p-1">
                    <div className="h-7 w-full rounded-xl bg-white/50 dark:bg-[#4a4a4a] animate-pulse" />
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="flex flex-col">
                  <div className="text-lg exo font-bold tracking-wider px-2 mt-2 mb-4 text-[#ababab]">Recent Activity</div>
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`${currentConversationId === conversation.id ? "bg-white/70 dark:bg-black/50" : "hover:bg-white/50 dark:hover:bg-black/30"} p-2 rounded-lg cursor-pointer truncate rounded-xl exo text-xs md:text-sm text-[#454545] dark:text-[#efefef] transition-all duration-300 overflow-y-auto custom-scrollbar mb-2`}
                      onClick={() => handleClickConversation(conversation.id)}
                    >
                      {conversation.title}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
