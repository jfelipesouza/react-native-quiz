export type Choices = {
  value: string;
  id: string;
};

export type Question = {
  id: string;
  title: string;
  choices: Choices[];
  rightChoice: string;
};
