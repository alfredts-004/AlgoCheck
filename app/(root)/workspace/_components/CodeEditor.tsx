"use client";

import { useRef, useState } from "react";
import { Box, HStack, Button, useBreakpointValue } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, CodeSnippets } from "@/constants";
import Output from "./Output";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";

interface CodeEditorProps {}

const CodeEditor: React.FC<CodeEditorProps> = () => {
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("C");
  const [tabValue, setTabValue] = useState<string>("Editor");
  const editorRef = useRef<any>(null);

  // Create a reference for the Output component
  const outputRef = useRef<any>(null);

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue((CODE_SNIPPETS as CodeSnippets)[language]);
  };

  const handleEditorChange = (event: any) => {
    setValue(event.target.value || "");
  };

  const handleRunClick = () => {
    // Switch to Output tab
    setTabValue("Output");
    
    // Call the runCode function in the Output component
    if (outputRef.current) {
      outputRef.current.runCode();
    }
  };

  // Determine the layout based on the screen size
  const isVerticalLayout = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isVerticalLayout ? (
        <>
          <HStack spacing={250} marginBottom={4}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Button onClick={handleRunClick} colorScheme="blue">
              Run
            </Button>
          </HStack>
          <Tabs value={tabValue} onValueChange={setTabValue} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Editor">Editor</TabsTrigger>
              <TabsTrigger value="Output">Output</TabsTrigger>
            </TabsList>
            <TabsContent value="Editor">
              <Box w="100%">
                <Editor
                  options={{
                    minimap: {
                      enabled: false,
                    },
                  }}
                  height="75vh"
                  theme="vs-light" // Use white (light) theme for the editor
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
            </TabsContent>

            <TabsContent value="Output">
              <Output
                ref={outputRef}
                editorRef={editorRef}
                language={language}
              />
            </TabsContent>
          </Tabs>
        </>
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
              theme="vs-light" // Use white (light) theme for the editor
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
