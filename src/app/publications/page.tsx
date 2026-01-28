import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
  Tag,
} from "@once-ui-system/core";
import { baseURL, person, publications } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: publications.title,
    description: publications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(publications.title)}`,
    path: publications.path,
  });
}

function getPublicationTypeLabel(type: "book-chapter" | "conference" | "journal"): string {
  switch (type) {
    case "book-chapter":
      return "Book Chapter";
    case "conference":
      return "Conference";
    case "journal":
      return "Journal";
    default:
      return type;
  }
}

function getPublicationTypeColor(type: "book-chapter" | "conference" | "journal"): string {
  switch (type) {
    case "book-chapter":
      return "accent";
    case "conference":
      return "brand";
    case "journal":
      return "success";
    default:
      return "neutral";
  }
}

export default function Publications() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={publications.path}
        title={publications.title}
        description={publications.description}
        image={`/api/og/generate?title=${encodeURIComponent(publications.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column horizontal="center" gap="m">
        <Heading variant="display-strong-l" align="center">
          Publications
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Academic publications in quantum computing and machine learning
        </Text>
      </Column>
      <Column fillWidth gap="l" paddingX="l">
        {publications.items.map((pub, index) => (
          <Column
            key={index}
            fillWidth
            padding="l"
            gap="m"
            background="surface"
            border="neutral-alpha-weak"
            radius="l"
          >
            <Row fillWidth horizontal="between" vertical="start" gap="m" wrap>
              <Column flex={1} gap="8">
                {pub.doi ? (
                  <SmartLink href={pub.doi}>
                    <Text variant="heading-strong-l">{pub.title}</Text>
                  </SmartLink>
                ) : (
                  <Text variant="heading-strong-l">{pub.title}</Text>
                )}
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {pub.authors.join(", ")}
                </Text>
              </Column>
              <Row gap="8" vertical="center">
                <Tag size="m">{pub.year}</Tag>
                <Tag size="m">{getPublicationTypeLabel(pub.type)}</Tag>
              </Row>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {pub.venue}
            </Text>
            {pub.doi && (
              <SmartLink href={pub.doi}>
                <Text variant="label-default-s" onBackground="brand-weak">
                  View Publication
                </Text>
              </SmartLink>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  );
}
