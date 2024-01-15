import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "px-4 py-5 md:py-6 lg:py-8 w-full md:max-w-4xl lg:max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
