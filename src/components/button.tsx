"use client";
import React from "react";

// Reusable button  component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center bg-white bg-opacity-10 shadow-lg shadow-black/10 backdrop-blur-sm rounded-3xl border border-mypink h-20 w-72 text-2xl font-bold text-white text-center ${className}`}
    >{children}
    </button>
  );
};

export default Button;

