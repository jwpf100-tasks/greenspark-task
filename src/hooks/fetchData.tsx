import { useEffect, useState } from "react";

interface IProduct {
  id: Number;
  type: Text;
  amount: Number;
}

interface IReq {
  url: string;
  method?: string;
  body?: any;
}

export enum IStatus {
  Idle,
  Loading,
  Succeeded,
  Failed,
}

const useFetch = (opts: IReq) => {
  const [response, setResponse] = useState<Array<IProduct> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<IStatus>(IStatus.Idle);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(IStatus.Loading);
      try {
        const res = await fetch(opts.url, {
          method: opts.method,
          body: JSON.stringify(opts.body),
        });
        const json = await res.json();
        setResponse(json);
        setStatus(IStatus.Succeeded);
      } catch (error: any) {
        setError(error);
        setStatus(IStatus.Failed);
      }
    };
    fetchData();
  }, []);

  return { response, error, status };
};

export default useFetch;
