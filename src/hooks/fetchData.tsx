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

const useFetch = (opts: IReq) => {
  const [response, setResponse] = useState<Array<IProduct> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(opts.url, {
          method: opts.method,
          body: JSON.stringify(opts.body),
        });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error: any) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
