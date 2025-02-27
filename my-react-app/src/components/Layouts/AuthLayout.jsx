import propsTypes from 'prop-types'
import { Link } from 'react-router-dom';
const AuthLayout = (props) => {
    const { children, title, type } = props
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold text-blue-600 mb-2'>{title}</h1>
                <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
                {children}
                {type === 'login' && (
                    <p className="mt-2"> Dont Have an account ? {" "}
                        <Link to="/register" className="text-blue-600 font-bold">
                            Register
                        </Link>
                    </p>
                )}
                {type === 'register' && (
                    <p className="mt-2"> Already Have an account ? {" "}
                        <Link to="/login" className="text-blue-600 font-bold">
                            Login
                        </Link>
                    </p>
                )}

            </div>

        </div>
    );
}

AuthLayout.propTypes = {
    children: propsTypes.node,
    title: propsTypes.string,
    type: propsTypes.string
}

export default AuthLayout