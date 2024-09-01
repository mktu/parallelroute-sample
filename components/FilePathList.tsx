'use client'
import { FC } from "react";
import FilePath from "./FilePath";

const FilePathList: FC = () => {
    return (
        <section className='p-4 flex flex-col gap-2 border rounded border-input'>
            <h3 className='font-semibold text-lg'>Files</h3>
            <FilePath path='/layout.tsx' level={0} />
            <FilePath path='/default.tsx' level={0} />
            <FilePath path='/page.tsx' level={0} />
            <FilePath path='/@left/default.tsx' level={1} />
            <FilePath path='/@left/page.tsx' level={1} />
            <FilePath path='/@left/groups/page.tsx' level={2} />
            <FilePath path='/@right/default.tsx' level={1} />
            <FilePath path='/@right/page.tsx' level={1} />
            <FilePath path='/@right/users/page.tsx' level={2} />
        </section>
    );
}

export default FilePathList