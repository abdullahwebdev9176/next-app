
export type TestType = string;

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}