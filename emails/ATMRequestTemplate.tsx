/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
};

export default function WelcomeTemplate({ userName }: EmailProps) {
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
          <Text style={bold}>Hi {userName}!</Text>
          <Text style={paragraph}>
            Thank you for your debit card request with our bank. We have
            received your application and will provide updates on approval
            status and next steps shortly via email. Please note processing
            times are 2-3 business days as we handle all debit card requests in
            the order they are received.
          </Text>
          <Text style={paragraph}>
            We appreciate you choosing our bank for your financial needs. Our
            debit cards provide convenient 24/7 cash access, digital payment
            features, rewards programs, and leading security backed by excellent
            customer care. We look forward to officially welcoming you as a
            cardholder soon.
          </Text>
          <Text style={paragraph}>
            If any additional information is needed regarding your application,
            or if you have any other questions in the meantime, please reply to
            this message. We are happy to assist. We will contact you again here
            once your debit card is ready to be issued.
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
