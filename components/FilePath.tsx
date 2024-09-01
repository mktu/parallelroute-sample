import { usePageInfoContext } from "@/context/PageInfoContext"
import { cn } from "@/lib/utils"
import { PathList } from "@/types"
import { hash } from "crypto"
import { FC, use } from "react"

type Props = {
    path: PathList,
    level: number
}

const FilePath: FC<Props> = ({ path, level }) => {
    const { pageInfo } = usePageInfoContext()
    const hasHighlight = pageInfo.includes(path)
    return (
        <div className={cn('flex items-center', hasHighlight && 'bg-purple-100',
            level === 1 && 'pl-4', level === 2 && 'pl-8'
        )}>
            {path}
        </div>
    )
}
export default FilePath