export interface Contact {
  id: number;
  firstName: string;
  lastNae: string;
  phone: string;
}

export type HomeState = {
  contacts: Contact[];
  status: string;
  error?: string | null;
};
