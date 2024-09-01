'use client'
import { PathList } from "@/types";
import { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";

type ContextType = {
    pageInfo: PathList[];
    addPageInfo: (path: PathList) => void;
    removePageInfo: (path: PathList) => void;
}

const context = createContext<ContextType>({
    pageInfo: [],
    addPageInfo: () => { },
    removePageInfo: () => { },
});

export const usePageInfoContext = () => useContext(context)


export const PageInfoProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [pageInfo, setPageInfoBase] = useState<ContextType['pageInfo']>([]);
    const addPageInfo = useCallback((value: PathList) => {
        setPageInfoBase((prev) => [...prev, value]);
    }, []);
    const removePageInfo = useCallback((value: PathList) => {
        setPageInfoBase((prev) => prev.filter((v) => v !== value));
    }, []);
    return (
        <context.Provider value={{ pageInfo, addPageInfo, removePageInfo }}>
            {children}
        </context.Provider>
    )
}