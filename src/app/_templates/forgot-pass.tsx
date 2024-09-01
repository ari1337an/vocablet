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

type ForgotPassEmailProps = {
  code: string;
  host: string;
};

export default function ForgotPassEmail({
  code = "123456",
  host = process.env.NEXT_PUBLIC_BRAND_URI as string,
}: ForgotPassEmailProps) {
  const brand = process.env.NEXT_PUBLIC_BRAND_NAME as string;

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
      <Html dir="ltr">
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
        <Preview>{`Your verification link for ${host}`}</Preview>
        <Section>
          <Container className="text-white bg-secondary">
            <Container className="bg-primary">
              <Section>
                <Text className="text-center text-2xl font-bold">
                  VERIFY YOUR EMAIL
                </Text>
              </Section>
            </Container>
            <Container className="px-5">
              <Row>
                <Text className="text-sm uppercase font-semibold">
                  Someone requested a password reset request
                </Text>
                <Text className="text-5xl font-extrabold">
                  Verify your email address
                </Text>
                <Text className="font-normal">
                  To complete you verification and reset your password at{" "}
                  {brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()}
                  , you&apos;ll need to verify your email address.
                </Text>
              </Row>
              <Container className="text-center">
                <Button
                  className="bg-primary px-4 py-3 rounded-md text-white"
                  href={`https://${host}/forgot-password-verify?code=${code}`}
                >
                  Change password
                </Button>
              </Container>
              <Text className="text-center text-slate-400">
                You can ignore this email if you didn&apos;t request a password reset.
              </Text>
              <Hr className="px-0" />
              <Container className="text-center text-slate-400">
                <Text>
                  <Link
                    className="text-slate-400 underline"
                    href={`https://${host}`}
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
