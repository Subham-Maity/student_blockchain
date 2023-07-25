interface Props {
    setStudentData: (users: any) => void;
    onClose: (value: boolean) => void;
}

import {FaTimes} from "react-icons/fa";

import React, {useRef} from "react";

const InputStudent = ({setStudentData, onClose}: Props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Regular expression to match only alphabets and spaces
        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(value)) {
            // If the input doesn't match the regex, clear the value
            event.target.value = "";
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formValues: { [key: string]: string } = {};

        // Collect all the form field values
        formData.forEach((value, key) => {
            formValues[key] = value as string;
        });
        // Check if any value is empty, if so, return
        for (const value of Object.values(formValues)) {
            if (value.trim() === "") {
                return;
            }
        }
        setStudentData((prevData: any) => [...prevData, formValues]);

    };
    return (
        <form
            onSubmit={handleSubmit}
            className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 "
        >
            <FaTimes
                onClick={() => onClose(false)}
                className="ml-auto cursor-pointer"
            />
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                    <label
                        htmlFor="studentName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Student Name
                    </label>
                    <input
                        type="text"
                        name="studentName"
                        id="studentName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Student Name"
                        required
                        onChange={handleNameChange}
                    />
                </div>

                <div>
                    <label htmlFor="studentAge"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Student Age
                    </label>
                    <input name="studentAge" type="number" id="studentAge"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Age" required/>
                </div>

                <div>
                    <label htmlFor="studentDOB"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Student Date of Birth
                    </label>
                    <input name="studentDOB" type="date" id="studentDOB"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Date of Birth" required/>

                </div>

                <div>
                    <label htmlFor="studentClass"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Student Class
                    </label>

                    <input name="studentClass" type="number" id="studentClass"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Class" required/>
                </div>

                <div>
                    <label htmlFor="fatherName"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Father Name
                    </label>
                    <input name="fatherName" type="text" id="fatherName"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Father’s Name" onChange={handleNameChange} required/>

                </div>

                <div>
                    <label htmlFor="homeAddress"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Home Address
                    </label>
                    <input name="homeAddress" type="text" id="homeAddress"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Home Address" required/>

                </div>

                <div>

                    <label htmlFor="phoneNumber"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone Number
                    </label>
                    <input name="phoneNumber" type="number" id="phoneNumber"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Contact Details" required/>

                </div>

                <div>
                    <label htmlFor="dateOfAdmission"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Date of Admission
                    </label>
                    <input name="dateOfAdmission" type="date" id="dateOfAdmission"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Date of Admission" required/>

                </div>


            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};

export default InputStudent;