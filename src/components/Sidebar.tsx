'use client';
import React, {Fragment, useState} from "react";
import useSidebar from "@/store/useSidebar";
import {List, ListItem, ListItemPrefix, Typography} from "@material-tailwind/react";
import navLinks from "@/libs/navLinks";
import {Accordion, AccordionBody, AccordionHeader} from "@/libs/materialTailwind";
import {RiGhost2Fill} from "react-icons/ri";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {IoIosArrowDown} from "react-icons/io";

export default function Sidebar() {
    const {close, isOpen} = useSidebar()
    const [accordionOpen, setAccordionOpen] = useState(0);
    const pathName = usePathname();
    const handleOpen = (value: number) => {
        setAccordionOpen(accordionOpen === value ? 0 : value);
    };

    return (
        <aside
            className={`bg-white ${
                isOpen ? "translate-x-0" : "-translate-x-80"
            } fixed  inset-0 z-50   h-screen w-72  transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
        >
            <List>
                {
                    navLinks.map((link, index) => {


                        return link.subMenu ?
                            <Fragment key={`navLink.${index}`}>
                                <Accordion
                                    icon={<IoIosArrowDown
                                        className={`transition-all duration-300 ${accordionOpen === index + 1 ? "rotate-180" : "rotate-0"}`}/>}
                                    open={accordionOpen === index + 1}>
                                    <ListItem className="p-0" selected={accordionOpen === 1}>
                                        <AccordionHeader onClick={() => handleOpen(index + 1)}
                                                         className="border-b-0 p-3">

                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                {link.name}
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List className="p-0">
                                            {
                                                link.subMenu.map((subLink, subIndex) => {
                                                    return <ListItem key={subIndex}>
                                                        <ListItemPrefix>
                                                            <RiGhost2Fill strokeWidth={3} className="h-3 w-5"/>
                                                        </ListItemPrefix>
                                                        {subLink.name}
                                                    </ListItem>

                                                })
                                            }
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>

                            : <Link key={`navLink.${index}`} href={'/admin'}>
                                <ListItem
                                    className={`${link.path === pathName ? "bg-primary-2 text-white" : ""} `}>{link.name}</ListItem>
                            </Link>
                    })
                }


            </List>

        </aside>

    );
}
