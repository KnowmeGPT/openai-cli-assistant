import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output, env } from "node:process";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: e