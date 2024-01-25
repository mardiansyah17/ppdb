'use client'
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
        },

        styles: {
            variants: {
                filled: {
                    green: {
                        background: 'bg-primary-2',
                        color: 'text-white',
                    }
                },
                outlined: {
                    green: {
                        border: 'border border-primary-2',
                        color: 'text-primary-2',
                    }
                },

            }
        }
    } as ButtonStyleTypes,
    radio: {
        defaultProps: {
            color: "green"
        }
    }
}

export default theme