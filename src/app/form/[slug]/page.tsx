import AstroForm from "@/app/components/features/form/page";

// app/form/[slug]/page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
}

const FormPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      <AstroForm endpoint={slug} />
    </div>
  );
};

export default FormPage;

