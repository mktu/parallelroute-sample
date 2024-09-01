'use client'
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PathName: FC<{ path: string }> = ({ path }) => {
    const pathname = usePathname()
    return (
        <div className='flex items-center w-[250px]'>
            <Button asChild variant='link' size='sm'>
                <Link href={path}>{path}</Link>
            </Button>
            {path === pathname && <span className='pl-2'>{'👈 Current Path'}</span>}
        </div>
    )
}

const Links: FC = () => {
    return (
        <section className='flex flex-col items-start border rounded border-input p-4'>
            <h3 className='font-semibold text-lg'>Links</h3>
            <PathName path='/' />
            <PathName path='/groups' />
            <PathName path='/users' />
        </section>
    )
}

export default Links