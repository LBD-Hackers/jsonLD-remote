# JsonLD-remote
Query remote JSON-LD files in an authenticated way. Work in progress. Based on LDflex and Comunica. Solid session.fetch() can be passed. 

## Usage
```
import QueryService from "jsonLD-remote"
import { LDP } from "@inrupt/vocab-common-rdf";

async function doStuff() {
    const qs = new QueryService(session.fetch);
    const dataset = qs.asJson(source)
    const content = []
    for await (const container of dataset[LDP.contains]) {
      content.push(`${container}`)
    }
    console.log("content", content)
}

```

