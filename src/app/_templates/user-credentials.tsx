import {
  Html,
  Head,
  Preview,
  Section,
  Container,
  Text,
  Row,
  Tailwind,
  Hr,
  Link,
  Button,
  Font,
} from "@react-email/components";

type CredentialEmailProps = {
  email: string;
  dummypass: string;
};

export default function UserCredentialEmail({
  email = "your@mail.com",
  dummypass = "yourpass",
}: CredentialEmailProps) {
  const brand = (process.env.NEXT_PUBLIC_BRAND_NAME as string) || "Vocablet";
  const hostdomain = (process.env.AWS_SES_DOMAIN as string) || "vocablet.io";
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#F97315",
              secondary: "#292524",
            },
          },
        },
      }}
    >
      <Html dir="ltr" className="bg-secondary">
        <Head>
          <title>{`Verification code for ${brand.toLowerCase()}`}</title>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
              format: "woff2",
            }}
            fontWeight={600}
            fontStyle="normal"
          />
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
              format: "woff2",
            }}
            fontWeight={700}
            fontStyle="normal"
          />
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2",
              format: "woff2",
            }}
            fontWeight={900}
            fontStyle="normal"
          />
        </Head>
        <Preview>{`Your temporary credentials for vocablet.`}</Preview>
        <Section className="bg-secondary">
          <Container className="text-white bg-secondary">
            <Container className="bg-primary">
              <Section>
                <Text className="text-center text-2xl font-bold">
                  YOUR CREDENTIALS @ {brand.toUpperCase()}
                </Text>
              </Section>
            </Container>
            <Container className="px-5">
              <Row>
                <Text>Dear {email.split("@")[0]},</Text>
                <Text>
                  Thank you for purchasing {brand}! We&apos;re excited to have
                  you on board.
                </Text>

                <Text>
                  To get you started, we&apos;ve created an account for you.
                  Below are your temporary login credentials:
                </Text>
                <Container className="text-center">
                  <Text className="font-normal">
                    <b>Email: </b>
                    {email}
                  </Text>
                  <Text className="font-normal">
                    <b>Temporary Password: </b>
                    {dummypass}
                  </Text>
                </Container>

                <Text>
                  Please use these credentials to access your account at{" "}
                  <Link
                    className="text-white bg-primary rounded-3xl px-2 py-1"
                    href={`https://${hostdomain}/auth/login`}
                  >
                    Login Page
                  </Link>
                  . We recommend changing your password upon your first login
                  for security purposes.
                </Text>

                <Text>
                  If you have any questions or need assistance, feel free to
                  reach out to our support team at{" "}
                  <Link
                    className="text-slate-400"
                    href={`mailto:support@alphawolfventures.com`}
                  >
                    support@alphawolfventures.com
                  </Link>
                  . We also have a customer portal for managing billing, Click here <Link className="text-white bg-primary rounded-3xl px-2 py-1" href="https://billing.stripe.com/p/login/4gwdROboSgxe21qeUU">Customer Portal</Link>
                </Text>
              </Row>

              <Text className="text-center text-slate-400">
                You can ignore this email if you didn&apos;t purchase{" "}
                {brand.toLowerCase()} subscription.
              </Text>
              <Hr className="" />
              <Container className="text-center text-slate-400">
                <Text>
                  <Link
                    className="text-slate-400 underline"
                    href={`https://${hostdomain}`}
                  >
                    {brand.charAt(0).toUpperCase() +
                      brand.slice(1).toLowerCase()}
                  </Link>{" "}
                  by{" "}
                  <Link
                    className="text-slate-400 underline"
                    href="https://alphawolfventures.com"
                  >
                    AlphaWolf Ventures, Inc.
                  </Link>
                </Text>
                <Text>131 Continental Drive, Suite 305, Newark, DE 19713</Text>
              </Container>
            </Container>
          </Container>
        </Section>
      </Html>
    </Tailwind>
  );
}
