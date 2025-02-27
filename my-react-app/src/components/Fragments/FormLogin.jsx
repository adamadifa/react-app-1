import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (

        <form action="">
            <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
            <InputForm label="Password" type="password" name="password" placeholder="Enter your password" />
            <Button classname="bg-blue-600 w-full">Submit</Button>
        </form>

    );
}

export default FormLogin;