import React from "react";

import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Input,
	Text,
	Divider,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function CategoryDrawer({ attributes }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Open
			</Button>
			<Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Hello User!</DrawerHeader>

					<DrawerBody>
						<Text fontWeight={800}>Shop By Artisan</Text>
						<Text>Dabls' MBAD African Bead Museum</Text>
						<Text>African Futurist Collective</Text>
						<Text>Cactus Harmony</Text>
						<Text>Visual Noise</Text>
						<Text>Xclusive Virgin Hair</Text>
						<Text>Akoma</Text>
						<Text>Willow Run Acres</Text>
						<Text>Olive Mode Boutique</Text>
						<Divider />
						<Text fontWeight={800}>Shop By Product Category</Text>
						<Text>Clothing</Text>
						<Text>Jewelry</Text>
						<Text>Accessories</Text>
						<Text>Agriculture</Text>
						<Text>Education</Text>
						<Text>Olive Mode Boutique</Text>

						<Divider />
						<Text fontWeight={800}>Shop By Store Attributes</Text>
						{attributes && attributes.map((principle) => <Text key={`{principle.name}-opt`}>{principle.name}</Text>)}
					</DrawerBody>
					{/* 
					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter> */}
				</DrawerContent>
			</Drawer>
		</>
	);
}
