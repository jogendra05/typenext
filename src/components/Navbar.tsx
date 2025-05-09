"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({className}:{className? : String}) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem item="Home" active={active} setActive={setActive}>
                </MenuItem>
            </Link>
            <MenuItem item="Our Courses" active={active} setActive={setActive}>
            <div className='flex flex-col space-y-4 text-sm'> 
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>     
            <HoveredLink href="/courses">Advance Composition</HoveredLink>     
            <HoveredLink href="/courses">Song Writing</HoveredLink>     
            <HoveredLink href="/courses">Music Production</HoveredLink>
            </div> 
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem item="Contact Us" active={active} setActive={setActive}>
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar