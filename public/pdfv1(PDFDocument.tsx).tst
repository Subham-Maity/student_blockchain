import React from 'react';
import StudentTable from "@/components/table/studentTable";
import {FaPlus} from "react-icons/fa";
import {useState} from "react";
import InputStudent from "@/components/card/inputStudent";
import PDFDocument from "@/components/PDF/PDFDocument";

const Index = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [studentData, setStudentData] = useState<any>([]);
    return (
        <div className="flex w-full flex-col justify-center gap-4 items-center">
            <div className="flex w-full justify-between mt-6">
                <button
                    onClick={() => setShowModal(true)}
                    type="submit"
                    className="flex gap-2 text-white bg-[#155e75] hover:bg-[#155e75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <FaPlus size={20}/>
                    <p>Add Student Details</p>
                </button>

            </div>
            <h1 className="text-2xl font-bold">Student Details</h1>
            <div className='flex w-full'>
                <StudentTable studentData={studentData}/>

            </div>
            <button
                onClick={() => {
                    // Generate the PDF when the button is clicked
                    const pdfData = <PDFDocument studentData={studentData} />;
                    const blob = new Blob([pdfData], { type: "application/pdf" });
                    const url = URL.createObjectURL(blob);
                    window.open(url);
                }}
            >
                Generate PDF
            </button>
            {
                showModal &&(
                    <div className="w-screen bg-black/50 h-screen absolute top-0 left-0 flex justify-center items-center overflow-hidden">
                        <InputStudent setStudentData={setStudentData} onClose={(value)=> setShowModal(value)} />
                    </div>
                )
            }
        </div>

    );
};

export default Index;