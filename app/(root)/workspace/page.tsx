import { Box } from "@chakra-ui/react";
import CodeEditor from "./_components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#EDF2F7" color="gray.800" px={6} py={8}> {/* Adjust background color and text color */}
      <CodeEditor />
    </Box>
  );
}

export default App;
