import React from "react";
import { Params, Param, ExtendParams } from "@site/src/components/Params";

/** Does not include user_id */
export const Profile = () => (
  <Params>
    <Param name="email" type="string">
      Email Address
    </Param>
    <Param name="phone_number" type="string">
      A valid phone number
    </Param>
    <Param name="locale" type="string">
      The user's preferred ISO 639-1 language code.
    </Param>
    <Param name="additional fields" type="[key: string]: any">
      Additional provider specific fields may be specified.
    </Param>
  </Params>
);

export const ToProfile = () => (
  <Params>
    <Param name="user_id" type="string">
      Id of a user stored with Courier.
    </Param>
    <Param name="list_id" type="string">
      A unique identifier associated with a List of subscribers. A message will be sent to each
      subscriber in the list.
    </Param>
    <Param name="audience_id" type="string">
      A unique identifier associated with an Audience. A message will be sent to each user in the
      audience.
    </Param>
    <Param name="data" type="object">
      An object that includes any data you want to pass to the message. The data will populate the
      corresponding template or content variables.
    </Param>
    <Param name="filters" type="array<Filter>">
      When sending to a list or audience, this field may be supplied for adhoc filtering criteria.
      When a member of the list or audience doesn't meet the criteria of each supplied filter, they
      will be skipped. A list of available operators is available under{" "}
      <a href="/docs/reference/audiences/operators">audience operators</a>.
      <br />
      <strong>Note: This feature is part of the Accounts Private Beta.</strong>
    </Param>
    <ExtendParams>
      <Profile />
    </ExtendParams>
  </Params>
);
