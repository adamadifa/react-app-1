import { Link } from "react-router-dom";
import FormLogin from "../../components/Fragments/FormLogin";
import AuthLayout from "../../components/Layouts/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="mt-2">Dont Have an account ?
                <Link to="/register" className="text-blue-600 font-bold">
                    Register
                </Link>
            </p>
        </AuthLayout>
    );
}

export default LoginPage;