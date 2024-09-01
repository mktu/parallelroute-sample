import Box from "@/components/Box";
import CurrentFilePathRegister from "@/components/CurrentFilePathRegister";

export default function Default() {
    return (
        <Box color='gray'>
            <CurrentFilePathRegister path='/default.tsx' />
        </Box>
    )
}