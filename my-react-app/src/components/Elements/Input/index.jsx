import Input from "./Input"
import Label from "./Label"
import propsTypes from 'prop-types'
const InputForm = (props) => {
    const { label, name, placeholder, type } = props
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

InputForm.propTypes = {
    label: propsTypes.string,
    name: propsTypes.string,
    placeholder: propsTypes.string,
    type: propsTypes.string
}


export default InputForm