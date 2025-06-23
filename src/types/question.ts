export type Choices = {
  value: string;
};
export type Question = {
  id: string;
  title: string;
  choices: Choices[];
  rightChoice: string;
};
