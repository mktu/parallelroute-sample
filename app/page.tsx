import Box from "@/components/Box";
import CurrentFilePathRegister from "@/components/CurrentFilePathRegister";

export default function Page() {
  return (
    <Box color='gray'>
      <CurrentFilePathRegister path='/page.tsx' />
    </Box>
  )
}