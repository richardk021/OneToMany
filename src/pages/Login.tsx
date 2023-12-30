import App from "../App";
import Footer from "../components/Footer";
import LoginMain from "../components/LoginMain";
import Navbar from "../components/Navbar";

const Login: React.FC = () => {
    // const navigate = useNavigate();
  
    return (
        <div>
          <Navbar />
          <LoginMain />
          <Footer />
        </div>
  
    );
  }
  
  export default Login;