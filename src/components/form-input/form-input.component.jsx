import {Group, Input, FormInputLabel} from './form-input.styles'
const FormInput = ({ label, ...otherProps }) => (
    <Group>
        <Input {...otherProps} />
        {label && (
            <FormInputLabel shrink={otherProps.value.length} >{label}</FormInputLabel>
        )}
    </Group>
)

export default FormInput