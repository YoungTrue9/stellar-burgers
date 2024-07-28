import { Dispatch, SetStateAction, SyntheticEvent } from 'react';//это другой Dispatch

export type PageUIProps = {
  errorText: string | undefined;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: SyntheticEvent) => void;
};
