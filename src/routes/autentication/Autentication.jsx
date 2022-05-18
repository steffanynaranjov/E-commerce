import "./autentication.scss";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in/SignIn";

const Autentication = () => {
  return (
    <div className="autentication-container">
      <SignIn />
      <SignUp />
    </div>
  ); 
};

export default Autentication;
