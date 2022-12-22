import { useMediaQuery } from '@chakra-ui/react'

export const useMedia = () => {

    const [smallScreen] = useMediaQuery('(min-width: 480px)')
    const [mediumScreen] = useMediaQuery('(min-width: 800px)')
    const [largeScreen] = useMediaQuery('(min-width: 3000px)')
    /* console.log("large",smallScreen)
    console.log("mid",mediumScreen)
    console.log("small",smallScreen) */

    return { smallScreen,mediumScreen,largeScreen }
}