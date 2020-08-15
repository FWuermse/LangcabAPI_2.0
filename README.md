# Langcab API

Initially langcab was an App I wrote to help me with my vocab. 

It's an app that can recognize your personal learning speed and leverages that to help you getting started with the first 300 - 1000 words in a foreign language.
After that time strict vocabulary checks are probably not the way to go anymore but rather books, videos or TV-Shows in that language.
I'll see if I add that at some point or include a chat with native speakers.

By now this webapp is more my guinea pig for testing new software technologies and architectures.
In this second version of the API I'm moving away from the traditional Java / Spring / SQL towards serverless with cloud functions and firestore.

## My first Serverless application with GCP

I have worked quite a bit with AWS serverless and want to experience GCP now.
However, the main reason I'm doing this is because GCP is free to a certain extent, and I'm going back to UNI for a bachelors and want to cut down the cost of my Server.

So far I like it much more then AWS (shhhh don't tell them ok?) mainly due to the dynamic and automatically set indexes that you painfully have to find and concatenate in AWS dynamodb.
But over all pretty similar.

## Components

The main components of this backend are several cloud functions and a firestore storage definition.

## How to run it locally
```export GOOGLE_APPLICATION_CREDENTIALS=/path/to/the/key/file```

```cd functions && npm install```

```npm run serve```
