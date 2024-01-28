'use client'
import {ButtonStyleTypes, InputStylesType, SelectStylesType, TextareaStylesType} from "@material-tailwind/react";

const theme = {
    input: {
        styles: {
            base: {
                container: {
                    minWidth: "100%",
                },
            },
        },
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
    },
    select: {
        defaultProps: {
            color: "green",
            variant: "standard"
        }
    } as SelectStylesType,
    textarea: {
        defaultProps: {
            color: "green",
            variant: "standard"
        }
    } as TextareaStylesType
}

export default theme