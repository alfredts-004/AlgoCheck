"use client";

import { useRef, useState } from "react";
import { Box, HStack, Button, VStack, useBreakpointValue } from "@chakra-ui/react";
import Editor, { useMonaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, CodeSnippets } from "@/constants";
import Output from "./Output";

interface CodeEditorProps {}

const CodeEditor: React.FC<CodeEditorProps> = () => {
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("C");
  const editorRef = useRef<any>(null);
  const outputRef = useRef<any>(null);

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue((CODE_SNIPPETS as CodeSnippets)[language]);
  };

  const handleEditorChange = (
    newValue: string | undefined,
    event?: monaco.editor.IModelContentChangedEvent
  ) => {
    // Use the new value in your state update
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };
  


  // Determine the layout based on the screen size
  const isVerticalLayout = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isVerticalLayout ? (
        // Vertical layout for mobile screens
        <VStack spacing={8}>
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh" // Adjust the height for a better view in vertical layout
            theme="vs-light"
            language={language}
            defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]}
            onMount={(editor) => {
              editorRef.current = editor;
              editor.focus();
            }}
            value={value}
            onChange={handleEditorChange}
          />
          <Output
            ref={outputRef}
            editorRef={editorRef}
            language={language}
          />
        </VStack>
      ) : (
        // Horizontal layout for larger screens
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
              theme="vs-light"
              language={language}
              defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]}
              onMount={(editor) => {
                editorRef.current = editor;
                editor.focus();
              }}
              value={value}
              onChange={handleEditorChange}
            />
          </Box>
          <Output
            ref={outputRef}
            editorRef={editorRef}
            language={language}
          />
        </HStack>
      )}
    </Box>
  );
};

export default CodeEditor;
