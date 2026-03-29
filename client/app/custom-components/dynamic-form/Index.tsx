"use client";
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FormInputSchema, FormSchema } from "./types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaCircle } from "react-icons/fa";

export const CustomForm = ({
  schema,
  submitHandler,
}: {
  schema: FormSchema;
  submitHandler: SubmitHandler<FieldValues>;
}) => {
  const mainSchema = schema.schema;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onChange",
  });

  return (
    <div className="w-full h-full px-20">
      <h2 className="text-black-head text-2xl text-center">
        {schema.formName}
      </h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        {mainSchema.map((schema, index) => (
          <CreateFormFields
            mainSchema={schema.fields}
            register={register}
            name={schema.name}
            errors={errors}
            columns={schema.noOfCol}
            setValue={setValue}
            watch={watch}
          />
        ))}
        <div className="w-full mt-10 flex justify-center items-center">
          <button
            type="submit"
            className="py-2 px-10 bg-teal-600 text-slate-200 rounded shadow-xl mb-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const CreateFormFields = ({
  columns,
  mainSchema,
  register,
  name,
  errors,
  setValue,
  watch,
}: {
  mainSchema: FormInputSchema[];
  register: UseFormRegister<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
  columns: number;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}) => {
  return (
    <div className="bg-stone-100 shadow-xl p-4 rounded mt-10 border-l-8 border-teal-700">
      <h3 className="text-xl font-medium text-sky-800 flex items-center gap-2">
        {" "}
        <FaCircle size={8} /> {name}
      </h3>
      <div className={`w-full grid ${gridColsMap[columns]} gap-5 mt-10 `}>
        {mainSchema.map((value, index) => {
          if (value.type === "select" && value.selectOptions) {
            return (
              <div className="flex flex-col gap-1.5" key={value.id}>
                <label
                  htmlFor={value.id}
                  className="text-sm font-semibold text-slate-600 tracking-wide uppercase"
                >
                  {value.label}
                  {value.required && (
                    <span className="text-rose-500 ml-1">*</span>
                  )}
                </label>

                <div className="relative group">
                  <select
                    id={value.id}
                    className="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 text-sm
                 shadow-sm transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-teal-500
                 group-hover:border-slate-300"
                    required={value.required}
                    {...register(value.id)}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-slate-400"
                    >
                      {value.placeholder || `select ${value.label}`}
                    </option>
                    {value.selectOptions.map((option, index) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {/* Subtle bottom accent line on focus */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-teal-500 rounded-full transition-all duration-300 group-focus-within:w-[calc(100%-16px)]" />
                </div>
                {errors[value.id] && (
                  <span className="text-red-500">Invalid format</span>
                )}
              </div>
            );
          }

          return (
            <div className="flex flex-col gap-1.5" key={value.id}>
              <label
                htmlFor={value.id}
                className="text-sm font-semibold text-slate-600 tracking-wide uppercase flex justify-between"
              >
                <div>
                  {value.label}
                  {value.required && (
                    <span className="text-rose-500 ml-1">*</span>
                  )}
                </div>
                {/* for watch when maxLength is metioned */}
                <div className="text-teal-600">
                  {value.maxLength ? (
                    <span
                      className={
                        (watch(value.id)?.length ?? 0) >= value.maxLength
                          ? "text-rose-500" // turns red when limit hit
                          : "text-teal-600"
                      }
                    >
                      {watch(value.id)?.length ?? 0}/{value.maxLength}
                    </span>
                  ) : null}
                </div>
              </label>

              <div className="relative group">
                <input
                  className="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 text-sm
                 shadow-sm transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-teal-500
                 group-hover:border-slate-300"
                  type={value.type}
                  id={value.id}
                  required={value.required}
                  maxLength={value.maxLength}
                  max={value.max}
                  min={value.min}
                  placeholder={value.placeholder}
                  {...register(value.id, {
                    onChange: (e) => {
                      if (value.patternmatch) {
                        const cleaned = e.target.value.replace(
                          value.patternmatch,
                          "",
                        );
                        setValue(value.id, cleaned);
                      }
                    },
                  })}
                />
                {/* Subtle bottom accent line on focus */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-teal-500 rounded-full transition-all duration-300 group-focus-within:w-[calc(100%-16px)]" />
              </div>
              {errors[value.id] && (
                <span className="text-red-500">Invalid format</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const gridColsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};
