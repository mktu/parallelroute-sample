'use client'

import { usePageInfoContext } from "@/context/PageInfoContext";
import { PathList } from "@/types";
import { FC, useEffect } from "react";

type Props = {
    path: PathList
}

const splitPathToComponents = (path: string): React.ReactNode[] => {
    const parts = path.split('/').filter(Boolean);
    const components = parts.map((part, index) => {
        const isLast = index === parts.length - 1;
        return (
            <span key={index} className={part === 'default.tsx' ? 'font-semibold' : ''}>
                {isLast ? `/${part}` : `/${part}`}
            </span>
        );
    });

    return components;
};

const CurrentFilePathRegister: FC<Props> = ({
    path
}) => {
    const { addPageInfo, removePageInfo } = usePageInfoContext()
    useEffect(() => {
        addPageInfo(path);
        return () => {
            removePageInfo(path);
        }
    }, [addPageInfo, path, removePageInfo])
    return splitPathToComponents(path);
}

export default CurrentFilePathRegister