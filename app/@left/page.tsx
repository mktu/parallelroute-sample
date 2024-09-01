import Box from "@/components/Box";
import CurrentFilePathRegister from "@/components/CurrentFilePathRegister";

export default function Page() {
    return (
        <Box color='red'>
            <CurrentFilePathRegister path='/@left/page.tsx' />
        </Box>
    )
}