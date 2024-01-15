import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Section: FC<Props> = ({ children, className }) => {
  return (
    <section className={twMerge("py-4 md:py-8 lg:py-16", className)}>
      {children}
    </section>
  );
};

export default Section;
