'use client';
import React from "react";
import {
    Card,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    MobileNav,
    Navbar as NavbarComponent,
    Typography,
} from "@material-tailwind/react";
import {BsRocket, BsStack} from "react-icons/bs";
import {AiOutlineArrowDown} from "react-icons/ai";
import {FaBars} from "react-icons/fa6";


// nav list menu
const navListMenuItems = [
    {
        title: "@material-tailwind/html",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({title, description}) => (
        <a href="#" key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem
                            className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            <BsStack className="h-[18px] w-[18px] text-blue-gray-500"/>{" "}
                            Pages{" "}
                            <AiOutlineArrowDown
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <BsRocket strokeWidth={1} className="h-28 w-28"/>
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                <BsStack className="h-[18px] w-[18px] text-blue-gray-500"/>{" "}
                Pages{" "}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "About us",
    },
    {
        label: "Blog",
    },
    {
        label: "Contact us"
    }

];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({label}, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                      
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <NavbarComponent className="mx-auto  p-2  lg:pl-6" fullWidth>
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Logo
                </Typography>
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <FaBars className="h-6 w-6"/>
                </IconButton>

                {/*<ProfileMenu/>*/}
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList/>
            </MobileNav>
        </NavbarComponent>
    );
}