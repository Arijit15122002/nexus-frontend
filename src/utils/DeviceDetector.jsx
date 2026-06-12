import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDevice } from "../redux/slices/deviceSlice";

export default function DeviceDetector() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setDevice({
          width: window.innerWidth,
        })
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [dispatch]);

  return null;
}