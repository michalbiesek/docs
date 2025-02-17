import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Profile from "../schemas/Profile";

const config: ApiReferenceProps = {
  description:
    "Replace an existing profile with the supplied values or create a new profile if one does not already exist.",
  method: "PUT",
  path: "/profiles/:user_id",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description:
        "A unique identifier representing the user associated with the requested profile.",
      example: "0460766e-8463-4905-ae98-b72c7aef41d6",
    },
  ],
  bodyParam: Profile,
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "status",
            example: "SUCCESS",
          },
        ],
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Error Message",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default config;
