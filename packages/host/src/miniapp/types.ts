export type MiniApp = {
  id: string;
  title: string;
  icon: string;
  requiredScopes?: string[];
  color?: string;
  load: () => Promise<{ default: React.ComponentType<any> }>;
};