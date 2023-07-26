// PDFDocument.tsx

import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
import { v4 as uuidv4 } from "uuid";
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
        textAlign: "center",
        textDecoration: "underline",
    },
    table: {
        display: "flex",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#000000",
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        fontSize: 12,
        padding: 8,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#000000",
    },
    tableCellData: {
        fontSize: 12,
        padding: 8,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#000000",
    },
    // Add missing styles for column and row
    column: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
    },
});

const PDFDocument: React.FC<PDFDocumentProps> = ({ studentData }) => {
    const title =  uuidv4();
    return (
        <Document
            title={title}
            author="Blockchain Student"
            subject="Blockchain"
        >
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Student Details</Text>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Student Name</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Age</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Date of Birth</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Class</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Fathers Name</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Home Address</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Phone Number</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellHeader}>Date of Admission</Text>
                        </View>
                    </View>

                    {/* Table Data */}
                    <View style={styles.tableRow}>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.studentName}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.studentAge}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.studentDOB}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.studentClass}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.fatherName}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.homeAddress}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.phoneNumber}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.tableCellData}>{studentData.dateOfAdmission}</Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;