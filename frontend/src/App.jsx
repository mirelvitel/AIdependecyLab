// src/App.jsx
import React, { useState } from 'react';
import './index.css';
import CodeEditor from './components/editor/CodeEditor';
import ChatPanel from './components/chat/ChatPanel';
import TasksPanel from './components/tasks/TasksPanel';
import IntroScreen from './components/intro/IntroScreen'; // Import our new component

const App = () => {
    // Track whether the user has started or not
    const [hasStarted, setHasStarted] = useState(false);

    // Panel for tasks or chat
    const [currentPanel, setCurrentPanel] = useState(null);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

    const togglePanel = (panel) => {
        setCurrentPanel(currentPanel === panel ? null : panel);
    };

    const editorWidthClass = currentPanel ? "w-3/4" : "w-full";

    // If user hasn't started, show the IntroScreen
    if (!hasStarted) {
        return <IntroScreen onStart={() => setHasStarted(true)} />;
    }

    // Once user has clicked "Start", we render the main UI
    return (
        <div className="App bg-gray-100 min-h-screen flex flex-col relative">
            <header className="bg-blue-600 text-white py-4 shadow-md">
                <h1 className="text-3xl font-bold text-center">AIdependencyLab</h1>
            </header>

            <main className="flex flex-1 relative">
                {/* Left side: Tasks panel */}
                {currentPanel === "task" && (
                    <div className="w-1/4 border-r border-gray-300">
                        <TasksPanel
                            currentTaskIndex={currentTaskIndex}
                            setCurrentTaskIndex={setCurrentTaskIndex}
                        />
                    </div>
                )}

                {/* Code Editor */}
                <div className={editorWidthClass}>
                    <CodeEditor />
                </div>

                {/* Right side: Chat panel */}
                {currentPanel === "chat" && (
                    <div className="w-1/4 border-l border-gray-300">
                        <ChatPanel />
                    </div>
                )}

                {/* Left toggle button (for Tasks) */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
                    <button
                        onClick={() => togglePanel("task")}
                        className="flex items-center bg-green-600 text-white py-2 px-4 rounded-r focus:outline-none"
                    >
                        {currentPanel === "task" ? (
                            <span>&lt;</span>
                        ) : (
                            <>
                                <span>Tasks</span>
                                <span className="ml-2">&gt;</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Right toggle button (for Chat) */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
                    <button
                        onClick={() => togglePanel("chat")}
                        className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-l focus:outline-none"
                    >
                        {currentPanel === "chat" ? (
                            <span>&gt;</span>
                        ) : (
                            <>
                                <span className="mr-2">&lt;</span>
                                <span>ChatGPT</span>
                            </>
                        )}
                    </button>
                </div>
            </main>

            <footer className="text-center text-gray-600 py-4">
                &copy; {new Date().getFullYear()} AIdependencyLab
            </footer>
        </div>
    );
};

export default App;
