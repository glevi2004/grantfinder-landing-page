"use client";

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Step1Data {
  fullName: string;
  workEmail: string;
  schoolDistrict: string;
  position: string;
  state: string;
  county: string;
}

interface Step3Data {
  biggestChallenges: string[];
  timeSpentSearching: string;
  platformsUsed: string[];
  otherPlatform: string;
  mostChallengingPart: string;
  policyChangesImpact: string;
  policyChangesDetails: string;
  toolLikelihood: string;
  followUpInterest: string;
}

interface FormData extends Step1Data, Step3Data {}

type Step = 1 | 2 | 3 | 4;

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function WaitlistForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 1 form data
  const [step1Data, setStep1Data] = useState<Step1Data>({
    fullName: "",
    workEmail: "",
    schoolDistrict: "",
    position: "",
    state: "",
    county: "",
  });

  // Step 3 form data
  const [step3Data, setStep3Data] = useState<Step3Data>({
    biggestChallenges: [],
    timeSpentSearching: "",
    platformsUsed: [],
    otherPlatform: "",
    mostChallengingPart: "",
    policyChangesImpact: "",
    policyChangesDetails: "",
    toolLikelihood: "",
    followUpInterest: "",
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Validate email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!step1Data.fullName.trim())
      newErrors.fullName = "Full name is required";
    if (!step1Data.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!validateEmail(step1Data.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!step1Data.schoolDistrict.trim())
      newErrors.schoolDistrict = "School district is required";
    if (!step1Data.position.trim())
      newErrors.position = "Position/title is required";
    if (!step1Data.state.trim()) newErrors.state = "State is required";
    if (!step1Data.county.trim()) newErrors.county = "County is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Step 1 submission
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;

    setIsSubmitting(true);

    // Simulate brief loading
    setTimeout(() => {
      setCurrentStep(2);
      setShowConfetti(true);
      setIsSubmitting(false);

      // Auto-transition to step 3 after 4 seconds
      setTimeout(() => {
        setShowConfetti(false);
        setCurrentStep(3);
      }, 4000);
    }, 500);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (
    field: "biggestChallenges" | "platformsUsed",
    value: string
  ) => {
    setStep3Data((prev) => {
      const currentArray = prev[field];
      const isChecked = currentArray.includes(value);

      if (field === "biggestChallenges") {
        // Limit to 2 selections
        if (isChecked) {
          return {
            ...prev,
            [field]: currentArray.filter((item) => item !== value),
          };
        } else if (currentArray.length < 2) {
          return { ...prev, [field]: [...currentArray, value] };
        }
        return prev;
      } else {
        // No limit for platforms
        if (isChecked) {
          return {
            ...prev,
            [field]: currentArray.filter((item) => item !== value),
          };
        } else {
          return { ...prev, [field]: [...currentArray, value] };
        }
      }
    });
  };

  // Handle final submission
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const completeData: FormData = {
        ...step1Data,
        ...step3Data,
      };

      // Add timestamp
      const submissionData = {
        ...completeData,
        submittedAt: new Date().toISOString(),
        timestamp: Date.now(),
      };

      // Submit to Firebase
      await addDoc(collection(db, "waitlist"), submissionData);

      // Show final success with confetti
      setCurrentStep(4);
      setShowConfetti(true);

      // Redirect to landing page after 4 seconds
      setTimeout(() => {
        setShowConfetti(false);
        router.push("/");
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 1: Initial Sign-up Form
  if (currentStep === 1) {
    return (
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Join the Waitlist</CardTitle>
            <CardDescription>
              Be the first to know when GrantFinder AI launches. All fields are
              required.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleStep1Submit}>
            <CardContent className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={step1Data.fullName}
                  onChange={(e) =>
                    setStep1Data((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium mb-1"
                >
                  Work Email *
                </label>
                <input
                  id="workEmail"
                  type="email"
                  value={step1Data.workEmail}
                  onChange={(e) =>
                    setStep1Data((prev) => ({
                      ...prev,
                      workEmail: e.target.value,
                    }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.workEmail ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your.email@district.edu"
                />
                {errors.workEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.workEmail}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="schoolDistrict"
                  className="block text-sm font-medium mb-1"
                >
                  School District *
                </label>
                <input
                  id="schoolDistrict"
                  type="text"
                  value={step1Data.schoolDistrict}
                  onChange={(e) =>
                    setStep1Data((prev) => ({
                      ...prev,
                      schoolDistrict: e.target.value,
                    }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.schoolDistrict ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your school district"
                />
                {errors.schoolDistrict && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.schoolDistrict}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium mb-1"
                >
                  Position / Title *
                </label>
                <input
                  id="position"
                  type="text"
                  value={step1Data.position}
                  onChange={(e) =>
                    setStep1Data((prev) => ({
                      ...prev,
                      position: e.target.value,
                    }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.position ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="e.g., Grant Writer, Superintendent, etc."
                />
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium mb-1"
                >
                  State *
                </label>
                <select
                  id="state"
                  value={step1Data.state}
                  onChange={(e) =>
                    setStep1Data((prev) => ({ ...prev, state: e.target.value }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select your state</option>
                  {US_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="county"
                  className="block text-sm font-medium mb-1"
                >
                  County *
                </label>
                <input
                  id="county"
                  type="text"
                  value={step1Data.county}
                  onChange={(e) =>
                    setStep1Data((prev) => ({
                      ...prev,
                      county: e.target.value,
                    }))
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.county ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your county"
                />
                {errors.county && (
                  <p className="text-red-500 text-sm mt-1">{errors.county}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }

  // Step 2: Success Animation & Transition
  if (currentStep === 2) {
    return (
      <div className="max-w-md mx-auto">
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
          />
        )}
        <Card className="text-center">
          <CardContent className="pt-8 pb-8">
            <div className="mb-4">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Success! You're on the list.
              </h2>
              <p className="text-gray-600">
                Thank you for your interest in GrantFinder AI. To help us build
                the best platform for your district's needs, please take a
                moment to answer a few quick questions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Step 4: Final Success
  if (currentStep === 4) {
    return (
      <div className="max-w-md mx-auto">
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
            gravity={0.3}
          />
        )}
        <Card className="text-center">
          <CardContent className="pt-8 pb-8">
            <div className="mb-4">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Welcome to the Future!
              </h2>
              <p className="text-gray-600">
                Thank you for joining our waitlist! Your responses have been
                submitted successfully. You'll be among the first to know when
                GrantFinder AI launches.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Redirecting you back to the homepage...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Step 3: Quick Questionnaire
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Quick Research Survey</CardTitle>
          <CardDescription>
            Help us understand your grant management challenges and build a
            better solution for you.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleFinalSubmit}>
          <CardContent className="space-y-6">
            {/* Question 1: Biggest Challenges */}
            <div>
              <label className="block text-sm font-medium mb-3">
                1. What is your biggest challenge with the grants process?
                (Select up to 2)
              </label>
              <div className="space-y-2">
                {[
                  "Finding relevant opportunities is too time-consuming.",
                  "We waste time on grants we're not eligible for.",
                  "The narrative writing and drafting process is slow.",
                  "Managing team collaboration and deadlines is disjointed.",
                  "Post-award compliance and reporting is a major burden.",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={step3Data.biggestChallenges.includes(option)}
                      onChange={() =>
                        handleCheckboxChange("biggestChallenges", option)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      disabled={
                        !step3Data.biggestChallenges.includes(option) &&
                        step3Data.biggestChallenges.length >= 2
                      }
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2: Time Spent */}
            <div>
              <label className="block text-sm font-medium mb-3">
                2. How much time is typically spent searching for grants each
                month?
              </label>
              <div className="space-y-2">
                {[
                  "Less than 5 hours",
                  "5–10 hours",
                  "10–20 hours",
                  "More than 20 hours",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="timeSpentSearching"
                      value={option}
                      checked={step3Data.timeSpentSearching === option}
                      onChange={(e) =>
                        setStep3Data((prev) => ({
                          ...prev,
                          timeSpentSearching: e.target.value,
                        }))
                      }
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3: Platforms Used */}
            <div>
              <label className="block text-sm font-medium mb-3">
                3. Which websites or platforms do you rely on most when
                searching for grants? (Select all that apply)
              </label>
              <div className="space-y-2">
                {[
                  "Grants.gov",
                  "State Department of Education websites",
                  "Other federal/agency portals",
                  "Third-party tools (e.g., Instrumentl, GrantAble)",
                  "Other (please specify)",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={step3Data.platformsUsed.includes(option)}
                      onChange={() =>
                        handleCheckboxChange("platformsUsed", option)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {step3Data.platformsUsed.includes("Other (please specify)") && (
                <input
                  type="text"
                  value={step3Data.otherPlatform}
                  onChange={(e) =>
                    setStep3Data((prev) => ({
                      ...prev,
                      otherPlatform: e.target.value,
                    }))
                  }
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please specify..."
                />
              )}
            </div>

            {/* Question 4: Most Challenging Part */}
            <div>
              <label className="block text-sm font-medium mb-3">
                4. What is the most challenging part of your grant writing
                process? (Choose one)
              </label>
              <div className="space-y-2">
                {[
                  "Finding relevant grants",
                  "Determining eligibility",
                  "Gathering and preparing data",
                  "Internal approvals",
                  "Submitting and tracking applications",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="mostChallengingPart"
                      value={option}
                      checked={step3Data.mostChallengingPart === option}
                      onChange={(e) =>
                        setStep3Data((prev) => ({
                          ...prev,
                          mostChallengingPart: e.target.value,
                        }))
                      }
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 5: Policy Changes */}
            <div>
              <label className="block text-sm font-medium mb-3">
                5. Have recent federal or state policy changes affected your
                grant writing workflow?
              </label>
              <div className="space-y-2">
                {[
                  "Yes – significantly",
                  "Yes – somewhat",
                  "No impact",
                  "Not sure",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="policyChangesImpact"
                      value={option}
                      checked={step3Data.policyChangesImpact === option}
                      onChange={(e) =>
                        setStep3Data((prev) => ({
                          ...prev,
                          policyChangesImpact: e.target.value,
                        }))
                      }
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
              {(step3Data.policyChangesImpact === "Yes – significantly" ||
                step3Data.policyChangesImpact === "Yes – somewhat") && (
                <textarea
                  value={step3Data.policyChangesDetails}
                  onChange={(e) =>
                    setStep3Data((prev) => ({
                      ...prev,
                      policyChangesDetails: e.target.value,
                    }))
                  }
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Please describe the impact..."
                />
              )}
            </div>

            {/* Question 6: Tool Likelihood */}
            <div>
              <label className="block text-sm font-medium mb-3">
                6. If a tool could save you 5–10 hours per month by simplifying
                the search, eligibility, and management process, how likely
                would you be to try it?
              </label>
              <div className="space-y-2">
                {[
                  "Very likely",
                  "Somewhat likely",
                  "Not likely",
                  "Not sure",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="toolLikelihood"
                      value={option}
                      checked={step3Data.toolLikelihood === option}
                      onChange={(e) =>
                        setStep3Data((prev) => ({
                          ...prev,
                          toolLikelihood: e.target.value,
                        }))
                      }
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 7: Follow-up */}
            <div>
              <label className="block text-sm font-medium mb-3">
                7. (Optional) Would you be open to a quick 15-minute follow-up
                conversation?
              </label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="followUpInterest"
                      value={option}
                      checked={step3Data.followUpInterest === option}
                      onChange={(e) =>
                        setStep3Data((prev) => ({
                          ...prev,
                          followUpInterest: e.target.value,
                        }))
                      }
                      className="border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Survey"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
