/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  accountNumber?: string;
};

export default function SuspendTemplate({
  userName,
  accountNumber,
}: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img
              style={image}
              src="https://res.cloudinary.com/dpmx02shl/image/upload/v1711625589/keystoneNationalBank/logoOrange_krrbia.png"
              alt="Keystone National Bank Logo"
            />
          </Container>
          <Text style={bold}>Dear {userName}!</Text>
          <Text style={paragraph}>
            We are writing regarding observed irregularities and suspected
            unauthorized transactions on your account ending in XXXXXX
            {accountNumber}.
          </Text>
          <Text style={paragraph}>
            As per our security policy, we have suspended access and activity on
            the account for the next 48 hours. This hold has been initiated
            pending an investigation into the suspicious activity.
          </Text>
          <Text style={paragraph}>
            Please reply to this message immediately and provide needed details
            when our fraud investigation reaches out. We may require additional
            identity verification before reconsidering account reinstatement.
          </Text>
          <Text style={paragraph}>
            If we determine the transactions were fraudulent or violation of our
            terms, closure and reporting actions may be taken. Please act
            promptly for most favorable resolution.
          </Text>
          <Container style={footer}>
            <Text>
              Processed by Keystone National Bank Fraud Investigation Team for{" "}
              {userName}
            </Text>
          </Container>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#FFF",
  width: "800px", // Expanded width
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

const image = {
  width: "30px"
}