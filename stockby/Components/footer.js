import { Box, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import {BsFacebook,BsInstagram} from 'react-icons/bs'
export default function Footer ( ) {
    return (
        <>
        <Box className="FooterMainBox" bg='lightblue' color='white' padding='10px'>
        <SimpleGrid className="FooterSimpleGrid" columns={[2,2,4]} w={{base : '90%', md : '85%'}} rowGap='40px' m='auto'>
            <Box>
                <Text color='black'>CONTACT INFO</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <Box color='black' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                  <Text _hover={{ cursor : 'pointer'}}>TEXT</Text>
                  <Text _hover={{ cursor : 'pointer'}}>TEXT</Text>
                  <Text _hover={{ cursor : 'pointer'}}>TEXT</Text>
                  <Box display='flex' gap='30px' fontSize='30px' mt='20px'>
                    < BsFacebook></BsFacebook>
                    <BsInstagram/>
                  </Box>
                </Box>
            </Box>
            <Box>
                <Text color='black'>QUICK LINKS</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                   
                </UnorderedList>
            </Box>
            <Box>
                <Text color='black'>CUSTOMER INFO</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                    
                </UnorderedList>
            </Box>
            <Box>
                <Text color='black'>CATEGORIES</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>TEXT</ListItem>
                    
                </UnorderedList>
            </Box>
        </SimpleGrid>
        </Box>
        </>
    );
};