import React from "react";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  mainHeader: {},
  mainHeaderText: {},
  sectionHeaderText: {},
  paragraph: {},
  column: {},
  columnHeaderText: {},
});

type TemplateData = {
  firstName: string;
  lastName: string;
  description: string;
  sections: string[];
  company: string;
  address: string;
  cost: string;
};

interface PDFProps {
  data: TemplateData;
}

const PDF = ({ data }: PDFProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainHeader}>
          <Text
            style={styles.mainHeaderText}
          >{`${data.firstName} ${data.lastName}`}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeaderText}>Description</Text>
          <Text style={styles.paragraph}>{data.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.column}>
            <Text style={styles.columnHeaderText}>Column #1</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.columnHeaderText}>Column #2</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.columnHeaderText}>Column #3</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default async (data: TemplateData) => {
  return await ReactPDF.renderToStream(<PDF {...{ data }} />);
};
