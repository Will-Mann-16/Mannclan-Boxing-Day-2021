type BaseClueMetadata = {
  name: string;
};

type TextClueMetadata = BaseClueMetadata & {
  description: string;
};

export type ClueMetadata = TextClueMetadata;
