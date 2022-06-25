import {
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function GlobalFilter({ filter, setFilter }: any) {
  return (
    <Container my={4}>
      <FormControl>
        <FormLabel>Global Filter Search : </FormLabel>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search"
        />
      </FormControl>
    </Container>
  );
}
