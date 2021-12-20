import http from "k6/http";

export const options = {
 iterations: 10,
 summaryTimeUnit: "ms",
 summaryTrendStats: ["avg"],
};

const config = JSON.parse(open("../config.json"));

export default function () {
 http.get(
  `${config.endpoint}/database/collections/posts/documents?offset=${__ENV.OFFSET}&limit=10`,
  {
   headers: {
    "content-type": "application/json",
    "X-Appwrite-Project": config.projectId,
   },
  }
 );
}
