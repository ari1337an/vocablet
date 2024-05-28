import VerifyEmail from './_components/verify-email';

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    code?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const code = searchParams?.code ?? null;

  return (
    <div>
      <VerifyEmail code={code} />
    </div>
  );
}
