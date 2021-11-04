import { ApiParam } from "@site/src/components/ApiReference";

const MessageOutputItem: ApiParam = {
  type: "object",
  displayName: "MessageOutputItem",
  fields: [
    {
      type: "string",
      name: "channel",
      description: "The channel used for rendering the message",
    },
    {
      type: "string",
      name: "channel_id",
      description: "The ID of channel used for rendering the message",
    },
    {
      type: "object",
      name: "content",
      fields: [
        {
          type: "string",
          name: "html",
          description: "The html content of the rendered message",
        },
        {
          type: "string",
          name: "title",
          description: "The title of the rendered message",
        },
        {
          type: "string",
          name: "body",
          description: "The body of the rendered message",
        },
        {
          type: "string",
          name: "subject",
          description: "The subject of the rendered message",
        },
        {
          type: "string",
          name: "text",
          description: "The text of the rendered message",
        },
        {
          type: "array",
          name: "blocks",
          description: "The blocks of the rendered message",
          field: {
            type: "object",
            fields: [
              {
                type: "string",
                name: "type",
                description: "The block type of the rendered message block",
              },
              {
                type: "string",
                name: "text",
                description: "The block text of the rendered message block",
              },
            ],
          },
        },
      ],
    },
  ],
};

export default MessageOutputItem;
