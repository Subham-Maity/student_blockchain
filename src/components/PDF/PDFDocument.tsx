// PDFDocument.tsx

import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

interface PDFDocumentProps {
    studentData: {
        studentName?: string;
        studentAge?: string;
        studentDOB?: string;
        studentClass?: string;
        fatherName?: string;
        homeAddress?: string;
        phoneNumber?: string;
        dateOfAdmission?: string;
    };
}

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
    column: {
        flex: 1,
    },
    cell: {
        fontSize: 12,
        padding: 5,
        borderColor: "#000000",
        borderWidth: 6,
    },
});

const PDFDocument: React.FC<PDFDocumentProps> = ({ studentData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Student Details</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Student Name</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Age</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Date of Birth</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Class</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Fathers Name</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Home Address</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Phone Number</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>Date of Admission</Text>
                    </View>
                </View>

                {/* Render only one row with the student data */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.studentName}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.studentAge}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.studentDOB}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.studentClass}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.fatherName}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.homeAddress}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.phoneNumber}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.cell}>{studentData.dateOfAdmission}</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
};

export default PDFDocument;
