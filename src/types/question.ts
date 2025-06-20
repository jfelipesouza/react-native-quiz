export type Choices = {
  id: string;
  value: string;
};
export type Question = {
  id: string;
  title: string;
  choices: Choices[];
  rightChoice: string;
};
