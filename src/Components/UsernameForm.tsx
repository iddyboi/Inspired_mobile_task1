import * as React from "react";
import "../App.css";

interface Props {
  function?: () => void;
}

const UsernameForm: React.FC<Props> = () => {
  return (
    <div>
      <form className="form-user">
        <div className="form-content">
          <input type="text" placeholder="Enter A Username" />
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default UsernameForm;
