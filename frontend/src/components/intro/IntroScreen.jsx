// src/components/intro/IntroScreen.jsx

import React, { useState } from 'react';

const IntroScreen = ({ onStart }) => {
    // Example form data (anonymous)
    const [formData, setFormData] = useState({
        experience: '',
        studyYear: '',
        // ... add more fields if needed
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // When clicking “Start,” we pass the data up (or just call onStart if you don’t need data)
    const handleStart = () => {
        // Optionally, do some validation or data handling here
        onStart(formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md p-8 w-3/4 grid grid-cols-2 gap-8 rounded">
                {/* Left Column: Rules/Instructions */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        Welcome to the AIdependencyLab Test
                    </h2>
                    <p className="mb-4">
                        This test is designed to assess your ability to solve programming tasks
                        with and without AI assistance. Please read the following points:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>You will have 10 exercises to complete.</li>
                        <li>Half of them will be AI-assisted, half without AI.</li>
                        <li>Your code submissions are logged for analysis.</li>
                        <li>Please read each task carefully and follow the instructions.</li>
                        <li>You can use the built-in AI chat for guidance (on AI-assisted tasks).</li>
                    </ul>
                    <p>
                        When you are ready, please fill out the form on the right and click
                        <strong> Start</strong> to begin. Good luck!
                    </p>
                </div>

                {/* Right Column: Anonymous Form */}
                <div>
                    <h3 className="text-xl font-semibold mb-2"></h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="experience" className="block font-medium mb-1">
                                Programming Experience:
                            </label>
                            <select
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select experience level</option>
                                <option value="beginner">Beginner (1–2 semesters)</option>
                                <option value="intermediate">Intermediate (2–4 semesters)</option>
                                <option value="advanced">Advanced (4+ semesters)</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="studyYear" className="block font-medium mb-1">
                                Current Study Year:
                            </label>
                            <select
                                id="studyYear"
                                name="studyYear"
                                value={formData.studyYear}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            >
                                <option value="">Select year</option>
                                <option value="1st">1st Year</option>
                                <option value="2nd">2nd Year</option>
                                <option value="3rd">3rd Year</option>
                            </select>
                        </div>

                        {/* Add more anonymous fields as needed */}
                    </form>

                    {/* Start Button */}
                    <button
                        onClick={handleStart}
                        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IntroScreen;
