import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
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
    <Column maxWidth="m" paddingY="xl" horizontal="center" gap="xl">
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
      <Column horizontal="center" gap="m">
        <Heading variant="display-strong-l" align="center">
          Music
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          What I listen to while debugging quantum circuits
        </Text>
      </Column>

      <Column fillWidth gap="m">
        <Heading as="h2" variant="heading-strong-l">
          My Playlist
        </Heading>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4o7lIWV0LcT0qy0gx1ABpW?utm_source=generator&theme=0"
          width="100%"
          height="452"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Column>

      <Column horizontal="center" gap="s" paddingTop="xl">
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          Original music projects coming soon...
        </Text>
      </Column>
    </Column>
  );
}
