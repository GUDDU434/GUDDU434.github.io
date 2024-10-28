import {
  Box,
  Button,
  IconButton,
  Image,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import "./contact.css";



const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("gudduali93@yahoo.com");
  const { hasCopy, onCopyMo } = useClipboard("+91 8169269136");
  const [state, handleSubmit, ResetFunction] = useForm("mzbqrgzo");
  const toast = useToast()
  if (state.succeeded) {
    toast({
      title: 'Message Send Sucessfully',
      description: "Your message has been sent successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    ResetFunction()
  }
  return (
    <>
      <Box
        name="contact"
        id="contact"
        w={{ base: "100%", md: "100%", lg: "100%" }}
        m={{
          base: "90px auto 0 auto",
          md: "90px auto 0 auto",
          lg: "100px auto 0 auto",
        }}
      >
        <Text
          fontWeight={"500"}
          fontSize={{ base: "30px", md: "30px", lg: "50px" }}
          mb={"15px"}
        >
          Get in Touch Contact me
        </Text>
        <Box
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("gray.100", "blue.800")}
          borderRadius={"10px"}
          p={"20px"}
          w={{ base: "90%", md: "85%", lg: "80%" }}
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          m={"auto"}
          gap={"20px"}
        >
          <Box>
            <Image
              src={
                "https://debobrota-haldar.netlify.app/static/media/contact.ec03def613ffe59fb4ce334fcc107c2e.svg"
              }
            />
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <Stack>
              <Link
                id="contact-github"
                href="https://github.com/GUDDU434"
                target={"blank"}
              >
                <IconButton fontSize="3xl" icon={<BsGithub />} isRound />
              </Link>

              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/guddu-ali-00697a119/"
                target={"blank"}
              >
                <IconButton fontSize="2xl" icon={<BsLinkedin />} isRound />
              </Link>

              <Text id="contact-email" label="gudduali93@yahoo.com">
                {" "}
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    fontSize="3xl"
                    icon={<MdEmail />}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>
              </Text>
              <Text id="contact-phone" label="+91 8169269136">
                <Tooltip
                  label={hasCopy ? "Mobile no Copied!" : "+91 8169269136"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    //  id="contact-phone"
                    fontSize="3xl"
                    icon={<MdPhone />}
                    onClick={onCopyMo}
                    isRound
                  />
                </Tooltip>
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={3}
                w={{ base: "100%", md: "95%", lg: "125%" }}
                borderWidth={"1px"}
                p={"15px"}
                color={"black"}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue("white", "white")}
                borderRadius={"10px"}
              >
                <Input
                  placeholder="Name.."
                  borderColor={"gray.800"}
                  type="text"
                  // value={name}
                  name="name"
                  id="name"
                  _hover={{ border: "1px solid blue.500" }}
                  // onChange={(e) => {
                  //   setName(e.target.value);
                  // }}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <Input
                  _hover={{ border: "1px solid blue.500" }}
                  placeholder="Email.."
                  // value={email}
                  type="email"
                  name="email"
                  borderColor={"gray.800"}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  id="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Textarea
                  _hover={{ border: "1px solid blue.500" }}
                  placeholder="Messages.."
                  height={"120px"}
                  border={"1px solid black"}
                  // value={message}
                  name="message"
                  // onChange={(e) => {
                  //   setMessage(e.target.value);
                  // }}

                  id="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  type="submit"
                  border={"1px solid black"}
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
// color={useColorModeValue('black',"black")}
