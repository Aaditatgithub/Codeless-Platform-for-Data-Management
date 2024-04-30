import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { createObjectApi } from '../api/ObjectApiServices';
import { createTemplateApi } from '../api/TemplateApiServices';

const DataProvision = () => {
    const [templateJSON, setTemplateJSON] = useState(null);
    const [ObjectJsons, setObjectJsons] = useState([]);

    const [displayTemplateJSON, setDisplayTemplateJSON] = useState(false);
    const [displayObjectJSON, setDisplayObjectJSON] = useState(false);
    // State for the popup
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        // Set a timeout to close the popup after 5 seconds
        const timeout = setTimeout(() => {
            setShowPopup(false);
        }, 5000);

        // Clear the timeout when the component is unmounted or the popup is closed
        return () => clearTimeout(timeout);
    }, []);

    const handlePopupOk = () => {
        setShowPopup(false);
    };

    const sendTemplateJSONToBackend = async () => {
        try {
            const response = await createTemplateApi(templateJSON)
            console.log('Successfully sent JSON to backend:', response.data);
            // Handle the response as needed
        } catch (error) {
            console.error('Error sending JSON to backend:', error);
            // Handle the error as needed
        }
    };

    const sendObjectJSONsToBackend = async () => {
        if (!ObjectJsons || ObjectJsons.length === 0) {
            console.log("No objects to send.");
            return;
        }

        for (const object of ObjectJsons) {
            try {
                const response = await createObjectApi(object); // Assuming createObjectApi can accept an object as a parameter
                console.log('Successfully sent object to backend:', response.data);
                // Handle the response as needed
            } catch (error) {
                console.error('Error sending object to backend:', error);
                // Handle the error as needed
            }
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const csvData = event.target.result;
            const templateName = file.name.replace(/\.[^/.]+$/, "");
            // Parse CSV data into an array of objects
            const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true });
            // Transform each row into the desired JSON format
            const objectsArray = parsedData.data.map((row, index) => ({
                template_name: templateName,
                object_name: `Obj${index + 1}`, // Assuming object names are sequential
                attributes: Object.entries(row).map(([attribute_name, attribute_value]) => ({
                    attribute_name,
                    attribute_value,
                })),
            }));
            // Store the array of objects in the ObjectJsons state
            setObjectJsons(objectsArray);
            setDisplayObjectJSON(true);
            // Set displayObjectJSON to true to indicate that objects are ready to be sent
            setTemplateJSON(convertCSVToTemplate(csvData, templateName));
        };
        reader.readAsText(file);
    };

    const convertCSVToTemplate = (csvData, templateName) => {
        const parsedData = Papa.parse(csvData, { header: true });
        const attributes = Object.keys(parsedData.data[0]).map(attribute => ({
            attribute_type: isNaN(parsedData.data[0][attribute]) ? "string" : Number.isInteger(parseFloat(parsedData.data[0][attribute])) ? "int" : "float",
            attribute_name: attribute
        }));

        return {
            template_name: templateName,
            attributes: attributes
        };
    };

    const handleCreateTemplateJSON = () => {
        if (!templateJSON) {
            return;
        }
        setDisplayTemplateJSON(true);
    };

    return (
        <div >
            {/* Popup */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Welcome to Data Provision!</h2>
                        <p>To get started with features like analytics, updating templates and more, you'd have provide data on which you can to work, use the UPLOAD CSV buttons for the same</p>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer mt-4" onClick={handlePopupOk}>OK</button>
                    </div>
                </div>
            )}

            <div className="flex-grow p-6"> {/* Content */}
                {/* Container for buttons */}
                <div className="flex items-center justify-start space-x-2 ml-5">
                    <button
                        className="btn bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer"
                        onClick={sendTemplateJSONToBackend}
                    > Parse Template Json
                    </button>

                    <button
                        className="btn bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer"
                        onClick={sendObjectJSONsToBackend}
                    > Parse Object Jsons
                    </button>

                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer" onClick={handleCreateTemplateJSON}>
                        <span>Create Template JSON</span>
                    </button>

                    <div className="relative">
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            accept=".csv"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            id="fileInput"
                        />
                        <label
                            htmlFor="fileInput"
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md cursor-pointer"
                        >
                            <svg className="w-4 h-4 fill-current opacity-50 shrink-0 inline-block mr-2" viewBox="0   0   16   16">
                                <path d="M15   7H9V1c0-.6-.4-1-1-1S7 .4   7   1v6H1c-.6   0-1 .4-1   1s.4   1   1   1h6v6c0 .6.4   1   1   1s1-.4   1-1V9h6c.6   0   1-.4   1-1s-.4-1-1-1z" />
                            </svg>
                            <span>Upload CSV</span>
                        </label>
                    </div>
                </div>
                 {/* Left partition for Template JSON */}
            <div className="flex-grow p-6" style={{ flexBasis: '50%' }}> {/* Content */}
                {/* Display generated Template JSON */}
                {displayTemplateJSON && (
                    <div className="mt-8 border rounded-md p-4 bg-gray-100">
                        <h3 className="text-lg font-semibold mb-2">Generated Template JSON:</h3>
                        <pre className="overflow-auto">{JSON.stringify(templateJSON, null, 2)}</pre>
                    </div>
                )}
            </div>

                {/* Right partition for Object JSON */}
                <div className="flex-grow p-6" style={{ flexBasis: '50%' }}> {/* Content */}
                    {/* Display generated Object JSON */}
                    {displayObjectJSON && (
                        <div className="mt-8 border rounded-md p-4 bg-gray-100">
                            <h3 className="text-lg font-semibold mb-2">Generated Object JSONs:</h3>
                            <div>
                                {ObjectJsons.map((object, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="mb-2">
                                            <h5 className="text-sm font-medium mb-1">Full JSON:</h5>
                                            <pre className="overflow-auto">{JSON.stringify(object, null, 2)}</pre>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default DataProvision;
