import { useRef, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormControl, Button, Modal } from 'react-bootstrap';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';

const ModalForm = ({ show, onClose, schema, initialValues, onSubmit, i18nKeyPrefix }) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const title = t(`${i18nKeyPrefix}.title`);
  const confirmText = t(`${i18nKeyPrefix}.buttonConfirm`);
  const cancelText = t(`${i18nKeyPrefix}.buttonCancel`);
  const placeholder = t(`${i18nKeyPrefix}.placeholder`);
  const labelText = t(`${i18nKeyPrefix}.labelText`);
  const netErrorText = t('modal.form.netError');

  return (
    <Modal show={show} onHide={onClose} autoFocus={false} data-bs-theme="dark">
      <FocusLock returnFocus>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await onSubmit(values);
            } catch (error) {
              setErrors({ name: error.message || netErrorText });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form noValidate>
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="mb-3">
                  <label className="sr-only" htmlFor="channel-name">
                    {labelText}
                  </label>

                  <Field name="name">
                    {({ field }) => (
                      <FormControl
                        {...field}
                        id="channel-name"
                        type="text"
                        placeholder={placeholder}
                        ref={inputRef}
                        aria-label={labelText}
                      />
                    )}
                  </Field>

                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={onClose} aria-label="Close modal">
                  {cancelText}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  aria-label={confirmText}
                >
                  {confirmText}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </FocusLock>
    </Modal>
  );
};

export default ModalForm;
