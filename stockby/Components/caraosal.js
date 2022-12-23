import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MyCarousal ({data}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <>
        <Box  width={{base : '95%', md : '90%'}} m='auto' mt={{base :'10px'}} >
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {data.length > 0 && data.map((elem)=>{
                    return <Box key={elem.title} w={{base : '95%'}} m='auto'>
                        <Image src={elem.urlToImage} m='auto' draggable="true" width={{base :'150px', md : '200px', lg: '300px'}} h={{base :'80px', md: '120px', lg: '160px'}}/>
                        <Text align='center' fontSize={{base: '13px', md: '15px'}} fontWeight='550' color={"black"} mt='5px'>{elem.title}</Text>
                        {/* <Text fontSize={{base :'12px', md: '14px'}} m='auto' align='center' mt='5px'>{elem.title}</Text> */}
                    </Box>
                })}
            </Carousel>
        </Box>
        </>
    )
}