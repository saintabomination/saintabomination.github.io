export type WindowType = {
  id: string;
  title?: string;
  content?: React.ReactNode;
  controls?: boolean;
  active: boolean;
  depth: number;
};
