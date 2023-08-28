import React, { useMemo } from "react";
import { ApiReferenceProps } from ".";
import styles from "./styles.module.css";
import ApiExamples from "./ApiExamples";
import { ApiParam, apiParamInitialValue } from "./ApiParamField";
import { Formik } from "formik";
import { FormValues } from "../ApiReference";

type PropType = Pick<
  ApiReferenceProps,
  "method" | "path" | "pathParams" | "queryParams" | "bodyParam"
>;

const ApiReferenceRequestExample = ({
  path,
  method,
  pathParams,
  queryParams,
  bodyParam,
}: PropType) => {
  const initialValues = useMemo(() => {
    const pathParam: ApiParam = pathParams && {
      type: "object",
      fields: pathParams,
    };
    const queryParam: ApiParam = queryParams && {
      type: "object",
      fields: queryParams,
    };
    return {
      path: pathParam && apiParamInitialValue(pathParam),
      query: queryParam && apiParamInitialValue(queryParam),
      body: bodyParam && apiParamInitialValue(bodyParam),
    };
  }, [bodyParam, pathParams, queryParams]);

  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>Request Example</div>
      <Formik<FormValues> initialValues={initialValues} onSubmit={() => {}}>
        <ApiExamples method={method} path={path} />
      </Formik>
    </div>
  );
};

export default ApiReferenceRequestExample;