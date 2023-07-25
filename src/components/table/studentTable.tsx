// StudentTable.tsx

import React from "react";
import {MdWarningAmber} from "react-icons/md";
import {PDFDownloadLink} from "@react-pdf/renderer";
import PDFDocument from "@/components/PDF/PDFDocument";


interface TableProps {
    studentData: {
        studentName?: string;
        studentAge?: string;
        studentDOB?: string;
        studentClass?: string;
        fatherName?: string;
        homeAddress?: string;
        phoneNumber?: string;
        dateOfAdmission?: string;
    }[];
}

const StudentTable = ({studentData}: TableProps) => {
    console.log(studentData);
    return (
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg cursor-pointer">
            <table
                className="w-full border-white border-2 text-sm text-left text-gray-500  dark:bg-inherit  dark:text-gray-400">
                <thead className="text-xs text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Student Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Age
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date of Birth
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Class in which the student wants to take admission
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Father’s name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Home address
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone number and other contact details
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date of admission
                    </th>
                </tr>
                </thead>
                <tbody className="rounded-xl">
                {studentData.length === 0 && (
                    <tr className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <MdWarningAmber
                            className="text-4xl text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </tr>
                )}
                {studentData.length > 0 && (
                    <>
                        {studentData.map((student: any, index: number) => {
                            return (
                                <tr
                                    key={index}
                                    className="light:bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white"
                                    >
                                        {student.studentName || ""}
                                    </th>
                                    <td className="px-6 py-4">{student.studentAge || ""}</td>
                                    <td className="px-6 py-4">{student.studentDOB || ""}</td>
                                    <td className="px-6 py-4">{student.studentClass || ""}</td>
                                    <td className="px-6 py-4">{student.fatherName || ""}</td>
                                    <td className="px-6 py-4">{student.homeAddress || ""}</td>
                                    <td className="px-6 py-4">{student.phoneNumber || ""}</td>
                                    <td className="px-6 py-4">
                                        {student.dateOfAdmission || ""}
                                    </td>

                                    {/* Render a PDFDownloadLink for each student */}
                                    <td className="border px-4 py-2">

                                        <PDFDownloadLink
                                            document={<PDFDocument studentData={student}/>}
                                            fileName={`${student.studentName}.pdf`}
                                        >
                                            {({blob, url, loading, error}) =>
                                                loading ? "Loading document..." : "Download PDF"
                                            }
                                        </PDFDownloadLink>
                                    </td>

                                </tr>
                            );
                        })}
                    </>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
