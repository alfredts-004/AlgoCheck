import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "@/constants";

interface LanguageSelectorProps {
  language: string;
  onSelect: (lang: string) => void;
}

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu>
        <MenuButton as={Button} variant="outline" colorScheme="blue">
          {language}
        </MenuButton>
        <MenuList bg="white">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : "gray.700"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.100",
              }}  
              onClick={() => onSelect(lang)}
            >
              <Text>{lang}</Text>
              <Text color="gray.500" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
