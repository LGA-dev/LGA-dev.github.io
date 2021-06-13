import { Box, Center, Flex, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaCaretSquareDown, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link as ReactLink } from "react-router-dom";

const ProfileIcon = ({url, icon, iconDescription}) => {
  return (
    <Link
      width={24}
      href={url}
    >
      <Center flexDirection="column">
        {/* Square container for Icon */}
        <Box
          p={3}
          borderRadius="lg"
          backgroundColor="primary.base"
        >
          <Icon
            boxSize={12}
            as={icon}
          />
        </Box>
        {/* Icon name */}
        <Text
          mt={1}
          fontWeight="600"
        >
          {iconDescription}
        </Text>
      </Center>
    </Link>
  );
}

export default ProfileIcon;