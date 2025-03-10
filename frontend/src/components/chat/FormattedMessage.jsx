// src/components/chat/FormattedMessage.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FormattedMessage = ({ text }) => {
    // If there are no code delimiters, render as plain text.
    if (!text.includes('```')) {
        return <p>{text}</p>;
    }

    const parts = text.split(/```/);
    return (
        <>
            {parts.map((part, index) => {
                // Odd indices are code blocks.
                if (index % 2 === 1) {
                    // Optionally, treat the first line as a language specifier.
                    const lines = part.split('\n');
                    let language = '';
                    if (lines.length > 1 && lines[0].trim() !== '') {
                        language = lines[0].trim();
                        part = lines.slice(1).join('\n');
                    }
                    return (
                        <SyntaxHighlighter language={language || 'text'} style={coy} key={index}>
                            {part}
                        </SyntaxHighlighter>
                    );
                } else {
                    // Even indices: normal text.
                    return <p key={index}>{part}</p>;
                }
            })}
        </>
    );
};

export default FormattedMessage;
