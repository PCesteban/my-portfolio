import { Column, Heading, Meta, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingY="xl" horizontal="center" vertical="center" gap="l" style={{ minHeight: "60vh" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Icon name="book" size="xl" onBackground="brand-weak" />
      <Heading variant="display-strong-l" align="center">
        Still thinking what to write here...
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" align="center">
        Probably something about quantum computing, physics, or why my code works but I don't know why.
      </Text>
      <Text variant="body-default-m" onBackground="neutral-weak" align="center">
        Check back soon!
      </Text>
    </Column>
  );
}
