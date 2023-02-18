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

interface ButtonProps {
  children: ReactNode;
  size: string;
  onClick: () => void;
}

interface inputProps {
  wh: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

interface commentProps {
  id: string | undefined;
}
