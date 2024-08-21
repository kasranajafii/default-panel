import Button from "@/components/cuipe/Button";
import Success from "@/components/icons/Success";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Forth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoToDashboard = () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <span className="pb-6">
            <Success />
          </span>
          <div className="font-bold text-lg md:text-2xl leading-10 pb-8">
            Nice to have you, Acme Inc. 🙌
          </div>
          <Link href={"/"}>
            <Button
              onClick={handleGoToDashboard}
              size="lg"
              variant="primary"
              Posticon={<ArrowBigRight className="size-5" />}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Go To Dashboard"}
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Forth;
