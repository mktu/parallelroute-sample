import Box from "@/components/Box";
import CurrentFilePathRegister from "@/components/CurrentFilePathRegister";

export default function Default() {
    return (
        <Box color='red'>
            <CurrentFilePathRegister path='/@left/default.tsx' />
        </Box>
    )
}