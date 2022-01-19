# JsonLD-remote
Query remote JSON-LD files in an authenticated way. Work in progress. Based on LDflex and Comunica. Solid session.fetch() can be passed. 

## Usage
```
const {QueryService, extract}  = require( "jsonld-remote")
const { LDP }  = require( "@inrupt/vocab-common-rdf");
const { Session }  = require( "@inrupt/solid-client-authn-node");

const loginCredentials = {
    "refreshToken" : "eE9qGoP7TcViih-qXkdvly6oUHf1Tt0aC8UqwyLcTCP",
    "clientId"     : "3bCvSZyJ4HI1aAiKDLrWY",
    "clientSecret" : "2TApU62b0GF8yAw4PdNIzSFioBVWCGuL6KM0UMr1pxCORH7qmIgFeuB1id4Au--lc6Mo7V4Csxmu2IDo3HRLew",
    "oidcIssuer"   : "http://localhost:5000/",
  }

async function local(source) {
  let session = new Session()
  await session.login(loginCredentials)
  const data = await session.fetch(source, {headers: {"Accept": "application/ld+json"}}).then(res => res.json())
  const extracted = extract(data, source)
  console.log('extracted[LDP.contains]', extracted[LDP.contains]);
}

async function remote(source) {
    let session = new Session()
    await session.login(loginCredentials)
    const qs = new QueryService()
    const dataset = qs.asJson(source)
    const content = []
    for await (const container of dataset[LDP.contains]) {
      content.push(`${container}`)
    }
    console.log("content", content)
}

const url = "http://localhost:5000/arch/lbd/"
local(url)
remote(url)
```

