import type {Config} from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/libs/theme.ts",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    1: "#005F2F",
                    2: "#00955B",
                    3: '#005F2F'
                }
            }
        },
    },
    plugins: [],
};
export default withMT(config)
