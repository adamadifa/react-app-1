
import { Link } from "react-router-dom";
import FormRegister from "../../components/Fragments/FormRegister";
import AuthLayout from "../../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout title="Login">
            <FormRegister />
            <p className="mt-2">Have an account ?
                <Link to="/login" className="text-blue-600 font-bold">
                    Login
                </Link>
            </p>
        </AuthLayout>
    );
}

export default RegisterPage;