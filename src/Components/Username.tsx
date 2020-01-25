import React from "react";

interface UsernameProps {
  todo: {
    text: any;
  };
}
export const Username: React.FC<UsernameProps> = ({ todo }) => {
  return <li>{todo.text}</li>;
};
