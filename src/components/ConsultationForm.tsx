"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { useState, type FormEvent } from "react";

type Inquiry = { name: string; email: string; phone: string; destination: string; studyLevel: string; startDate: string; message: string };
type FormErrors = Partial<Record<keyof Inquiry, string>>;
const initialInquiry: Inquiry = { name: "", email: "", phone: "", destination: "", studyLevel: "", startDate: "", message: "" };
const destinations = ["Germany", "United States", "United Kingdom"];

function validateContact(inquiry: Inquiry): FormErrors {
  const errors: FormErrors = {};
  if (inquiry.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) errors.email = "Enter a valid email address.";
  if (inquiry.phone.replace(/\D/g, "").length < 7) errors.phone = "Enter a phone number we can reach you on.";
  return errors;
}

function buildEmail(inquiry: Inquiry) {
  const subject = encodeURIComponent(`Study abroad consultation: ${inquiry.name}`);
  const body = encodeURIComponent(`Hello Affineks International,\n\nI'd like to discuss my study abroad plans.\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nDestination: ${inquiry.destination}\nStudy level: ${inquiry.studyLevel || "Not specified"}\nIntended start: ${inquiry.startDate || "Not specified"}\n\nA little more about my plans:\n${inquiry.message || "Not provided"}\n`);
  return `mailto:Affineksinternational@gmail.com?subject=${subject}&body=${body}`;
}

export function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [inquiry, setInquiry] = useState(initialInquiry);
  const [errors, setErrors] = useState<FormErrors>({});
  const [readyToSend, setReadyToSend] = useState(false);
  function updateField(field: keyof Inquiry, value: string) {
    setInquiry((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }
  function continueToDetails() {
    const contactErrors = validateContact(inquiry);
    setErrors(contactErrors);
    if (!Object.keys(contactErrors).length) setStep(2);
  }
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!inquiry.destination) nextErrors.destination = "Choose a destination to continue.";
    if (!inquiry.studyLevel) nextErrors.studyLevel = "Choose your intended study level.";
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) setReadyToSend(true);
  }

  return <div aria-live="polite" className="contact-form">
    {readyToSend ? <motion.div animate={{ opacity: 1, y: 0, scale: 1 }} className="success-state" initial={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.35, ease: "easeOut" }}>
      <div className="success-icon"><Check aria-hidden="true" size={29} /></div><h2>Your enquiry is ready.</h2><p>Open your email app to send your details to our team. Nothing is sent until you press send in your email.</p><a className="button-primary" href={buildEmail(inquiry)}>Email your enquiry <ArrowRight aria-hidden="true" size={16} /></a><button className="form-back" onClick={() => setReadyToSend(false)} type="button">Review my details</button>
    </motion.div> : <>
      <div aria-label={`Step ${step} of 2`} className="form-progress"><div aria-current={step === 1 ? "step" : undefined} className={`progress-step${step === 1 ? " active" : ""}`}><span>1</span>About you</div><div aria-hidden="true" className="progress-line" /><div aria-current={step === 2 ? "step" : undefined} className={`progress-step${step === 2 ? " active" : ""}`}><span>2</span>Your plans</div></div>
      <form noValidate onSubmit={submitInquiry}><AnimatePresence mode="wait">
        {step === 1 ? <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 12 }} key="contact-details" exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
          <h2>Let’s start with you.</h2><p className="form-subtitle">Share a few details so our team knows how to reach you.</p>
          <div className="form-fields">
            <div className="field field-full"><label htmlFor="full-name">Full name</label><input aria-invalid={Boolean(errors.name)} autoComplete="name" id="full-name" onChange={(event) => updateField("name", event.target.value)} value={inquiry.name} />{errors.name && <span className="field-error" role="alert">{errors.name}</span>}</div>
            <div className="field"><label htmlFor="email-address">Email address</label><input aria-invalid={Boolean(errors.email)} autoComplete="email" id="email-address" onChange={(event) => updateField("email", event.target.value)} type="email" value={inquiry.email} />{errors.email && <span className="field-error" role="alert">{errors.email}</span>}</div>
            <div className="field"><label htmlFor="phone-number">Phone number</label><input aria-invalid={Boolean(errors.phone)} autoComplete="tel" id="phone-number" onChange={(event) => updateField("phone", event.target.value)} type="tel" value={inquiry.phone} />{errors.phone && <span className="field-error" role="alert">{errors.phone}</span>}</div>
          </div><div className="form-actions"><span /><button className="button-primary" onClick={continueToDetails} type="button">Continue <ArrowRight aria-hidden="true" size={16} /></button></div>
        </motion.div> : <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 12 }} key="study-plans" exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
          <h2>Where would you like to go?</h2><p className="form-subtitle">Tell us a little about the study journey you have in mind.</p>
          <div className="form-fields">
            <div className="field field-full"><span className="field-label" id="destination-label">Preferred destination</span><div aria-labelledby="destination-label" className="destination-options" role="radiogroup">{destinations.map((destination) => <div className="destination-option" key={destination}><input checked={inquiry.destination === destination} id={`destination-${destination}`} name="destination" onChange={() => updateField("destination", destination)} type="radio" /><label htmlFor={`destination-${destination}`}>{destination === "United States" ? "USA" : destination === "United Kingdom" ? "UK" : destination}</label></div>)}</div>{errors.destination && <span className="field-error" role="alert">{errors.destination}</span>}</div>
            <div className="field"><label htmlFor="study-level">Study level</label><select aria-invalid={Boolean(errors.studyLevel)} id="study-level" onChange={(event) => updateField("studyLevel", event.target.value)} value={inquiry.studyLevel}><option value="">Select a level</option><option value="Undergraduate">Undergraduate</option><option value="Postgraduate">Postgraduate</option><option value="Foundation">Foundation</option><option value="Other">Other</option></select>{errors.studyLevel && <span className="field-error" role="alert">{errors.studyLevel}</span>}</div>
            <div className="field"><label htmlFor="start-date">When would you like to start?</label><select id="start-date" onChange={(event) => updateField("startDate", event.target.value)} value={inquiry.startDate}><option value="">Choose a timeframe</option><option value="Within 6 months">Within 6 months</option><option value="6–12 months">6–12 months</option><option value="More than a year">More than a year</option><option value="I am exploring">I am exploring</option></select></div>
            <div className="field field-full"><label htmlFor="study-message">Anything else you’d like us to know? <span>(optional)</span></label><textarea id="study-message" onChange={(event) => updateField("message", event.target.value)} placeholder="Your subject, questions, or where you are in the process…" value={inquiry.message} /></div>
          </div><div className="form-actions"><button className="form-back" onClick={() => setStep(1)} type="button"><ArrowLeft aria-hidden="true" size={15} /> Back</button><button className="button-primary" type="submit">Prepare enquiry <ArrowRight aria-hidden="true" size={16} /></button></div>
        </motion.div>}
      </AnimatePresence></form>
      <div className="form-privacy"><LockKeyhole aria-hidden="true" size={13} /> Your details are only used to prepare your enquiry.</div>
    </>}
  </div>;
}