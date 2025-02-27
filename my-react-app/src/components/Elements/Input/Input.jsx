import propTypes from 'prop-types'


const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input type={type} className="w-full text-sm border rounded py-2 px-3 text-slate-700 placeholder:opacity-50"
            name={name} placeholder={placeholder} id={name} />
    )
}

Input.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    name: propTypes.string
}

export default Input;