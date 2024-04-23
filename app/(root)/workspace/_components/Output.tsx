import React from 'react';
import { Box, Button, Text, useToast, useBreakpointValue } from "@chakra-ui/react";
import axios from 'axios';


interface OutputProps {
  editorRef: React.MutableRefObject<any>;
  language: string;
}

// Define Output component with forwardRef
const Output = React.forwardRef<any, OutputProps>((props, ref) => {
  const { editorRef, language } = props;
  const toast = useToast();
  const [output, setOutput] = React.useState<string[] | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const response = await axios.post("/api/executeCode", { language, sourceCode });
      const result = response.data;
      setOutput(result.output.split("\n"));

      // Extract CPU time and memory usage from the response
      const cpuTime = parseFloat(result.cpuTime).toFixed(2);
      const memoryUsage = parseInt(result.memory);

      // Display CPU time and memory usage in a toast
      toast({
        title: "Execution Info",
        description: (
          <div>
            <p>CPU Time: {cpuTime} ms</p>
            <p>Memory Usage: {memoryUsage} KB</p>
          </div>
        ),
        status: "info",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } catch (error: any) {
      console.error(error);
      const errorMessage = error.response?.data?.error || "Unable to run code";
      toast({
        title: "An error occurred.",
        description: errorMessage,
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Use useBreakpointValue to determine the width of the Box
  const width = useBreakpointValue({ base: "100%", md: "50%" });

  // Assign runCode to the ref for access from the parent component
  React.useImperativeHandle(ref, () => ({
    runCode,
  }));

  return (
    <Box w={width}>
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#E2E8F0"} // Adjust border color for light theme
        bg="#EDF2F7" // Adjust background color for light theme
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
});

export default Output;
