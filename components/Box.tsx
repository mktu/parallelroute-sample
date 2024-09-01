import { cva, type VariantProps } from "class-variance-authority"
import { FC } from "react"

const boxVariants = cva(
    'w-full h-[100px] p-4',
    {
        variants: {
            color: {
                blue: 'bg-blue-100',
                red: 'bg-red-100',
                gray: 'bg-gray-100',
            }
        },
        defaultVariants: {
            color: 'blue'
        },
    }
)

type Props = {
    children: React.ReactNode
} & VariantProps<typeof boxVariants>

const Box: FC<Props> = ({ color, children }) => {
    return (
        <div className={boxVariants({ color })}>
            {children}
        </div>
    )
}
export default Box