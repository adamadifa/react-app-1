import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (

        <form action="">
            <InputForm label="Full Name" type="text" name="full_name" placeholder="Full Name" />
            <InputForm label="Email" type="email" name="email" placeholder="Enter your email" />
            <InputForm label="Password" type="password" name="password" placeholder="Enter your password" />
            <InputForm label="Confirm Password" type="password" name="confirm_password" placeholder="Confirm Password" />
            <Button classname="bg-blue-600 w-full">Submit</Button>
        </form>

    );
}

export default FormRegister;