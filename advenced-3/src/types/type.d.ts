export type diaryType = {
  id: number;
  user: string;
  title: string;
  contents: string;
};

export type commentType = {
  id: number;
  postId: number;
  user: string;
  comment: string;
};
