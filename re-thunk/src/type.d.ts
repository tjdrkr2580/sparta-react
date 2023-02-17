export type todoType = {
  id: number;
  title: string;
};

export type stateType = {
  todos: todoType[];
  isLoading: boolean;
  isError: boolean;
  error: unknown | null;
};
