import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ style, title }) =>{
  return(
    <button className={`px-4 py-2 font-medium text-white bg-blue-600 ${style}`}>
      {title}
  </button>
  );
};

export default Button