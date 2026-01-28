import { Column, Heading, Meta, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function ProjectsPage() {
  return (
    <Column maxWidth="m" paddingY="xl" horizontal="center" vertical="center" gap="l" style={{ minHeight: "60vh" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Icon name="grid" size="xl" onBackground="brand-weak" />
      <Heading variant="display-strong-l" align="center">
        Building cool stuff...
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" align="center">
        Currently too busy running quantum circuits to document them properly.
      </Text>
      <Text variant="body-default-m" onBackground="neutral-weak" align="center">
        Projects coming soon!
      </Text>
    </Column>
  );
}
