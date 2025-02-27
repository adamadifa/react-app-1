import propTypes from 'prop-types'

const Label = (props) => {
    const { children, htmlFor } = props
    return (
        <label htmlFor={htmlFor} className="block text-slate-700 mb-2 font-bold text-sm">{children}</label>
    )
}

Label.propTypes = {
    children: propTypes.string,
    htmlFor: propTypes.string,
}
export default Label;