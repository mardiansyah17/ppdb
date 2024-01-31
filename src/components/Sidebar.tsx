'use client';
import React from "react";
import useSidebar from "@/store/useSidebar";
import {List, ListItem, ListItemPrefix} from "@material-tailwind/react";
import Link from "next/link";
import {Accordion, AccordionBody, AccordionHeader, Typography} from "@/libs/materialTailwind";
import {RiGhost2Fill} from "react-icons/ri";
import {BiTask} from "react-icons/bi";

export default function Sidebar() {
    const {close, isOpen} = useSidebar()
    const [accordionOpen, setAccordionOpen] = React.useState(0)

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
                <Link href={'/admin'}>
                    <ListItem className={`bg-primary-2 text-white`}>Dashboard</ListItem>
                </Link>
                <Accordion
                    open={accordionOpen === 1}

                >
                    <ListItem className="p-0" selected={accordionOpen === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <BiTask className="h-5 w-5"/>
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Seleksi
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <RiGhost2Fill strokeWidth={3} className="h-3 w-5"/>
                                </ListItemPrefix>
                                Tes potensial
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <RiGhost2Fill strokeWidth={3} className="h-3 w-5"/>
                                </ListItemPrefix>
                                Wawancara
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
            </List>

        </aside>

    );
}

