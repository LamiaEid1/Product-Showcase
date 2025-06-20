import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

// Navigation bar component with theme toggle and create product link
const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4}>
			{/* Responsive navbar layout */}
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column", // Stack vertically on mobile
					sm: "row",      // Side by side on larger screens
				}}
			>
				{/* Brand/logo with gradient text */}
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>

				{/* Action buttons - create product and theme toggle */}
				<HStack spacing={2} alignItems={"center"}>
					{/* Create product button */}
					<Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
					{/* Theme toggle button - shows moon in light mode, sun in dark mode */}
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;
