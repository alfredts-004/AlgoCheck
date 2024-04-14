"use client"

import { ChangeEvent, useRef, useState } from "react";
import { Box, HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, CodeSnippets } from "@/constants";
import Output from "./Output";

interface CodeEditorProps {}

const CodeEditor: React.FC<CodeEditorProps> = () => {
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("C");

  const editorRef = useRef<any>(null);

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue((CODE_SNIPPETS as CodeSnippets)[language]); // Type assertion to CodeSnippets
  };

  const handleEditorChange = (event: any) => {
    setValue(event.target.value || "");
  };

  // Determine the layout based on the screen size
  const isVerticalLayout = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isVerticalLayout ? (
        <VStack spacing={4}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Box w="100%">
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]} // Type assertion to CodeSnippets
              onMount={(editor) => {
                editorRef.current = editor;
                editor.focus();
              }}
              value={value}
              onChange={handleEditorChange} // Pass the custom onChange handler
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </VStack>
      ) : (
        <HStack spacing={4}>
          <Box w="50%">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]} // Type assertion to CodeSnippets
              onMount={(editor) => {
                editorRef.current = editor;
                editor.focus();
              }}
              value={value}
              onChange={handleEditorChange} // Pass the custom onChange handler
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </HStack>
      )}
    </Box>
  );
};

export default CodeEditor;
