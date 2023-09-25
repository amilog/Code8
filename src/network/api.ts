import axios from "axios";

const api = axios.create({
  baseURL: "https://clownfish-app-cx6dw.ondigitalocean.app/api/code8/",
});

export const getTeams = async () => {
  const response = await api.get("teams/get");
  return response.data;
};

export const getMembers = async () => {
  const response = await api.get("members/get");
  return response.data;
};

export const getTeamById = async (id: string) => {
  const response = await api.get(`teams/get/${id}`);
  return response.data;
};

export const getMemberById = async (id: string) => {
  const response = await api.get(`members/get/${id}`);
  return response.data;
};

export const startHackathon = async () => {
  const response = await api.get("check/get");
  return response.data;
};

export const postCoachValuate = async (
  id: string,
  score: number,
  type: string
) => {
  const response = await api.post(`valuation/team/${id}/coach`, {
    givenScore: score,
    coachType: type,
  });
  return response.data;
};

export const postJuryValuate = async (
  id: string,
  score: number,
) => {
  try {
    const response = await api.post(`valuation/team/${id}/jury`, {
      givenScore: score,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const resetValuation = async (password: string) => {
  const response = await api.post("valuation/reset", {
    password,
  });
  return response.data;
};

export const getResult = async () => {
  const response = await api.get("valuation/get");
  return response.data;
};

export default {
  getTeams,
  getMembers,
  getTeamById,
  getMemberById,
  startHackathon,
  postCoachValuate,
  postJuryValuate,
  resetValuation,
  getResult,
};
