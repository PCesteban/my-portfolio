import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
  Tag,
  Icon,
} from "@once-ui-system/core";
import { baseURL, person, activities } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: activities.title,
    description: activities.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(activities.title)}`,
    path: activities.path,
  });
}

export default function Activities() {
  return (
    <Column maxWidth="m" paddingY="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={activities.path}
        title={activities.title}
        description={activities.description}
        image={`/api/og/generate?title=${encodeURIComponent(activities.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column horizontal="center" gap="m">
        <Heading variant="display-strong-l" align="center">
          {activities.label}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          Competitions, certifications, and open source contributions
        </Text>
      </Column>

      {activities.openSource.display && (
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-s">
            {activities.openSource.title}
          </Heading>
          <Column fillWidth gap="l">
            {activities.openSource.items.map((item, index) => (
              <Column
                key={index}
                fillWidth
                padding="l"
                gap="s"
                background="surface"
                border="neutral-alpha-weak"
                radius="l"
              >
                <Row fillWidth horizontal="between" vertical="center" gap="m">
                  {item.link ? (
                    <SmartLink href={item.link}>
                      <Text variant="heading-strong-l">{item.title}</Text>
                    </SmartLink>
                  ) : (
                    <Text variant="heading-strong-l">{item.title}</Text>
                  )}
                  <Tag size="m">{item.year}</Tag>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      )}

      {activities.competitions.display && (
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-s">
            {activities.competitions.title}
          </Heading>
          <Column fillWidth gap="m">
            {activities.competitions.items.map((item, index) => (
              <Row
                key={index}
                fillWidth
                padding="m"
                horizontal="between"
                vertical="center"
                background="surface"
                border="neutral-alpha-weak"
                radius="m"
              >
                <Column gap="4">
                  <Text variant="heading-strong-m">{item.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {item.organizer}
                  </Text>
                </Column>
                <Tag size="m">{item.year}</Tag>
              </Row>
            ))}
          </Column>
        </Column>
      )}

      {activities.certifications.display && (
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-s">
            {activities.certifications.title}
          </Heading>
          <Column fillWidth gap="m">
            {activities.certifications.items.map((item, index) => (
              <Row
                key={index}
                fillWidth
                padding="m"
                horizontal="between"
                vertical="center"
                background="surface"
                border="neutral-alpha-weak"
                radius="m"
              >
                <Column gap="4">
                  <Text variant="heading-strong-m">{item.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {item.issuer}
                  </Text>
                </Column>
                {item.year && <Tag size="m">{item.year}</Tag>}
              </Row>
            ))}
          </Column>
        </Column>
      )}
    </Column>
  );
}
