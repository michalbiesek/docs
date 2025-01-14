import React from "react";
import { ApiReferenceProps } from ".";
import styles from "./styles.module.css";
import { Params } from "../Params";
import ApiResponseField from "./ApiResponseField";

type PropType = NonNullable<Pick<ApiReferenceProps, "responses">>;

const ApiReferenceResponses = ({ responses }: PropType) => {
  const responseTitle = responses.length > 1 ? "RESPONSES" : "RESPONSE";
  if (responses.length === 0) return null;
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>
        <strong>{responseTitle}:</strong>
      </div>

      {responses.map((response, index) => {
        const name = `${response.status} ${response.description}`;
        return (
          <div key={index} className={styles.section}>
            <p>
              <strong>status: </strong>
              <code>{name}</code>
            </p>
            {response.body && (
              <Params>
                <ApiResponseField
                  collapsible={false}
                  isRoot
                  field={{
                    type: "object",
                    name,
                    ...response.body,
                  }}
                />
              </Params>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ApiReferenceResponses;
