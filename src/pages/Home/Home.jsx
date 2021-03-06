import React from "react";
import { Stack, VStack, Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import "./style.css";

import TextAnimation from '../../components/text/TextAnimation';


function Home ({onClickButton}) {

          return (

            <Flex  onClick={ onClickButton} data-testid='homeText'
                w={'full'}
                h={'100vh'}
                bgGradient={[
                  'linear(to-tr, pink,300, teal.300, green.200)',
                  'linear(to-t, blue.200, teal.500)',
                  'linear(to-b, pink.500, purple.300, teal.300)',
                ]}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>


            <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
              
              <TextAnimation data-testid='homeText'/>
              <Stack direction='row' >

              <Box className="btn-font" data-testid='homeButton'
                as='button'
                height='50px'
                width='200px'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='2px'
                px='8px'
                borderRadius='15px'
                fontWeight='semibold'
                bg='transparent'
                borderColor='#ccd0d5'
                color='white'
                fontSize='16px'
                _hover={{ bg: '#AD0F5B' }}
                _active={{
                  bg: '#dddfe2',
                  transform: 'scale(0.98)',
                  borderColor: '#bec3c9',
                }}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
              >

                <a href="/list"> VIEW SEEDLINGS</a>

              </Box>
              </Stack>
            </VStack>
        </Flex>
        );
}
export default Home;
