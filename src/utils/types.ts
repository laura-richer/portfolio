export interface LinkStackType {
  title: string;
  link: string;
  icon: IconType;
}

export interface IconType {
  file: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: any;
}
