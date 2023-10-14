import { FaCheckCircle } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {
  text: string;
  type: string;
  icon?: string;
};

export default function Button(props: Props) {
  let { text, type, icon } = props;

  return (
    <>
      <button
        className={`px-8 py-3 rounded-md ${type} text-white transition ycenter-xbetween gap-4`}
      >
        {text}
        {icon === "check" && <FaCheckCircle />}
        {icon === "arrow" && <BsFillArrowRightCircleFill />}
      </button>
    </>
  );
}
