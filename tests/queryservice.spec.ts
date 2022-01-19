import { Session } from "@inrupt/solid-client-authn-node";
import { loginCredentials } from "../credentials";
import QueryService from '../src/index'
import {FOAF, LDP} from "@inrupt/vocab-common-rdf"

let session: Session;
let source: string;

beforeAll(async () => {
  session = new Session();
  source = "http://localhost:5000/arch/lbd/";LDP.contains

  await session.login(loginCredentials);
  if (!session.info.isLoggedIn)
    console.error(
      "Please get login credentials with npx @inrupt/generate-oidc-token before running tests!"
    );
});

describe("Auth", () => {
  test("is loggedin", () => {
    expect(session.info.isLoggedIn).toBe(true);
  });

  test("can fetch solid-based data", async() => {
    const qs = new QueryService(session.fetch);
    const dataset = qs.asJson(source)
    const content = []
    for await (const container of dataset[LDP.contains]) {
      content.push(`${container}`)
    }
    expect(content).not.toEqual([])
  })
});

