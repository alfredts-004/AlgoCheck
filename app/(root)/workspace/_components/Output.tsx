"use client"

import React from 'react';
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import axios from 'axios';

interface OutputProps {
  editorRef: React.MutableRefObject<any>; // Adjust type as needed
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
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
      const result = response.data; // Assuming the result is directly available in the response data
      setOutput(result.output.split("\n"));
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

  return (
    <Box w="50%">
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
        borderColor={isError ? "red.500" : "#333"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
