import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Icon,
} from "@once-ui-system/core";
import { baseURL, person, music } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: music.title,
    description: music.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(music.title)}`,
    path: music.path,
  });
}

export default function Music() {
  return (
    <Column maxWidth="m" paddingY="xl" horizontal="center" vertical="center" gap="l" style={{ minHeight: "60vh" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={music.path}
        title={music.title}
        description={music.description}
        image={`/api/og/generate?title=${encodeURIComponent(music.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Icon name="rocket" size="xl" onBackground="brand-weak" />
      <Heading variant="display-strong-l" align="center">
        Coming Soon
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" align="center">
        Music projects are in the works. Check back later!
      </Text>
    </Column>
  );
}
