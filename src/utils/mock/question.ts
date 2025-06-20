import type { Question } from 'types/question';

export const MOCK_QUESTION: Question[] = [
  {
    id: '1',
    title:
      'Qual método é usado para adicionar um item ao final de um array em JavaScript?',
    choices: [
      { id: '9f531a15-8c8d-4d83-99e3-b4c5194b0bfa', value: 'push' },
      { id: 'a158e9a7-e85e-40a3-9a89-d9499e9aa298', value: 'pop' },
      { id: '3c943ed7-408f-4b67-9c56-963fbefbc2de', value: 'shift' },
      { id: 'b6aa2f04-57a5-4cb1-89e6-1315d0ec51c7', value: 'unshift' },
    ],
    rightChoice: '9f531a15-8c8d-4d83-99e3-b4c5194b0bfa',
  },
  {
    id: '2',
    title:
      'Qual palavra-chave é usada para declarar uma constante em JavaScript?',
    choices: [
      { id: '5d5a7cf8-df18-4e5d-a50f-6c80aaafae46', value: 'const' },
      { id: 'c77409ad-1634-4c84-8454-6d8a5e4c9f12', value: 'var' },
      { id: '5a4b2fd2-dbb1-4c8a-a33f-b71fc827aeed', value: 'let' },
      { id: '96e2c940-c97d-4525-b693-3ddc2354eafb', value: 'final' },
    ],
    rightChoice: '5d5a7cf8-df18-4e5d-a50f-6c80aaafae46',
  },
  {
    id: '3',
    title: 'Qual destes não é um tipo primitivo em JavaScript?',
    choices: [
      { id: 'b7633a03-d7e2-4f5a-9a66-b1d663fb34de', value: 'Boolean' },
      { id: '62f180ae-d30a-4935-a3c3-5d8ac382c9bb', value: 'Object' },
      { id: '6be61515-8057-4dd9-9c59-5f8b042c70e1', value: 'String' },
      { id: '7e6bff3b-f29f-4c0f-b16e-bc9c38d16052', value: 'Number' },
    ],
    rightChoice: '62f180ae-d30a-4935-a3c3-5d8ac382c9bb',
  },
  {
    id: '4',
    title: 'Em programação funcional, qual é uma característica central?',
    choices: [
      {
        id: '8e57c6e2-f8ee-4606-a26a-50ec3cfa86f2',
        value: 'Mutabilidade de dados',
      },
      { id: '9c5b1dcb-78fa-45db-bf2e-3b89cfd72d44', value: 'Funções puras' },
      {
        id: '7ab13d0b-d42b-434c-a186-c5f8c4204762',
        value: 'Orientação a objetos',
      },
      { id: '1e1889be-c31c-41fa-8850-7ec2fc15583c', value: 'Uso de classes' },
    ],
    rightChoice: '9c5b1dcb-78fa-45db-bf2e-3b89cfd72d44',
  },
  {
    id: '5',
    title: 'Qual linguagem é conhecida por ser fortemente tipada e compilada?',
    choices: [
      { id: 'a339bfa7-87d2-4e0d-944c-0a07b66adfd3', value: 'Python' },
      { id: 'f967768f-4e4e-4d73-b5a7-269c79c84dc4', value: 'JavaScript' },
      { id: 'ef6dfe3c-8e85-412a-b346-3f4e3e9f5c0a', value: 'C++' },
      { id: 'd1de87e5-bb2b-4a6b-8902-0be50554047f', value: 'Ruby' },
    ],
    rightChoice: 'ef6dfe3c-8e85-412a-b346-3f4e3e9f5c0a',
  },
  {
    id: '6',
    title:
      'Qual dessas estruturas de controle executa o código pelo menos uma vez, mesmo que a condição seja falsa?',
    choices: [
      { id: 'ba12e6f4-6919-4d15-a08e-c228bc4a8659', value: 'while' },
      { id: 'c82ae6e0-104d-4a66-83b4-11878c8d6f12', value: 'do...while' },
      { id: 'f0b77e3e-f0cb-4305-a9a4-25f3cf08de66', value: 'for' },
      { id: '46f5be67-4cfc-474f-b0ff-e282882df1ec', value: 'if' },
    ],
    rightChoice: 'c82ae6e0-104d-4a66-83b4-11878c8d6f12',
  },
  {
    id: '7',
    title: 'O que significa "NaN" em JavaScript?',
    choices: [
      { id: 'a1b2c3d4-e5f6-7a89-b0c1-d2e3f4a5b6c7', value: 'Null and Nothing' },
      { id: '8f2c3a5f-3943-4c76-b7b6-d00f3aa2cf46', value: 'Not a Number' },
      { id: 'a3b4c5d6-e7f8-9a01-b2c3-d4e5f6a7b8c9', value: 'No assigned Name' },
      {
        id: '9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d',
        value: 'Not available Now',
      },
    ],
    rightChoice: '8f2c3a5f-3943-4c76-b7b6-d00f3aa2cf46',
  },
  {
    id: '8',
    title: 'Em TypeScript, qual palavra-chave define um tipo customizado?',
    choices: [
      { id: 'ab32f0a1-d3f4-423f-a3cf-67adf9c299dd', value: 'interface' },
      { id: 'd21f928e-3b95-4b7d-938e-6bc13adf8b26', value: 'typedef' },
      { id: 'b3adf8a7-d4d5-4c2b-a2ce-b2cf4a258a23', value: 'extends' },
      { id: 'e2ad1f3b-1058-4450-a3f6-818273490a1e', value: 'newtype' },
    ],
    rightChoice: 'ab32f0a1-d3f4-423f-a3cf-67adf9c299dd',
  },
  {
    id: '9',
    title: 'Qual comando Git é usado para clonar um repositório?',
    choices: [
      { id: 'c3a1d4f6-b5a2-4ef9-9f45-7ecf1c77e5fa', value: 'git pull' },
      { id: 'f4d8b0ec-4214-4e45-897f-3cf0be6b6534', value: 'git clone' },
      { id: 'ad3f2e61-1c6a-4e17-a8e1-d5e7695c5d9f', value: 'git init' },
      { id: 'b58c3adf-7c8e-4d65-b4f4-eef8b3944c98', value: 'git fork' },
    ],
    rightChoice: 'f4d8b0ec-4214-4e45-897f-3cf0be6b6534',
  },
  {
    id: '10',
    title: 'No contexto de banco de dados, o que significa SQL?',
    choices: [
      {
        id: '31ae5cf1-bbaf-46b7-9b58-1c4c9b3dbdc4',
        value: 'Structured Query Language',
      },
      {
        id: 'a91ce68e-e15d-4aa3-b4f6-30b8c8c51d87',
        value: 'Simple Question Language',
      },
      {
        id: 'b2197f1a-8e8e-4f8a-9629-9d97f826bc21',
        value: 'System Query Logic',
      },
      {
        id: 'cf31fd7d-ef3e-4c4b-8a25-fbe845e01c4f',
        value: 'Sequential Query Layer',
      },
    ],
    rightChoice: '31ae5cf1-bbaf-46b7-9b58-1c4c9b3dbdc4',
  },
];
