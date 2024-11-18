/* eslint-disable react/prop-types */
import InputText from "../components/InputText";
export default function FormSection1({ view }) {
  return (
    <>
      <section className={`sectionOne d-flex ${view === 0 ? "" : "d-none"}`}>
        <InputText
          title="Name"
          type="name"
          name="FullName"
          placeholder="e.g. Stephen Adewale"
          autoComplete="cc-name"
        />
        <InputText
          title="Email Address"
          type="email"
          name="EmailAddress"
          placeholder="e.g. adewalestephennifemi@gmail.com"
          autoComplete="email"
        />
        <InputText
          title="Phone Number"
          type="tel"
          name="PhoneNumber"
          placeholder="e.g. +234 903 009 4270"
          autoComplete="tel"
        />
      </section>
    </>
  );
}