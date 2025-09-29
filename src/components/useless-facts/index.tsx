"use client";
import React, { useEffect, useState } from "react";

interface FactData {
  id?: string;
  text: string;
  source?: string;
  source_url?: string;
  language?: string;
  permalink?: string;
}

interface ApiResponse {
  text: string;
  [key: string]: unknown;
}

interface UselessFactsState {
  fact: FactData | null;
  isLoading: boolean;
  hasError: boolean;
}

interface UselessFactsConfig {
  apiUrl: string;
  styles: {
    container: string;
    loading: string;
    error: string;
    fact: string;
  };
  messages: {
    loading: string;
    error: string;
  };
}

interface UselessFactsProps {
  className?: string;
  retryOnError?: boolean;
}

const UselessFacts: React.FC<UselessFactsProps> = ({
  className = "",
  retryOnError = false,
}) => {
  /* Constants */
  const USELESS_FACTS_CONFIG: UselessFactsConfig = {
    apiUrl: "https://uselessfacts.jsph.pl/api/v2/facts/random",
    styles: {
      container: "",
      loading: "text-gray-400",
      error: "text-gray-400",
      fact: "",
    },
    messages: {
      loading: "Loading...",
      error:
        "Oops! something went wrong\nCheck your connection and try again :)",
    },
  } as const;

  /* States */
  const [factState, setFactState] = useState<UselessFactsState>({
    fact: null,
    isLoading: true,
    hasError: false,
  });

  /* Functions */
  const fetchRandomFact = async (): Promise<void> => {
    try {
      setFactState((prev) => ({ ...prev, isLoading: true, hasError: false }));

      const response = await fetch(USELESS_FACTS_CONFIG.apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const textData = await response.text();
      const parsedData: ApiResponse = JSON.parse(textData);

      const factData: FactData = {
        text: parsedData.text || "No fact available",
        ...parsedData,
      };

      setFactState({
        fact: factData,
        isLoading: false,
        hasError: false,
      });
    } catch (error) {
      console.error("Error fetching useless fact:", error);
      setFactState({
        fact: null,
        isLoading: false,
        hasError: true,
      });
    }
  };

  const handleRetry = (): void => {
    if (retryOnError) {
      fetchRandomFact();
    }
  };

  const renderLoadingState = (): React.ReactNode => (
    <i className={USELESS_FACTS_CONFIG.styles.loading}>
      {USELESS_FACTS_CONFIG.messages.loading}
    </i>
  );

  const renderErrorState = (): React.ReactNode => (
    <i className={USELESS_FACTS_CONFIG.styles.error}>
      {USELESS_FACTS_CONFIG.messages.error.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index <
            USELESS_FACTS_CONFIG.messages.error.split("\n").length - 1 && (
            <br />
          )}
        </React.Fragment>
      ))}
      {retryOnError && (
        <>
          <br />
          <button
            onClick={handleRetry}
            className="underline hover:no-underline mt-2"
            type="button"
          >
            Try again
          </button>
        </>
      )}
    </i>
  );

  const renderFactContent = (): React.ReactNode => {
    if (factState.isLoading) {
      return renderLoadingState();
    }

    if (factState.hasError) {
      return renderErrorState();
    }

    if (factState.fact?.text) {
      return (
        <span className={USELESS_FACTS_CONFIG.styles.fact}>
          {factState.fact.text}
        </span>
      );
    }

    return null;
  };

  /* Side-Effects */
  useEffect(() => {
    fetchRandomFact();
  }, []);

  /* Output */
  return (
    <p className={`${USELESS_FACTS_CONFIG.styles.container} ${className}`}>
      {renderFactContent()}
    </p>
  );
};

export default UselessFacts;
