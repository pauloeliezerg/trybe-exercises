import { Container, Title, Text } from './styles.tsx';

type NewsProps = {
  title: string;
  content: string;
};

function News({ title, content }: NewsProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{content}</Text>
    </Container>
  );
}

export default News;
