import RequestButton from "@/components/custom/RequestButton";
import SimpleTestForm from "@/components/form/SimpleTestForm";
import Container from "@/components/general/Container";
import Section from "@/components/general/Section";

export default function Home() {

  return (
    <main>
      <Section>
        <Container>
          <h2 className="mb-2">Simple test request</h2>
          <p className="mb-4 text-gray-400">Timestamp now | View Content | USD 142.52</p>
          <RequestButton />
        </Container>

        <Container>
          <h2 className="mb-2">Form test request</h2>
          <p className="mb-4 text-gray-400">Timestamp now | Username, email, phone</p>
          <SimpleTestForm />
        </Container>
      </Section>
    </main>
  )
}
