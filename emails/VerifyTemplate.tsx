/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
};

export default function VerifyTemplate({ userName }: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img
              src="https://res.cloudinary.com/dpmx02shl/image/upload/v1711625589/keystoneNationalBank/logoOrange_krrbia.png"
              alt="Keystone National Bank Logo"
            />
          </Container>
          <Text style={bold}>Dear {userName}!</Text>
          <Text style={paragraph}>
            We are contacting you to confirm that we have verified your account
            details and security credentials.
          </Text>
          <Text style={paragraph}>
            As a result, full transaction privileges have now been enabled on
            your account. You may now freely initiate payments, transfers,
            deposits, and other money movements according to your permissions.
          </Text>
          <Text style={paragraph}>
            Please reply to this message if you have any other questions.
          </Text>
          <Container style={footer}>
            <Text>Processed by Keystone National Bank for {userName}</Text>
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
