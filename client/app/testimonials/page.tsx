"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Zap } from "lucide-react";
import { toast } from "sonner";

type CaseStudyData = {
  originalText: string;
  summary: string;
};

const AICaseStudyUploader: React.FC = () => {
  const [caseStudyText, setCaseStudyText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [summaryData, setSummaryData] = useState<CaseStudyData | null>(null);

  const handleGenerateSummary = async () => {
    if (caseStudyText.trim().length < 200) {
      toast.error(
        "Case study text must be at least 200 characters long for a meaningful summary."
      );
      return;
    }

    setLoading(true);
    setSummaryData(null);

    try {
      const response = await fetch("/api/ai/summarize-case-study", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: caseStudyText }),
      });

      if (!response.ok) throw new Error("Failed to generate summary.");

      const data = await response.json();
      if (!data?.summary) throw new Error("Invalid response from AI service.");

      setSummaryData({
        originalText: caseStudyText,
        summary: data.summary.trim(),
      });
      toast.success("AI summary generated successfully!");
    } catch (err) {
      console.error("AI Error:", err);
      toast.error("Error generating summary. Check API key or service.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Summary copied to clipboard!");
    } catch {
      toast.error("Failed to copy summary.");
    }
  };

  return (
    <Card className="max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-zinc-600" />
          Case Study Uploader & AI Summary
        </CardTitle>
        <CardDescription>
          Paste your long-form case study to generate an SEO-friendly summary.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="case-study-input">Full Case Study Text</Label>
          <Textarea
            id="case-study-input"
            placeholder="Paste the detailed case study text here..."
            rows={10}
            value={caseStudyText}
            onChange={(e) => setCaseStudyText(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            💡 Tip: Include goals, challenges, approach, and measurable results
            for best outcomes.
          </p>
        </div>

        <Button
          onClick={handleGenerateSummary}
          disabled={loading || !caseStudyText.trim()}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Summary...
            </>
          ) : (
            <>
              <Zap className="mr-2 h-4 w-4" />
              Generate AI Summary
            </>
          )}
        </Button>

        {summaryData && (
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-xl font-semibold">AI Generated Summary</h3>
            <p className="text-sm italic text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
              {summaryData.summary}
            </p>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(summaryData.summary)}
              >
                Copy Summary
              </Button>
              <Button
                size="sm"
                onClick={() =>
                  toast.success("Save action triggered (add DB logic).")
                }
              >
                Save Case Study
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ✅ Important: Default export required for Next.js page components
export default AICaseStudyUploader;
