import { Column, Heading, Meta, Schema, Text, Icon, Row } from "@once-ui-system/core";
import { baseURL, person, gallery } from "@/resources";
import GalleryView from "@/components/gallery/GalleryView";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="l" paddingY="l" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={gallery.path}
        title={gallery.title}
        description={gallery.description}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column horizontal="center" gap="m">
        <Row gap="m" vertical="center">
          <Icon name="camera" size="l" onBackground="brand-weak" />
          <Heading variant="display-strong-l" align="center">
            {gallery.label}
          </Heading>
        </Row>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          A collection of moments captured through my lens
        </Text>
      </Column>
      <GalleryView />
    </Column>
  );
}
