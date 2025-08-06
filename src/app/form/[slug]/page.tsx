import AstroForm from "@/app/components/features/form/page";

// app/form/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
}

const FormPage = async ({ params }: PageProps) => {
  const { slug } = params;

  return (
    <div>
      <AstroForm endpoint={slug} />
    </div>
  );
};

export default FormPage;
