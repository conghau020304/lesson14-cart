import React from "react";
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray
} from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  MenuItem,
  Select
} from "@material-ui/core";
import * as yup from "yup";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required()
    })
  )
});

function DemoFormik() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: false,
          cookies: [],
          yogurt: "",
          pets: [{ type: "cat", name: "Tom", id: "" + Math.random() }]
        }}
        validationSchema={validationSchema}
        // validate={values => {
        //   const errors: Record<string, string> = {};
        //   if (values.firstName.includes("lol")) {
        //     errors.firstName = "no lol";
        //   }
        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <label>First Name</label>
              <MyTextField
                placeholder="Enter First Name"
                type="input"
                name="firstName"
              />
            </div>
            <div>
              <label>LastName</label>
              <Field
                placeholder="Enter Last Name"
                type="input"
                name="lastName"
                as={TextField}
              />
            </div>
            <div>
              <label>Is Tall</label>
              <Field name="isTall" type="checkbox" as={Checkbox} />
            </div>
            <div>
              <label>Cookies</label>
              <Field
                name="cookies"
                type="checkbox"
                value="Java"
                label="Java"
                as={Checkbox}
              />
              <Field
                name="cookies"
                type="checkbox"
                value="C/C++"
                label="C/C++"
                as={Checkbox}
              />
              <Field name="cookies" type="checkbox" value="PHP" as={Checkbox} />
              <Field
                name="cookies"
                type="checkbox"
                value=".NET"
                as={Checkbox}
              />
            </div>
            <div>
              <MyRadio name="yogurt" type="radio" label="Blue" value="Blue" />
              <MyRadio name="yogurt" type="radio" label="Red" value="Red" />
              <MyRadio
                name="yogurt"
                type="radio"
                label="Yellow"
                value="Yellow"
              />
              <MyRadio name="yogurt" type="radio" label="Green" value="Green" />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </div>
            <div>
              <FieldArray
                name="pets"
                render={arrayHelpers => (
                  <div>
                    <Button
                      onClick={() =>
                        arrayHelpers.push({
                          type: "frog",
                          name: "",
                          id: "" + Math.random()
                        })
                      }
                    >
                      Add
                    </Button>
                    {values.pets
                      ? values.pets.map((pet, index) => {
                          return (
                            <div key={pet.id}>
                              <MyTextField
                                placeholder="pet name"
                                name={`pets.${index}.name`}
                              />
                              <Field
                                name={`pets.${index}.type`}
                                type="select"
                                as={Select}
                              >
                                <MenuItem value="cat">Cat</MenuItem>
                                <MenuItem value="dog">Dog</MenuItem>
                                <MenuItem value="frog">Frog</MenuItem>
                              </Field>
                              <Button
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                X
                              </Button>
                            </div>
                          );
                        })
                      : null}
                  </div>
                )}
              />
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DemoFormik;
