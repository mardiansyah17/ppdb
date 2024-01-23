import {ButtonStyleTypes, InputStylesType} from "@material-tailwind/react";

const theme = {
    input: {
        defaultProps: {
            variant: "standard",
            color: "green"
        }
    } as InputStylesType,
    button: {
        defaultProps: {
            color: "green"
        }
    } as ButtonStyleTypes
}

export default theme