import React from "react";
import ReactPDF, {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";

type TemplateData = {
    companyName: string;
    companyPhone: string;
    companyEmail: string;
    receiptNumber: string;
    datePaid: string,
    paymentMethod: string,
    amount: string
};

interface PDFProps {
    data: TemplateData;
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 600,
        color: "#131925",
        marginBottom: 8
    },
    statement: {
        fontSize: 20,
        color: "#131925",
        lineHeight: 1.4,
        marginBottom: 4,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#999999",
        margin: "24px 0 24px 0"
    },
    paragraph: {
        fontSize: 12,
        color: "#212935",
        lineHeight: 1.67,
    },
    columnParent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnStart: {
        flex: 1,
    },
    columnEnd: {
        flex: 1,
        alignItems: "flex-end"
    },
});

const PDF = ({ data }: PDFProps) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View style={styles.columnParent}>
                        <View style={styles.columnStart}>
                            <Text style={styles.heading}>{data.companyName}</Text>
                            <Text style={styles.paragraph}>{data.companyPhone}</Text>
                            <Text style={styles.paragraph}>{data.companyEmail}</Text>
                        </View>
                        <View style={styles.columnEnd}>
                            <Text style={styles.heading}>Receipt</Text>
                            <Text style={styles.paragraph}>Receipt number: {data.receiptNumber}</Text>
                            <Text style={styles.paragraph}>Date paid: {data.datePaid}</Text>
                            <Text style={styles.paragraph}>Payment method: {data.paymentMethod}</Text>
                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    <View>
                        <Text style={styles.statement}>{`${data.amount} paid on ${data.datePaid}`}</Text>
                        <Text style={styles.paragraph}>Thank you for your business!</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default async (data: TemplateData) => {
    return await ReactPDF.renderToStream(<PDF {...{ data }} />);
};