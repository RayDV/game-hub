import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

const GenereList = () => {
  const { data, isLoading, error } = useGeneres();
  
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
