import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileAWSSNSPush: ApiParam = {
  type: "object",
  displayName: "ProfileAWSSNSPush",
  fields: [
    {
      type: "string",
      name: "target_arn",
      description: "[Learn more](/docs/platform/channels/other/aws-sns)",
    },
  ],
};

export default ProfileAWSSNSPush;
