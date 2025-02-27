import { useRouteError } from "react-router-dom"

const NotFoundPage = () => {
    const error = useRouteError();
    return (
        <div className="flex w-full min-h-screen flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold">404</h1>
            <p className="text-2xl font-semibold">{error.statusText || error.message}</p>
        </div>
    )
}

export default NotFoundPage