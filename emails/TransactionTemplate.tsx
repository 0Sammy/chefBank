/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  transactionAmount?: number;
  transactionDate?: string;
  transactionType?: string;
  recipientName?: string;
  recipientAccountNumber?: string;
};

export default function TransactionTemplate({
  userName,
  transactionAmount,
  transactionDate,
  transactionType,
  recipientName,
  recipientAccountNumber,
}: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img
              src="https://res.cloudinary.com/dpmx02shl/image/upload/v1706006755/logo_bxjctk.png"
              alt="Keystone National Bank Logo"
            />
          </Container>
          <Text style={bold}>Hi {userName}!</Text>
          <Text style={paragraph}>
            We hope this message finds you well. We wanted to inform you that
            your recent transaction with our international mobile banking
            service has been successfully processed.
          </Text>
          <Text style={detailsParagraph}>
            Transaction Details:
            <ul>
              <li style={list}>Transaction Amount: {transactionAmount}</li>
              <li style={list}>Transaction Date: {transactionDate}.</li>
              <li style={list}>Transfer Type: {transactionType}</li>
              <li style={list}>Recipient Name: {recipientName}</li>
              <li style={list}>Recipient Account Number: {recipientAccountNumber}</li>
            </ul>
          </Text>
          <Text style={paragraph}>
            Your commitment to using our banking services is highly appreciated.
            If you have any questions regarding this transaction or if
            there&apos;s anything else we can assist you with, please feel free
            to reply to this email.
          </Text>
          <Text style={paragraph}>
            Thank you for choosing our international mobile banking platform. We
            value your trust in us and look forward to serving you for all your
            future banking needs.
          </Text>
          <Container style={footer}>
            <Text>&copy; Keystone National Bank 2024</Text>
          </Container>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#FFF",
  width: "800px", 
  margin: "0 auto",
  padding: "2rem",
};

const container = {
  border: "1px solid #B2B3BA",
  padding: "1rem",
  backgroundColor: "#FFF",
  width: "100%",
};

const bold = {
  fontWeight: "600",
  color: "#592F1A",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "2rem 0",
};

const detailsParagraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#2C3E50",
  margin: "1rem 0",
  fontWeight: "500",
};

const list ={
    margin: "0.3rem 0",
    color: "#592F1A",
    fontWeight: "600",
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#161618",
  margin: "2rem 0",
};

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};
