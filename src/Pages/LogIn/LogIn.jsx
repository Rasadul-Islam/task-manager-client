import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const LoginPage = () => {
    const { loginWithGoogle } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const googleLogin = async () => {
        setLoading(true);
        try {
            await loginWithGoogle();
            console.log("Logged in with Google!");
            navigate("/");
        } catch (err) {
            console.error(err.message || "Google login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[50%] mx-auto flex flex-col items-center py-52">
            <div className="form-control mt-5 px-5">
                <button
                    onClick={googleLogin}
                    disabled={loading}
                    className="btn bg-transparent font-semibold text-lg bg-gray-200 hover:bg-teal-300 transition"
                >
                    <img src="https://i.ibb.co.com/ZdHFgMk/png-clipart-google-google.png" alt="Google Logo" className='w-8 h-8 bg-transparent rounded-full' />
                    {loading ? "Logging in..." : "Log in with Google"}
                </button>
            </div>
        </div>
    );
};

export default LoginPage;