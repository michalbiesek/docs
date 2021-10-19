import React, { useCallback } from "react";

import { FieldComponentProps } from "../ApiReference/ApiParamField";

import styles from "./styles.module.css";

interface ApiParamInputOverlayProps extends FieldComponentProps {}

const ApiParamInputOverlay = ({
  field,
  meta,
  form,
  param,
}: ApiParamInputOverlayProps) => {
  const error = meta.touched && meta.error;
  const exampleValue = param.example;
  const defaultValue = param.default;

  const setExampleValue = useCallback(
    (event) => {
      event.currentTarget.blur();

      form.setFieldValue(field.name, exampleValue);
    },
    [field.name, exampleValue, form]
  );

  const setDefaultValue = useCallback(
    (event) => {
      event.currentTarget.blur();

      form.setFieldValue(field.name, defaultValue);
    },
    [field.name, defaultValue, form]
  );

  if (!error && !defaultValue && !exampleValue) return null;

  return (
    <div className={styles.inputOverlay}>
      {error && <div className={styles.inputOverlayError}>{error}</div>}
      {defaultValue && (
        <button className={styles.inputOverlayButton} onClick={setDefaultValue}>
          Set Default Value
          <small>
            {typeof defaultValue === "object"
              ? JSON.stringify(defaultValue)
              : defaultValue}
          </small>
        </button>
      )}
      {exampleValue && (
        <button className={styles.inputOverlayButton} onClick={setExampleValue}>
          Set Example Value
          <small>
            {typeof exampleValue === "object"
              ? JSON.stringify(exampleValue)
              : exampleValue}
          </small>
        </button>
      )}
    </div>
  );
};

export default ApiParamInputOverlay;
