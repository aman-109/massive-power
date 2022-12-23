import { Box, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
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
                  <Text _hover={{ cursor : 'pointer'}}>+91 9533952918</Text>
                  <Text _hover={{ cursor : 'pointer'}}>+91 9370455033 </Text>
                  <Text _hover={{ cursor : 'pointer'}}>+91 8390345989</Text>
                  <Text _hover={{ cursor : 'pointer'}}>+91 0000000000</Text>
                  <Box display='flex' gap='30px' fontSize='30px' mt='20px'>
                    < BsFacebook></BsFacebook>
                    <BsInstagram/>
                  </Box>
                </Box>
            </Box>
            <Box>
                <Text color='black'>QUICK LINKS</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='black' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}><Link href="https://www.linkedin.com/in/saurabh-kumar-04b00b23a/">Saurabh Kr.</Link></ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}><Link href="https://www.linkedin.com/in/prasad-karde/">Prasad Karde</Link></ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}><Link href="https://www.linkedin.com/in/amanmate109/">Aman Mate</Link></ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}><Link href="https://www.linkedin.com/in/saurabh-kumar-04b00b23a/">SK</Link></ListItem>
                   
                </UnorderedList>
            </Box>
            <Box>
                <Text color='black'>CUSTOMER INFO</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='black' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}>AngleBazaar</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>OneExchange</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>StockBy</ListItem>
                    
                </UnorderedList>
            </Box>
            <Box>
                <Text color='black'>CATEGORIES</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='black' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{ cursor : 'pointer'}}>STOCKS</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>INTRA DAY</ListItem>
                    <ListItem _hover={{ cursor : 'pointer'}}>CRYPTO CURRENCY</ListItem>
                    
                </UnorderedList>
            </Box>
        </SimpleGrid>
        </Box>
        </>
    );
};