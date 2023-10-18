import api from "../api/github";
import { useQuery, UseQueryResult, QueryFunctionContext } from "react-query";
import { Repository } from "./types";

type Error = {
  message: string;
  documentation_url: string;
  errors: string[];
  status: number;
  title: string;
  trace_id: string;
  type: string;
  url: string;
};

type GetReposResponse = Repository[];

const getRepos = async (ctx: QueryFunctionContext): Promise<GetReposResponse> => {
  const [_, githubUsername] = ctx.queryKey;
  const { data } = await api.get<GetReposResponse>(`/users/${githubUsername}/repos`);
  return data;
};

export const useGetRepos = (githubUsername: string): UseQueryResult<GetReposResponse, Error> => {
  return useQuery<GetReposResponse, Error>(['repos', githubUsername], getRepos);
};
