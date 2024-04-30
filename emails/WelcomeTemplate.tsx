/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  verificationCode?: number;
};

export default function WelcomeTemplate({
  userName,
  verificationCode,
}: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1711625589/keystoneNationalBank/logoOrange_krrbia.png" alt="Keystone National Bank Logo" />
          </Container>
          <Text style={bold}>Hi {userName}!</Text>
          <Text style={paragraph}>
            Here is the code you need to verify your Keystone National Bank Email
            account:
          </Text>
          <Text style={verification}>{verificationCode}</Text>
          <Text style={paragraph}>
            This email is an automated notification regarding your account registration and email address verification.
          </Text>
          <Text style={paragraph}>
            In order to complete the account creation process, please verify
            your email by entering the secure code provided.
          </Text>
          <Text style={paragraph}>
            If you did not intend to create this account, please disregard this
            verification notice and accept our apologies for any inconvenience.
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
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#161618",
  margin: "2rem 0",
};

const verification = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};

const image = {
  width: "30px"
}