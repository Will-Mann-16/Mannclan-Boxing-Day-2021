import { Box, Flex, Heading, Text } from "bumbag-native";
import { useEffect, useState } from "react";
import { ClueMetadata } from "../../../types/metadata";
import { definitions } from "../../../types/supabase";
import { supabase } from "../../../utils/supabaseClient";

const mapMetadata = (metadata: string) => {
  return JSON.parse(metadata) as ClueMetadata;
};

export default function CluesScreen({ navigation }) {
  const [clues, setClues] = useState<definitions["clues"][]>([]);

  useEffect(() => {
    supabase
      .from<definitions["clues"]>("clues")
      .select("*")
      .order("position", { ascending: true })
      .then((response) => setClues(response.data));
  }, []);

  return (
    <Box.Scroll flex={1}>
      <Heading>Clues</Heading>
      <Flex>
        {clues
          .map((clue) => ({ ...clue, metadata: mapMetadata(clue.metadata) }))
          .map((clue) => (
            <Box key={clue.id}>
              <Text>{clue.metadata.name}</Text>
            </Box>
          ))}
      </Flex>
    </Box.Scroll>
  );
}
